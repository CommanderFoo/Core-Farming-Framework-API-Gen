---
id: activecoreobjects
name: ActiveCoreObjects
title: ActiveCoreObjects
---

# ActiveCoreObjects

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `ConnectToActivationChange()` | `EventHandler @A handler` | Allows you to connect a function to be trigger when core objects activation has changed. This will be calledif any of its parents have had their activation changed| None |
| `IsActive()` | `boolean` | Check if any core object is active by looping upwards through the parents and seeing how its ancestors are marked| None |
| `SetActive()` | `None` | Marks a core object as being active as FORCE_ON, FORCE_OFF, INHERIT. Or you can use a bool| None |
