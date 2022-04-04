---
id: iconmanager
name: IconManager
title: IconManager
---

# IconManager

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `ClearIcon()` | `boolean` | This only needs to be called in special cases where you want to clear an icon outside of the cases it wouldautomatically be cleared. This is called automatically when an image is reused or destroyed.| None |
| `GetStatus()` | `number` | Prints the current usage into the console and returns a percent (0 - 1) to use elsewhere.| None |
| `IsCameraRegistered()` | `boolean` | Returns true if the camera id has been registered.| None |
| `RegisterCamera()` | `None` | Registers a camera to use to capture icon images.| None |
| `SetIcon()` | `boolean` | Makes a UIImage display a generated icon. This will generate the icon if it is not yet generated.Returns true if the icon is successfully set.| None |
