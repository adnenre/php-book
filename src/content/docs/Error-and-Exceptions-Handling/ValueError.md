---
title: Value Error
sidebar:
  order: 83
  label: 83. Value Error
---

`ValueError` occurs when a valid type but invalid value is passed.

## Example

---php
try {

    strpos("Hello", "");

} catch (ValueError $e) {

    echo $e->getMessage();

}
---phpend
