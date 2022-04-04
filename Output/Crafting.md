---
id: crafting
name: Crafting
title: Crafting
---

# Crafting

The Crafting system can be used to turn one thing into another over a period of time. This can be done at individual Crafting Stations or through a screen not associated to a station.

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `CanCollect()` | `string` | `boolean` | Returns true if the Player can collect from the Crafting Station or global crafting. Returns false and an errormessage if they cannot.| None |
| `CanCraft()` | `boolean` | Returns true if the Player can craft a Recipe at the Crafting Station if one is provided, otherwise checks againstglobal crafting status if that is allowed.| None |
| `Collect()` | `None` | Collect a finished Recipe.| None |
| `FindCraftingStationIdByAncestors()` | `string` | Returns a Crafting Station id if one exists in the targets ancestors.| None |
| `GetCraftRate()` | `number` | Returns the craft rate for a Recipe on a Crafting Station| None |
| `GetCraftingState()` | `None` | Returns the global crafting state| None |
| `GetCraftingStationData()` | `None` | None |
| `GetCraftingStationId()` | `string` | Returns an id formatted as a Crafting Station id for a target object if possible.| None |
| `GetCraftingStationState()` | `CraftingStationState` | Returns the state of a Crafting Station| None |
| `GetOutputText()` | `None` | None |
| `GetRecipeData()` | `None` | None |
| `GetRecipeIdByStorageId()` | `None` | None |
| `GetRecipeStorageIdByRecipeId()` | `None` | None |
| `GetSetting()` | `None` | Gets a crafting setting.| None |
| `GetValidRecipeIds()` | `None` | Returns a table of recipe ids that can be crafted on the crafting station.| None |
| `IsCrafting()` | `None` | Returns true if the crafting station is currently crafting a recipe. If craftingStationId is nil then the globalcrafting state will be checked.| None |
| `IsCraftingStationRegistered()` | `boolean` | Returns true if the Crafting Station has been registered.| None |
| `IsPlayerUsing()` | `boolean` | Returns true if the Player is currently using the Crafting Station.| None |
| `RegisterCraftingStation()` | `None` | Registers a Crafting Station to the system| None |
| `ResetCrafting()` | `None` | Resets Crafting state for a Player.| None |
| `SetSettings()` | `None` | Sets crafting settings.| None |
| `StartCrafting()` | `None` | Starts crafting a recipe. If craftingStationId is nil then the global crafting state will be used.| None |
| `UnregisterCraftingStation()` | `None` | When destroying a Crafting Station it is important to unregister it| None |
