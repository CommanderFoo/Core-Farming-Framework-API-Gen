---
id: database
name: Database
title: Database
---

# Database

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `AppendData()` | `None` | Appends a set of data to the Database. Will merge data in without overwriting nested structures.| None |
| `ParseCoreObject()` | `table` | Iterates over a CoreObject and its children and converts the hierarchy and custom properties into aset of nested data. Data can optionally be added to the database.| None |
| `PrintData()` | `None` | Prints all data into the Event Log.| None |
| `RegisterDataChangeHandler()` | `integer` | Registers a callback that will fire each time data is added to the Database.If a root is specified, the callback will only fire if data is added to that root.A handle id is returned that can be used to unregister the callback later.| None |
| `UnregisterDataChangeHandler()` | `None` | Unregisters a callback using the supplied handle id.| None |
