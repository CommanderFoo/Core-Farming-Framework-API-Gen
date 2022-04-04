---
id: inventory
name: Inventory
title: Inventory
---

# Inventory

Inventory is a drop in system that provides ready to go Player Inventory management without any code required. It also provides a full API for creators with scripting knowledge to allow them to expand on or change how the Inventory works.

The Inventory comes with a few potential setups. You can use a combined Inventory and Hotbar, Hotbar or individual Inventory Settings templates to create the Inventory you want for your game.

Inventory items can be dragged and dropped across Inventories. Items can also be dropped into the world or destroyed by being dropped on the trash icon in the provided UI.

Clicking Items that have been configured to be Equipment will optionally equip the item. Other custom actions could be created by listening for the Events that the Inventory broadcasts.

| Event Name | Return Type | Description | Tags |
| ---------- | ----------- | ----------- | ---- |
| `InventoryRegistered` | Event<inventoryId> | Sent when an Inventory is registered on the server. Probably not super useful, but could be listened to to | Server |
| `InventoryUnregistered` | Event<inventoryId> | Sent when an Inventory is unregistered on the server. | Server |
| `InventoryLoaded` | Event<Player, inventoryId> | Sent when an Inventory is loaded on both server and the client for the Player that loaded the Inventory. | Server |
| `InventorySaved` | Event<Player, inventoryId> | Sent on the server each time an Inventory for a Player is saved. | Server |
| `InventoryAdded` | Event<Player, inventoryId, itemType, itemId, amountData> | Sent each time an Item is added to an Inventory for a Player. This event sends on the server as well as the | Server |
| `InventoryRemoved` | Event<Player, inventoryId, itemType, itemId, amountData> | Sent each time an Item is removed from an Inventory for a Player. This event sends on the server as well as | Server |
| `InventoryTransferred` | Event<Player, sourceInventoryId, sourceSlotIndex, targetInventoryId, targetSlotIndex> | Sent each time an Item is moved from one slot to another in the same or to another Inventory for a Player. | Server |
| `InventoryCleared` | Event<Player, inventoryId, resetToStartingItems> | Sent each time an Inventory is cleared for a Player. Clearing an Inventory can optionally reset it to have its | Server |
| `SlotEquipped` | Event<inventoryId, slotIndex> | Sent to the client of the Player that equipped the Item in their Inventory. | Client |
| `SlotUnequipped` | Event<inventoryId, slotIndex> | Sent to the client of the Player that unequipped the Item in their Inventory. | Client |
| `SlotClicked` | Event<Player, inventoryId, slotIndex> | Sent from the provided InventoryScreenSlot when clicked. If a custom UI is created this Event will need to be | Client |
| `SlotDropped` | Event<Player, sourceInventoryId, sourceSlotIndex, dropTargetId, targetInventoryId, targetSlotIndex> | Sent from the provided InventoryScreenSlot when dropped. If a custom UI is created this Event will need to be | Client |
| `SlotRightClicked` | Event<Player, inventoryId, slotIndex> | Sent from the provided InventoryScreenSlot when right-clicked. If a custom UI is created this Event will need to be | Client |

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `AddToInventory()` | `boolean` | Adds an amount of an item to one or More Inventories for a Player. If slotIndex is used this will only use thatslot, otherwise it will look for available slots.| None |
| `CanAddItemsToInventory()` | `string` | `boolean` | Returns true if the list of Items can fit in the Inventory specified, or in any available Inventories.| None |
| `CanAddToInventory()` | `string` | `boolean` | Returns true if an amount of an item can be added to a specific Inventory for a Player. If slotIndex is used this willonly check that slot, otherwise it will look for available slots.| None |
| `CanAddToInventoryFromDrops()` | `boolean` | Returns true if a set of Drops can fit in the Inventory specified, or in any available Inventories.| None |
| `CanRemoveFromInventory()` | `boolean` | Returns true if an amount of an item can be removed from a specific Inventory for a Player. If slotIndex is used this will only check that slot, otherwise it will check the entire Inventory.| None |
| `CanRemoveItemsFromInventory()` | `string` | `boolean` | Returns true if the list of Items can be removed from the Inventory specified, or from any available Inventories.| None |
| `CanTransferToInventory()` | `boolean` | Returns true if a slot can be moved from one Inventory to another, or to another slot in the same Inventory. If targetSlotIndex is not defined a target slot will be found.| None |
| `ClearAllInventories()` | `None` | Resets all storage keys for inventories from a given player,and clears any inventory data from player storage.| None |
| `ClearInventory()` | `boolean` | Clears an Inventory for a Player.| None |
| `CreateInventoryData()` | `table` | Creates a default Inventory contents table.| None |
| `GetAmountInInventory()` | `integer` | Returns the amount of an item in one or more Inventories for a Player. If slotIndex is used this will only check that slot.| None |
| `GetAvailableSlotIndex()` | `integer` | Returns the index of the first available slot for an amount of an item, or 0 if none are found.| None |
| `GetBaseInventoryId()` | `string` | Returns the base Inventory Id from a generated container Id.| None |
| `GetContainerItemId()` | `string` | Returns the Item Id a container was generated from if a container id is provided.| None |
| `GetFirstEmptySlotIndex()` | `integer` | Returns the index of the first empty slot. Will return 0 if no slot is available.| None |
| `GetInventories()` | `table` | Returns all registered Inventories.| None |
| `GetInventory()` | `table` | Gets the Inventory contents for a specific Player.| None |
| `GetInventoryIdFromKey()` | `string` | Returns the Inventory id associated with an Inventory key.| None |
| `GetInventoryKey()` | `string` | Returns the key used for storage and networking for an Inventory.| None |
| `GetItemInSlot()` | `table` | Returns the contents of a slot for a Player| None |
| `GetItemType()` | `integer` | Returns the ItemType for an Item id.| None |
| `GetPriorityInventoryId()` | `string` | Returns the highest priority Inventory id that can fit the supplied item. Does not include containers.| None |
| `GetRemainingSlotCapacity()` | `integer` | Returns the amount of remaining capacity available in a specific slot of an Inventory for a Player.If the slot is empty, it will return the maximum slot capacity.| None |
| `GetSetting()` | `any` | Gets a setting for a specific Inventory.| None |
| `GetSettings()` | `table` | Gets the table of all settings for a specific Inventory.| None |
| `GetSlotIndexForItem()` | `integer` | Returns the index of a slot containing an item. This will return the slot with the smallest amount of the item, or 0 if none are found.| None |
| `GetUniqueContainerId()` | `string` | Returns a unique(ish) container id.| None |
| `HasAmountInInventory()` | `boolean` | Returns true if the Player has the amount of an item in one or more Inventories. If slotIndex is used this will only check that slot.| None |
| `IsAnyInventoryRegistered()` | `boolean` | Returns true if any Inventory has been registered.| None |
| `IsContainerInventory()` | `boolean` | Returns true of the Inventory is a container.| None |
| `IsContainerInventoryId()` | `boolean` | Returns true if the Inventory Id is a generated container Id.| None |
| `IsInventoryKey()` | `boolean` | Returns true if a string represents an Inventory key.| None |
| `IsInventoryLoaded()` | `boolean` | Returns true if the Inventory has been loaded for a specific Player.| None |
| `IsInventoryRegistered()` | `boolean` | Returns true if the Inventory has been registered.| None |
| `RegisterInventory()` | `None` | Server Only. Registers and loads an Inventory.| None |
| `RemoveFromInventory()` | `boolean` | Removes an amount of an item from a specific Inventory for a Player. If slotIndex is used this will only check that slot, otherwise it will check the entire Inventory.| None |
| `TransferToInventory()` | `boolean` | Moves the contents of a slot from one Inventory to another, or within the same Inventory. If the target slot has content this will swap it with the source slot. If targetSlotIndex is not defined a target slot will be found.| None |
| `UnregisterInventory()` | `None` | Server Only. Unregisters a Container Inventory.| None |

## Examples

Example using:

### `InventoryRegistered`

### `InventoryRegistered2`

### `InventoryRegistered3`

### `HI`

Do something something like this weee. Do that not this1.
But soemthing something yarrr.

```lua
local a = "weee"

local function test(player)
    print("weeeeeeeee")
end
```

See Also: testtest2
