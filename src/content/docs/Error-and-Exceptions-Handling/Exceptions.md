---
title: Exceptions
sidebar:
  order: 71
  label: 71. Exceptions
---

Exceptions are used to handle runtime errors in a controlled way.

They allow programs to recover from errors.

## Example

---php
function divide($a, $b) {

    if ($b == 0) {
        throw new Exception("Division by zero");
    }

    return $a / $b;

}

try {
echo divide(10,0);
} catch (Exception $e) {
echo $e->getMessage();
}
---phpend
