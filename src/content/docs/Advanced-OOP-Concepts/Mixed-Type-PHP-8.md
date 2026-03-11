---
title: Mixed Type in PHP 8
sidebar:
  order: 68
  label: 68. Mixed Type in PHP 8
---

The `mixed` type allows multiple possible data types.

## Example

```php
function process(mixed $data) {
    var_dump($data);
}

process("Hello");
process(10);
process(true);
```
