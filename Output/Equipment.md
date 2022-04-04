---
id: equipment
name: Equipment
title: Equipment
---

# Equipment

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `CanEquipmentInteract()` | `string` | `boolean` | Returns true if the registered target can interact with the equipment. Also returns a reason the target cannot beinteracted with if relevant.| None |
| `Equip()` | `None` | Equips an item to a Player, or toggles an already equipped item off. On the server this returns a reference to theEquipment if it was equipped.| None |
| `EquipmentInteract()` | `string` | `boolean` | Interacts with a registered target with a specific equipment. Returns success and error information.| None |
| `FindEquipmentTargetByAncestors()` | `CoreObject` | Will traverse up the hierarchy from the supplied CoreObject and return the first registered target or nil.| None |
| `GetAllEquipment()` | `table` | Returns all equipped Equipment for a Player.| None |
| `GetDefaultTool()` | `Ability` | Returns the default tool for a Player if there is one.| None |
| `GetEquipment()` | `None` | Returns Equipment for the template if it is currently equipped.| None |
| `GetEquipmentSettings()` | `table` | Returns an equipmentSettings table.| None |
| `GetInteractionTarget()` | `string` | `CoreObject` | Returns a registered equipment target if one is currently a potential target in the provided Interaction SystemModule and the equipment target can be interacted with. Also returns a reason a target could not be found if relevant.| None |
| `GetSetting()` | `any` | Returns a setting value.| None |
| `GetTargets()` | `table` | Returns all registered equipment targets.| None |
| `IsEquipmentTarget()` | `boolean` | Returns true if the target is registered for interactions.| None |
| `IsEquipped()` | `None` | Returns true if the template is currently equipped.| None |
| `IsValidToolType()` | `boolean` | Returns true if the supplied tool type exists in the list of valid types.| None |
| `RegisterEquipmentTarget()` | `None` | Registers an object for equipment interactions with Basic and Advanced Equipment. The function table must include thefollowing data:{   CanEquipmentInteract = function(player, target, toolType, equipmentSettings),   EquipmentInteract = function(player, target, toolType, equipmentSettings)}| None |
| `SpawnEquipment()` | `None` | Spawns an Equipment in the world.| None |
| `ToggleHandOutline()` | `None` | Determines whether the default Hand Tool outlining effect is active or not.| None |
| `Unequip()` | `None` | Unequips an item from a Player.| None |
| `UnequipAll()` | `None` | Unequips all items from a Player.| None |
| `UnregisterEquipmentTarget()` | `None` | Stops equipment from being able to interact with the target.| None |
| `Update()` | `None` | Runs each frame.| None |
| `UpdateSettings()` | `None` | Updates the current settings with a new set.| None |
