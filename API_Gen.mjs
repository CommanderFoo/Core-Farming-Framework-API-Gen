import { readFile, writeFile } from "fs/promises";
import Headers from "./headers.mjs";
import glob from "glob";

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
		if(!content){
			return [];
		}

		let events = []
		let events_part = content.split("EVENTS")[1];
		let lines = events_part.split("\n");
		
		lines.forEach((line, index) => {
			if(line.match(/\d+\.\s+/)){
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
			files.forEach((file, index) => API_Gen.build_doc(cwd, file));
		});
	}

	static async build_doc(path, file){
		let contents = "";
		let summary = "";

		//let readme_contents = await this.get_file(path + readme + " README.lua");
		
		if(file && file.length > 0){
			contents = await this.get_file(path + file);
		}

		let events = this.get_events(readme_contents);
		let methods = this.get_methods(contents);
		let key = file.replace("API", "").split(".")[0];

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

		writeFile("./Output/" + key + ".md", output, { flag: "w+" });
	}

}

export default API_Gen