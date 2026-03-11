---
title: Encoding and Escaping
sidebar:
  order: 121
  label: 121. Encoding and Escaping
---

Encoding and escaping are used to safely handle strings.

Common functions:

- `htmlspecialchars()`
- `htmlentities()`

## Example

```php
$text = "<b>Hello</b>";

echo htmlspecialchars($text);
```
