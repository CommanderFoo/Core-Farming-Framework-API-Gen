---
id: buffs
name: Buffs
title: Buffs
---

# Buffs

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `AddBuff()` | `None` | Adds a buff| None |
| `AddBuffsInRadius()` | `None` | Adds a buff to targets in a radius from the source target Id| None |
| `AddTargetRecieveBuff()` | `None` | None |
| `ClearTargetRecieveBuffs()` | `None` | None |
| `FindBuffId()` | `string` | Given a unqiue storage number, find the buffId| None |
| `FindTargetByAncestors()` | `string, nil` | Finds a buff target by looking through the ancestors of a core object| None |
| `GetAllTargets()` | `Array<string>` | Get all the buff targets currently registered| None |
| `GetBuffDuration()` | `any` | Returns the duration of a buff. Will return 0 if the buff is permanent. Buffs can be stacked, so this is the duration of a single buff| None |
| `GetBuffRemainingAmount()` | `number` | Find the remaining value (between 1 and 0, or 2 and 0 if theirs stacks etc)| None |
| `GetBuffRemainingTime()` | `number` | For a timed buff, how much remaining time (seconds) there is| None |
| `GetBuffSetting()` | `any` | Finds a buff setting from the database| None |
| `GetBuffs()` | `Array<string>` | Get all the current buffs on a target| None |
| `GetTargetEvents()` | `None` | None |
| `GetTargetPosition()` | `Vector3` | Every buff target has a position in the world, this function finds that position| None |
| `GetTargetsWithBuff()` | `Array<string>` | Get all the targets that have a certain buff on them| None |
| `HandleFinishedTimedBuffs()` | `None` | Updates the buffs by removing any buffs that have expired| None |
| `HasBuff()` | `boolean` | Check if a target has a buff on them| None |
| `IsBuffLinked()` | `boolean` | If this returns true, it means the buff is 'linked' and wont time out| None |
| `IsBuffPermanent()` | `boolean` | Determines if a buff is permanent and therefore wont have a duration| None |
| `IsBuffTarget()` | `boolean` | Check if a targetId is a buff target| None |
| `IsValidBuff()` | `boolean` | Check if a buffId is in the database| None |
| `ReadBuffsFromTable()` | `None` | Reads all the current buffs from a table to a target| None |
| `RegisterTarget()` | `None` | Registers a target to the buff system so it can recieve buffs| None |
| `RemoveBuff()` | `None` | Remove a buff| None |
| `RemoveTargetRecieveBuff()` | `None` | None |
| `RequestLinkedBuffsUpdate()` | `None` | None |
| `SetBuffDuration()` | `None` | Changes the duration of a buff. Note that the duration isnt networked so if you change it on the server you will want to change it on the client too| None |
| `SetBuffRate()` | `None` | Sets the rate of a timed buff. by default its -1| None |
| `SetBuffTimeFunction()` | `None` | None |
| `UnregisterTarget()` | `None` | Removes a target from the buff system| None |
| `UpdateLinkedBuffs()` | `None` | Forces all the linked buffs to be relinked. Expensive to call| None |
| `WriteBuffsToTable()` | `table` | Writes all the current buffs on a target to a table| None |
