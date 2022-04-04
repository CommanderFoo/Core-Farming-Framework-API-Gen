---
id: currency
name: Currency
title: Currency
---

# Currency

Currency is a drop in system that provides ready to go Player Currency management without any code required. It also provides a full API for creators with scripting knowledge to allow them to expand on or change how the Currency works.

Any amount of Currencies can be added to a game and you can use them for more than just visible currency amounts.
For example, a Currency could be used to track the scores in a game.

| Class Function Name | Return Type | Description | Tags |
| ------------------- | ----------- | ----------- | ---- |
| `AddCurrencyAmount()` | `boolean` | Adds an amount to a Currency for a Player. Returns true if successful.| None |
| `GetCurrencies()` | `table` | Returns all registered Currencies.| None |
| `GetCurrencyAmount()` | `integer` | Returns the amount of a Currency that a Player has.| None |
| `GetCurrencyIdFromKey()` | `string` | Returns the Currency id associated with a Currency key.| None |
| `GetCurrencyKey()` | `string` | Returns a key used for Storage and networking.| None |
| `GetSetting()` | `any` | Returns a setting value for a Currency, or a defualt value if the setting cannot be found.| None |
| `HasRoomForCurrencies()` | `boolean` | Returns true if the list of Currencies and amounts can fit within their maximums.| None |
| `HasRoomForCurrency()` | `boolean` | Returns true if there is enough room in a Currency to add an amount to it.| None |
| `HasRoomForCurrencyFromDrops()` | `boolean` | Returns true if a set of Drops can be added to one or more Currencies.| None |
| `IsCurrencyKey()` | `boolean` | Returns true if the key is a Currency key.| None |
| `IsCurrencyLoaded()` | `boolean` | Returns true if the Currency has been loaded for the Player.| None |
| `IsCurrencyRegistered()` | `boolean` | Returns true if a Currency is registered.| None |
| `RegisterCurrency()` | `None` | Server Only. Registers a currency.| None |
| `RemoveCurrencyAmount()` | `boolean` | Removes an amount from a Currency for a Player. Returns true if successful.| None |
| `SetCurrencyAmount()` | `boolean` | Sets a Currency to an amount for a PLayer. Returns true if successful.| None |
| `UnregisterCurrency()` | `None` | Server Only. Unregisters a Currency.| None |
