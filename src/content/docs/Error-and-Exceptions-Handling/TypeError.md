---
title: Type Error
sidebar:
  order: 82
  label: 82. Type Error
---

`TypeError` occurs when a value does not match the expected type.

## Example

---php
function add(int $a, int $b) {
return $a + $b;
}

add("hello",5);
---phpend
