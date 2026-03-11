---
title: Arithmetic Error
sidebar:
  order: 80
  label: 80. Arithmetic Error
---

`ArithmeticError` occurs when invalid mathematical operations happen.

## Example

---php
try {

    intdiv(PHP_INT_MIN, -1);

} catch (ArithmeticError $e) {

    echo $e->getMessage();

}
---phpend
