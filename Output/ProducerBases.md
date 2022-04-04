---
id: producerbases
name: ProducerBases
title: ProducerBases
---

# ProducerBases

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `CanPlaceProducer()` | `boolean` | Returns true if the given Tool type can Place a Producer in this base.| None |
| `CheckHasAllBuffs()` | `None` | None |
| `CheckHasAnyBuffs()` | `None` | None |
| `Collect()` | `None` | Collects a Producer.| None |
| `CollectDropResults()` | `None` | None |
| `FindProducerBaseIdByAncestors()` | `any` | Finds a producer base| None |
| `FindProducerIdFromEquipment()` | `string` | Returns a Producer Id based on the passed in Equipment settings.| None |
| `GetPlaceableData()` | `PlaceableData` | None |
| `GetProducerBaseState()` | `ProducerBaseState` | Returns the current state for a Producer.| None |
| `GetProducerData()` | `ProducerData` | Returns Product data based on a producerId.| None |
| `GetProducerIdByStorageId()` | `table` | Returns a Product data based on a number.| None |
| `GetProducerIdForSourceItem()` | `string` | Returns the Id of the first Producer that uses the provided source item, or nil if none are found.| None |
| `GetProducerStorageIdByProducerId()` | `integer` | Returns a number based on a producerId| None |
| `HandleProducerDrops()` | `None` | None |
| `IsProducerBaseRegistered()` | `boolean` | Returns true if the producer id has been registered.| None |
| `PlaceProducer()` | `None` | Places a producer on a producer base.| None |
| `RegisterProducerBase()` | `None` | Registers a Producer so that interactions on it can occur.| None |
| `RemoveProducer()` | `None` | Removes a producer from a prooducer base.| None |
| `StartBuildingProducer()` | `None` | Tells a Producer to start building regardless of if it can| None |
| `UnregisterProducerBase()` | `None` | Unregisters a Producer and stops any further interactions from being allowed. This should be called when the Producer is destroyed.| None |
