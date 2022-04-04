---
id: purchasing
name: Purchasing
title: Purchasing
---

# Purchasing

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `CanAfford()` | `boolean` | Returns true if the Player can afford an amount of this purchaseable.| None |
| `CanSell()` | `boolean` | Returns true if the Player has the required amount of materials to sell an amount of a sellable.| None |
| `ClearStoreSave()` | `None` | Clears the save data for a player that's associated with a particular store.| None |
| `GetAvailableAmount()` | `integer` | Determines how much of a purchaseable is available for purchase. This takes into account global purchase limits.Returns nil if purchases are unlimited.| None |
| `GetSellLimit()` | `integer` | Returns the maximum amount of a Sellable that a player is currently able to sell.| None |
| `GetStoreIdFromKey()` | `string` | Parses the Store Id from a purchasing key| None |
| `GetStores()` | `table` | Returns an array of all of the available store ids.| None |
| `IsPerkPurchase()` | `boolean` | Returns true if this Purchaseable Data is associated with a Perk.| None |
| `IsPurchasingKey()` | `boolean` | Returns true if this key starts with the purchasing tag| None |
| `IsStoreLoaded()` | `boolean` | Returns true if the Store has been loaded for a specific Player.| None |
| `IsStoreRegistered()` | `boolean` | Returns true if the Store has been registered.| None |
| `Purchase()` | `string` | `boolean` | Completes a purchase for a Player.| None |
| `RegisterStore()` | `None` | Server Only. Registers and loads a Store's purchase history.| None |
| `Sell()` | `string` | `boolean` | Completes a sale for a Player.| None |
| `SetPendingPerkPurchase()` | `None` | Sets a pending Perk purchase. This is needed due to the Perk Window being separate from the Purchase UI.| None |
