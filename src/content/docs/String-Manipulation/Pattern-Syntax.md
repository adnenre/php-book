---
title: Pattern Syntax
sidebar:
  order: 125
  label: 125. Pattern Syntax
---

Patterns define rules for matching text.

Common pattern symbols:

- `.` any character
- `*` zero or more
- `+` one or more
- `[]` character class

## Example

```php
preg_match("/[a-z]+/", "hello");
```
