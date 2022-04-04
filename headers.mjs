let Headers = {}

Headers.Areas = `
The Areas system is meant to be used to chunk your environment into discrete pieces that can be loaded on demand.
This provides a much more performant experience for Players and lets creators include much more content in their
games.

As Players move through Areas they can be moved to specific spawn points, be placed into pools of Areas, have
templates loaded into client, server or static contexts and more.
`;

Headers.Crafting = `
The Crafting system can be used to turn one thing into another over a period of time. This can be done at individual Crafting Stations or through a screen not associated to a station.
`;

Headers.Currency = `
Currency is a drop in system that provides ready to go Player Currency management without any code required. It also provides a full API for creators with scripting knowledge to allow them to expand on or change how the Currency works.

Any amount of Currencies can be added to a game and you can use them for more than just visible currency amounts.
For example, a Currency could be used to track the scores in a game.
`;

Headers.Inventory = `
Inventory is a drop in system that provides ready to go Player Inventory management without any code required. It also provides a full API for creators with scripting knowledge to allow them to expand on or change how the Inventory works.

The Inventory comes with a few potential setups. You can use a combined Inventory and Hotbar, Hotbar or individual Inventory Settings templates to create the Inventory you want for your game.

Inventory items can be dragged and dropped across Inventories. Items can also be dropped into the world or destroyed by being dropped on the trash icon in the provided UI.

Clicking Items that have been configured to be Equipment will optionally equip the item. Other custom actions could be created by listening for the Events that the Inventory broadcasts.
`;


export default Headers;