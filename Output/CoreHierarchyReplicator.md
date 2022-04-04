---
id: corehierarchyreplicator
name: CoreHierarchyReplicator
title: CoreHierarchyReplicator
---

# CoreHierarchyReplicator

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `ActivateReplicator()` | `None` | On the server, this activates the replicator for all players who want to recieve from itOn the client, its will activate the replicator as long as the replicator is active on the server| None |
| `ActivateReplicatorForPlayer()` | `None` | On the server, this marks that a player wishes to recieve replicated data| None |
| `AddCoreObjectToSpawner()` | `None` | Manually adds a core object to an instance, associating it with the spawner| None |
| `AddInstance()` | `None` | Adds an instance into the replicator, it will be automatically syncronized and core objects will be spawned| None |
| `ClearCurrentInstance()` | `None` | Called after an instance is spawned to ensure you cant accidentally get a nil instance| None |
| `CountPendingClientInstancesToSpawn()` | `number` | Counts the number of client instances pending to be spawned on the local machine for a specific replicator| None |
| `CountPendingServerInstancesToSpawn()` | `number` | Counts the number of server instances pending to be spawned on the local machine for a specific replicator| None |
| `CountPendingStaticInstancesToSpawn()` | `number` | Counts the number of static instances pending to be spawned on the local machine for a specific replicator| None |
| `CreateInstance()` | `instance` | Creates a new instance table but doesnt register it. See API.AddInstance| None |
| `DeactivateReplicator()` | `None` | On the server, this will deactivate a replicator and all players will have their instances removed| None |
| `DeactivateReplicatorForPlayer()` | `None` | On the server, this marks that a player doesnt wish to recieve replicated data| None |
| `DestroyAllInstances()` | `None` | Destroys all the instances in the replicator| None |
| `DestroyInstance()` | `None` | Destroys an instance| None |
| `FindReplicatorIdByAncestors()` | `string` | Searches through self and parents for a replicator| None |
| `FindReplicatorIdentifier()` | `string` | Gets the id of a core object as would be used by the replicator system| None |
| `GetBufferString()` | `string @Non human readable bit string` | Gives you a string of all the instances in the buffer. Server only| None |
| `GetClientCoreObject()` | `CoreObject` | Finds the client spawned core object for an instance| None |
| `GetCurrentInstance()` | `None` | If called during the spawning of an instance, will return the instance, else nil| None |
| `GetInitialBufferString()` | `string @Non human readable bit string` | Gives you a string of all the instances in the buffer after initialization. Server only| None |
| `GetInstance()` | `instance` | Finds the instance associated with this core object| None |
| `GetInstances()` | `Array<instance>` | Returns an array of all the instances for this replicator| None |
| `GetNetworkedCoreObject()` | `CoreObject` | Finds the networked spawned core object for an instance| None |
| `GetPlayerPrivateNetworkKey()` | `string` | Gets the private network key used for a replicator| None |
| `GetReplicatorSpawnParent()` | `CoreObject` | Returns the core object that instances are spawned in| None |
| `GetReplicators()` | `Array<string>` | Gets a table of all the replicators currently registered| None |
| `GetServerCoreObject()` | `CoreObject` | Finds the server spawned core object for an instance| None |
| `GetStaticCoreObject()` | `CoreObject` | Finds the spawned static core object for an instance| None |
| `GetUserFunctions()` | `table` | Returns the User Functions for a Replicator| None |
| `GetUserSettings()` | `table` | Returns a table of per-replicator settings that may have been initialized by the UserFunctions| None |
| `IsPlayerPrivateNetworkKey()` | `boolean` | Check if a key is one of the keys used for a replicator when using PlayerPrivateNetworkData| None |
| `IsReady()` | `boolean` | Returns true if spawners have been registered.| None |
| `IsReplicatorId()` | `None` | Is the id registered| None |
| `IsReplicatorLocked()` | `None` | None |
| `LoadFromBuffer()` | `None` | Clears a replicator and loads all the instances encoded in the string. Server only| None |
| `LockReplicator()` | `None` | None |
| `ModifyInstance()` | `None` | Modifies an instance. It will be re-serialized to ensure client and server match| None |
| `RegisterReplicator()` | `None` | Registers a replicator to the API| None |
| `RegisterSpawners()` | `None` | Called by the Spawners| None |
| `SetCurrentInstance()` | `None` | Spawners call this function before spawning an object so the object can find which instance it is easily| None |
| `UnlockReplicator()` | `None` | None |
| `WaitForInstance()` | `instance` | Waits for the instance for a core object| None |
