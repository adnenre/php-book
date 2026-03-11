---
title: Modifiers
sidebar:
  order: 126
  label: 126. Modifiers
---

Modifiers change how regular expressions behave.

Common modifiers include:

- `i` case insensitive
- `m` multiline
- `s` dot matches newline

## Example

```php
preg_match("/hello/i", "HELLO");
```
