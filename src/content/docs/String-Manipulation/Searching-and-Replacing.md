---
title: Searching and Replacing
sidebar:
  order: 119
  label: 119. Searching and Replacing
---

Searching and replacing allows modifying text based on patterns.

Functions include:

- `str_replace()`
- `preg_replace()`

## Example

```php
$text = "I like cats";

echo str_replace("cats", "dogs", $text);

```

## Using regex replace

```php
$text = "Version 123";

echo preg_replace("/[0-9]+/", "X", $text);
```
