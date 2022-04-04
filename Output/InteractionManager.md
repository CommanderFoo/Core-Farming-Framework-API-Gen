---
id: interactionmanager
name: InteractionManager
title: InteractionManager
---

# InteractionManager

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `BeginDrag()` | `None` | Begins dragging a target. This will start dragging the current target for that input module.| None |
| `BeginDragOver()` | `None` | Should be called by an input module whenever a drop target is dragged over a drop target.| None |
| `BeginHover()` | `None` | Begins hovering on a target in an input module. This will set the input modules current target.| None |
| `BeginPress()` | `None` | Begins a press on a target in an input module.| None |
| `Deselect()` | `None` | Removes a target from a Players selection set in an input module.| None |
| `DeselectAll()` | `None` | Removes all targets from a Players selection set in an input module.| None |
| `DisableModule()` | `None` | Releases the current interaction target for this module and prevents any further interactions.| None |
| `EnableModule()` | `None` | Reactivates an interaction module after being disabled.| None |
| `EndDrag()` | `None` | Stops dragging the input modules current target.| None |
| `EndDragOver()` | `None` | Should be called by an input module when a target is dragged away from a drop target.| None |
| `EndHover()` | `None` | Ends a hover on a target in an input module.| None |
| `EndPress()` | `None` | Ends a press on a target in an input module.| None |
| `ForceBeginHover()` | `None` | Calls API.BeginHover on all modules with the target registered.| None |
| `ForceEndHover()` | `None` | Calls API.EndHover on all modules with the target registered.| None |
| `GetAllDropTargets()` | `table` | Returns all registered drop targets fro an input module.| None |
| `GetAllTargets()` | `table` | Returns all registered targets for an input module.| None |
| `GetCurrentDropTarget()` | `CoreObject` | Returns the current drop target being dragged over for an input module.| None |
| `GetCurrentTarget()` | `CoreObject` | Returns the current target of an input module.| None |
| `GetDragInfo()` | `table` | Returns a table of information regarding the currently dragged object in an input module.| None |
| `GetDropTarget()` | `CoreObject` | Returns a registered drop target related to the provided object for an input module.| None |
| `GetSelection()` | `table` | Returns the entire selection set in an input module for a player.| None |
| `GetSetting()` | `any` | Gets a specific setting.| None |
| `GetTarget()` | `CoreObject` | Returns a registered target related to the provided object for an input module.| None |
| `Hover()` | `None` | This should be called by an input module for every frame a target is actively being hovered.| None |
| `IsDragging()` | `boolean` | Returns true if the target is currently being dragged in the input module.| None |
| `IsHovered()` | `boolean` | Returns true if the target is currently being hovered in the input module.| None |
| `IsModuleEnabled()` | `None` | Returns true if this module is enabled.| None |
| `IsPressed()` | `boolean` | Returns true if the target is currently being pressed in the input module.| None |
| `IsSelected()` | `boolean` | Returns true if the target is currently selected for the player in the input module.| None |
| `RegisterDraggable()` | `boolean` | Registers a target and handlers to a module as a draggable object. Only one handler can be registered to a target and calling this multiple times will overwrite the previous handlers. The handlers can include any of the below callbacks:- SetDragData(isValidDragFunction, getDragProxyFunction, ...)- GetDragData()- IsValidDrag()- GetDragProxy()| None |
| `RegisterDropTarget()` | `boolean` | Registers a target and handlers to a module as a drop target. Only one handler can be registered to a target and calling this multiple times will overwrite the previous handlers. The handlers can include any of the below callbacks:- IsValidDropTarget(dropTargetIds, ...)- SetDropTargetData(isValidDropTargetFunction, ...)- GetDropTargetData| None |
| `RegisterModule()` | `None` | Registers an input module with the APIInputManager| None |
| `RegisterSettings()` | `None` | Overrides existing or default settings with new settings. This will fully replace all settings.| None |
| `RegisterTarget()` | `boolean` | Registers a target and handlers to a specific input module. A target can be registered multiple times with different sets of handlers. This allows a single target to have multiple components reacting to input. The handlers can include any of the below callbacks:- HoverBegin(position, normal)- Hover(position, normal)- HoverEnd(position, normal, wasDragging)- PressBegin(binding, position, normal)- PressEnd(binding, position, normal, wasDragging)- DragOverBegin()- DragOverEnd()- DragBegin(position, normal)- DragEnd(position, normal)- Dropped(position, normal, dropTargetId, ...)- Selected()- Deselected()- SetData(component, ...)| None |
| `Select()` | `None` | Adds a target to the selection set for an input module. Selection is per Player to allow for more complex interactions.| None |
| `SetData()` | `None` | Sets data on a specific component or all components if the component parameter is nil. Only some component types make use of data.| None |
| `SetDragData()` | `None` | Sets drag data on a draggable if one has been registered for the target.| None |
| `SetDropTargetData()` | `None` | Sets data on a drop target if one has been registered for the target.| None |
| `UnregisterDraggable()` | `None` | Removes draggable handlers from a target in an input module.| None |
| `UnregisterDropTarget()` | `None` | Removes drop target handlers from a target in an input module.| None |
| `UnregisterTarget()` | `None` | Removes a target and all of its handlers from an input module.| None |
