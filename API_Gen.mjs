import { readFile, writeFile } from "fs/promises";
import { existsSync } from "fs";
import glob from "glob";
import Headers from "./headers.mjs";
import { SlowBuffer } from "buffer";

class API_Gen {

	static async get_file(file){
		let contents = "";
		let read = readFile(file, "utf8").then(code => {
			
			contents = code;

		});

		await read;

		return contents;
	}

	static get_method_table_header(){
		return [
			
			"| Class Function Name | Return Type | Description | Tags |",
			"| ------------------- | ----------- | ----------- | ---- |\n"

		].join("\n");
	}

	static get_event_table_header(){
		return [
			
			"| Event Name | Return Type | Description | Tags |",
			"| ---------- | ----------- | ----------- | ---- |\n"

		].join("\n");
	}

	static get_info(index, lines){
		let comment = [];
		let params = [];
		let returns = [];

		let current_index = index - 1;
		let current_line = lines[current_index];

		while(current_index > 0 && current_line && current_line.length > 3 && current_line.match(/^---/)){
			if(current_line.match(/^---@return/)){
				returns = returns.concat(current_line.replace(/^---@return\s?/i, "").replace("\r", "").split("|"));
			} else if(current_line.match(/^---@param/i)){
				params.push({
					
					name: current_line.replace(/^---@param\s?/i, "").replace("\r", "").split(" ")[0],
					types: current_line.replace(/^---@param\s?/i, "").replace("\r", "").split(" ")[1].split("|"),

				});
			} else if(current_line.match(/^---[^@]/) && !current_line.match("---comment")){
				comment.push(current_line.replace(/^---\s?/i, "").replace("\r", ""));
			}

			current_index -= 1;
			current_line = lines[current_index];
		}

		return {

			comment: comment.reverse(),
			params,
			returns

		};
	}

	static get_methods(contents){
		let lines = contents.split("\n");
		let methods = []

		lines.forEach((line, index) => {
		
			let matches = line.match(/function API\.(\w+)/i)
				
			if(matches){
				let info = {

					name: matches[1],
					... this.get_info(index, lines)

				};

				methods.push(info);
			}

		});

		return methods;
	}

	static get_markdown_header(key){
		let header = Headers[key] || "";

		return "---\nid: " + key.toLowerCase() + "\nname: " + key + "\ntitle: " + key + "\n---\n\n# " + key + "\n" + header + "\n";
	}

	static get_events(content){
		if(!content || content.length == 0){
			return [];
		}

		let events = []
		let events_part = content.split("EVENTS")[1];

		if(events_part && events_part.length > 0){
			let lines = events_part.split("\n");
			
			lines.forEach((line, index) => {
				if(line.match(/\d+\.\s+API/)){
					let ret = lines[index + 2].match(/function\((.+?)\)/)[1];
					let ret_str = "";
					let parts = ret.split(",");
					
					for(let p = 0; p < parts.length; p ++){
						let part = parts[p].replace(/\s+/g, "");

						if(part == "player"){
							part = "Player";
						}

						ret_str += part;

						if(p < (parts.length - 1)){
							ret_str += ", ";
						}
					}
					
					events.push({

						event: line.match(/Events\.(\w+)/)[1],
						ret: ret_str,
						tag: lines[index + 2].match(/ - (Server|Client|Server \/ Client)/)[1],
						desc: lines[index + 4].split("- ")[1]

					})
				}
			});
		}

		return events;
	}

	static get_event_output(events){
		let output = this.get_event_table_header();

		events.forEach((entry, index) => {
			output += "| `" + entry.event + "` ";
			output += "| Event<" + entry.ret + "> ";
			output += "| " + entry.desc + " ";

			if(entry.tag && entry.tag.length){
				if(entry.tag.length > 6){
					output += "| None |";
				} else {
					output += "| " + entry.tag + " |";
				}
			} else {
				output += "| None |";
			}

			output += "\n";
		});

		return output + "\n";
	}

	static get_method_output(methods){
		let output = this.get_method_table_header();

		methods.forEach((entry, index) => {
			output += "| `" + entry.name + "()` ";
		
			if(entry.returns && entry.returns.length > 0){
				entry.returns.forEach((value, i) => {

					if(value != "nil"){
						output += "| ";

						if(value.match(/\[\]$/)){
							output += "`Array<" + value.split("[")[0] + ">` ";
						} else {
							output += "`" + value + "` ";
						}
					}

				});
			} else {
				output += "| `None` ";
			}

			if(entry.comment && entry.comment.length > 0){
				output += "| ";

				entry.comment.forEach((com, i) => {

					output += com;

				});
			}

			output += "| None |\n";

		});

		return output;
	}

	static build(cwd, project){
		cwd += ((cwd.match(/\/$/))? "" : "/") + project + "/data/scripts/";

		glob("API*.lua", { cwd }, function (err, files){
		//	files.forEach((file, index) => API_Gen.build_doc(cwd, file));
		});

		API_Gen.build_doc(cwd, "APIInventory.lua")
	}

	static get_examples(content){
		let examples = [];
		let end_parts = content.split("--#SampleEnd")

		for(let e = 0; e < end_parts.length; e ++){
			let sample = end_parts[e].split("--[[#SampleStart")[1];
			let methods = [];
			let events = [];
			let see_also = [];
			let desc = [];
			let example_code = [];

			if(sample){
				([... sample.matchAll(/method: ([\.\w]+)/g)]).forEach(entry => methods.push(entry[0].split(":")[1].trim()));
				([... sample.matchAll(/event: ([\.\w]+)/g)]).forEach(entry => events.push(entry[0].split(":")[1].trim()));

				let see_also_parts = sample.split("#see-also");

				if(see_also_parts.length == 2){
					let parts = see_also_parts[1].split("#description")[0].split("\n");

					if(parts.length){
						parts.forEach(part => {
							if(part.length > 3){
								see_also.push(part.replace(/[\t\r\n]/g, "").trim());
							}
						})
					}
				}

				let desc_str = sample.split("#description")[1].split("]]")[0].trim();
				let desc_parts = desc_str.split("\n");
				
				desc_parts.forEach(line => {
					desc.push(line.replace(/\t/g, "").replace(/(\n|\r){1}/, ""));
				})
				
				desc = desc.join("\n")

				let code_str = sample.split("]]")[1].trim();
				let code_parts = code_str.split("\n");

				code_parts.forEach(line => {
					example_code.push(line.replace("\t", ""))
				})
				
				example_code = example_code.join("\n").replace(/\t/g, "    ");

				// console.log(events)
				// console.log(methods)
				// console.log(see_also)
				// console.log(desc)
				// console.log(example_code)

				examples.push({

					events,
					methods,
					see_also,
					desc,
					example_code

				})				
			}
		}

		return examples;
	}

	static get_example_output(examples){
		let content = "";

		if(examples.length > 0){
			content = "\n## Examples\n";
		}

		examples.forEach(example => {
			content += "\nExample using:\n\n";
			
			example.methods.forEach(method => {
				content += "### `" + method + "`\n\n";
			})

			example.events.forEach(event => {
				content += "### `" + event + "`\n\n";
			})

			content += example.desc + "\n\n";
			content += "```lua\n" + example.example_code + "\n```";

			if(example.see_also.length){
				content += "\n\nSee Also: ";

				example.see_also.forEach((see, see_index) => {
					content += see;

					if(see_index < (example.see_also - 1)){
						content += " |";
					}
				});
			}
		});

		return content + "\n";
	}

	static async build_doc(path, file){
		let contents = "";
		let readme_contents = "";
		let key = file.replace("API", "").split(".")[0];
		let examples_content = "";

		if(file && file.length > 0){
			contents = await this.get_file(path + file);
		}

		if(existsSync(path + key + " README.lua")){
			readme_contents = await this.get_file(path + key + " README.lua");
		}

		if(existsSync(path + key + "_Examples.lua")){
			examples_content = await this.get_file(path + key + "_Examples.lua");
		}

		let events = this.get_events(readme_contents);
		let methods = this.get_methods(contents);
		let examples = this.get_examples(examples_content)
	
		methods.sort((a, b) => {

			return (a.name > b.name)? 1 : -1;

		});
		
		let output = this.get_markdown_header(key);
		
		if(events.length > 0){
			output += this.get_event_output(events);
		}

		if(methods.length > 0){
			output += this.get_method_output(methods);
		}

		if(examples.length > 0){
			output += this.get_example_output(examples);
		}

		writeFile("./Output/" + key + ".md", output, { flag: "w+" });
	}

}

export default API_Gen