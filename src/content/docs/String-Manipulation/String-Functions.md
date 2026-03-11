---
title: String Functions
sidebar:
  order: 118
  label: 118. String Functions
---

PHP provides many built-in functions for working with strings.

Common string functions include:

- `strlen()`
- `strpos()`
- `substr()`
- `str_replace()`

## Example

```php
$text = "Hello World";

echo strlen($text);
```

## Finding position of a substring

```php
echo strpos("Hello World", "World");
```
