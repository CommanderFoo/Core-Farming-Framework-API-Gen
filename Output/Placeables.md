---
id: placeables
name: Placeables
title: Placeables
---

# Placeables

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `FindPlaceableIdByAncestors()` | `string` | Finds a Placeable Id by searching upward through the hierarchy.| None |
| `GetPlaceableState()` | `PlaceableState` | Returns the current state for a Placeable.| None |
| `GetPlacementLimitInfo()` | `None` | None |
| `HandlePlaceableDrops()` | `boolean` | Returns true if drops are successful.| None |
| `IsPlaceableRegistered()` | `boolean` | Returns true if the placeable id has been registered.| None |
| `RegisterPlaceable()` | `None` | Registers a Placeable so that interactions on it can occur.| None |
| `UnregisterPlaceable()` | `None` | Unregisters a Placeable and stops any further interactions from being allowed. This should be called when thePlaceable is destroyed.| None |
