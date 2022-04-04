---
id: areas
name: Areas
title: Areas
---

# Areas

The Areas system is meant to be used to chunk your environment into discrete pieces that can be loaded on demand.
This provides a much more performant experience for Players and lets creators include much more content in their
games.

As Players move through Areas they can be moved to specific spawn points, be placed into pools of Areas, have
templates loaded into client, server or static contexts and more.

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `AssignArea()` | `None` | Assigns a key to an Area.| None |
| `CanPlayerBeAssignedToArea()` | `boolean` | Returns true if the Player can be assigned to an Assignable Area with an optional area group key.| None |
| `FindAreaByAncestors()` | `string` | Locates an Area by searching upward from the provided CoreObject and returns the Area Id if found.| None |
| `FindAreaByAssignKey()` | `string` | Returns and Area Id for an Area that matches the provided assign key.| None |
| `FindAreaByName()` | `string` | Returns and Area Id for an Area that matches the provided name.| None |
| `GetAllAreas()` | `Array<string>` | Returns all registered Areas.| None |
| `GetAllAssignableAreas()` | `Array<string>` | Returns all Area ids under a specific Assignable Area Group.| None |
| `GetAndAssignArea()` | `string` | Given a key, this function will either find an 'assignable' area that has the same key, or find an empty 'assignable'area and assign it to this key. Returns the Area Id if one is found or assigned.| None |
| `GetArea()` | `table` | Retuns an Area.| None |
| `GetAreaState()` | `table` | Returns the state of an Area.| None |
| `GetPlayerArea()` | `string` | Retuens the Area Id of the Area the Player is currently in.| None |
| `GetPlayersInArea()` | `table` | Returns all Players in a specific Area.| None |
| `IsInAssignableAreaGroup()` | `boolean` | Returns true if the Area is part of an assignable Areas group.| None |
| `IsPlayerInArea()` | `boolean` | Returns true if the Player is in the provided Area.| None |
| `LockPlayer()` | `None` | Restricts Player mevement.| None |
| `RegisterArea()` | `None` | Registers an Area.| None |
| `RegisterAssignableAreaGroup()` | `None` | Registers an assignable Area group.| None |
| `SendPlayerToArea()` | `None` | Assigns a Player to a specific Area.| None |
| `UnlockPlayer()` | `None` | Allows a Player to move.| None |
