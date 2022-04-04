---
id: lookinteractionmodule
name: LookInteractionModule
title: LookInteractionModule
---

# LookInteractionModule

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `BeginDrag()` | `None` | Begins dragging the current target.| None |
| `ClearOverrideSettings()` | `None` | Clears any override settings if they exist.| None |
| `Deselect()` | `None` | Removes the target from the current selection set for a player.| None |
| `EndDrag()` | `None` | Stops dragging the current target.| None |
| `GetDragInfo()` | `table` | Returns a table with drag information. This table contains the following information:- IsDragging - True if a drag is currently happening- DragTarget - The target currently being dragged- DragData - Any drag data associated with the target (See SetDragData())- DropTargetId - Any drop target id for a target underneath the dragged object- DropTargetData - Any drop target data for a target underneath the dragged object (See SetDropTargetData())- OriginalParent - The original parent of the dragged object- StartPosition - The position of the object when the drag started- StartRotation - The rotation of the object when the drag started- InputOffset - The distance between the input and the object when the drag started- ResetOnDrop - If true the object will reset its position and rotation when dropped- ValidDropTargetIds - The valid drop target ids for this object- SnapToInput - If true the object will move to the input when the drag starts- SnapOffset - The offset the object will maintain from the input while being dragged| None |
| `GetInputPosition()` | `Vector3` | Returns the current position for this Input Module.| None |
| `GetPotentialTargets()` | `table` | Returns the current potential targets or an empty table.| None |
| `GetSelection()` | `table` | Returns the selection set for a player.| None |
| `IsDragging()` | `boolean` | Returns true if the target is being dragged.| None |
| `IsSelected()` | `boolean` | Returns true if the target is in the selection set for a player.| None |
| `OverrideSettings()` | `None` | This allows objects using this module to temporarily override settings.| None |
| `RegisterDraggable()` | `boolean` | Registers a draggable target and handlers with this input module. The handlers can include any of the below callbacks:- SetDragData(isValidDragFunction, getDragProxyFunction, ...)- GetDragData()- IsValidDrag()- GetDragProxy()| None |
| `RegisterDropTarget()` | `boolean` | Registers a drop target and handlers to use with this input module. The handlers can include any of the below callbacks:- IsValidDropTarget(dropTargetIds, ...)- SetDropTargetData(isValidDropTargetFunction, ...)- GetDropTargetId()- GetDropTargetData()| None |
| `RegisterTarget()` | `boolean` | Registered targets will be checked each frame for look direction interactions.Targets will be unregistered automatically when they are destroyed.A target can be registered multiple times with different handlers to allow components to stack.The handlers can include any of the below callbacks:- HoverBegin(position, normal)- Hover(position, normal)- HoverEnd(position, normal)- PressBegin(binding, position, normal, wasDragging)- PressEnd(binding, position, normal, wasDragging)- DragOverBegin()- DragOverEnd()- DragBegin(position, normal)- DragEnd(position, normal)- Dropped(position, normal, ...)- Selected()- Deselected()- SetData(component, ...)| None |
| `Select()` | `None` | Adds the target to the current selection set for a player.| None |
| `UnregisterDraggable()` | `None` | Unregisters a draggable and all of its input handlers with this input module.It can be called manually if needed but will normally be automatically called.| None |
| `UnregisterDropTarget()` | `None` | Unregisters a drop target and all of its handlers with this input module.It can be called manually if needed but will normally be automatically called.| None |
| `UnregisterTarget()` | `None` | This will unregister a target and all of its input handlers.It can be called manually if needed but will normally be automatically called.| None |
