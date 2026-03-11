---
title: Multibyte String Functions
sidebar:
  order: 127
  label: 127. Multibyte String Functions
---

Multibyte string functions handle characters that use more than one byte.

Common functions:

- `mb_strlen()`
- `mb_substr()`
- `mb_strpos()`

## Example

```php
$text = "こんにちは";

echo mb_strlen($text);
```
