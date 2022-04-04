---
id: playerlots
name: PlayerLots
title: PlayerLots
---

# PlayerLots

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `CanOwnLot()` | `boolean` | Returns true if the Player can own the Lot in question.| None |
| `ClearPlayerLotSaveData()` | `None` | Clears save data for a Lot.| None |
| `FindAvailableLots()` | `Array<string>` | Finds all the lots that arent 'owned' by any Players, or that are owned by offline Players.| None |
| `FindLotByAncestors()` | `string` | Finds the id of the Lot this core object is contained inside.| None |
| `FindLotForOwner()` | `string` | Find the id of the first Lot for a Player that optionally matches the provided Lot type.| None |
| `FindLotReplicator()` | `string` | Finds the id of the first Replicator on a Lot.| None |
| `FindLotReplicatorByIdentifier()` | `string` | Find the id of the first Replicator on a Lot that has a specific identifier.| None |
| `FindPlayerOwnedLots()` | `Array<string>` | Returns all the ids for Lots that are owned by a Player, with an optional Lot type filter.| None |
| `GetLotReplicatorIdentifier()` | `string` | Get the identifier of a Replicator on a Lot.| None |
| `GetLotReplicators()` | `table` | Returns all registered Player Lot Replicators.| None |
| `GetLotRoot()` | `CoreObject` | Returns the root object of a Lot.| None |
| `GetLotState()` | `LotState` | Returns the state for a Lot.| None |
| `GetLots()` | `Array<string>` | Returns a list of all Lot ids with an optional filter on Lot Type.| None |
| `GetOrAssignLot()` | `None` | Returns an assigned Lot or assigns the Player as the owner on an available Lot.| None |
| `GetOwner()` | `Player` | Returns the owner of a Player Lot.| None |
| `IsOwnerOnly()` | `None` | None |
| `RegisterLot()` | `None` | Registers a Lot.| None |
| `RegisterLotReplicator()` | `None` | Registers a Replicator on a Lot.| None |
| `ResetLot()` | `None` | Resets a Lot.| None |
| `SaveLot()` | `None` | Invokes the Save method on all the things inside the lot| None |
| `SetLotActive()` | `None` | Activates or deactivates a Lot.| None |
| `SetLotActiveForPlayer()` | `None` | Activates or deactivates a Lot for a specific Player.| None |
| `SetLotOwner()` | `None` | Sets the owner of the Lot.| None |
| `SetMaxOwnedLots()` | `None` | Sets a maximum amount of a Lot Type that a Player can own at a time.| None |
