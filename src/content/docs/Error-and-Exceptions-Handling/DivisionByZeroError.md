---
title: Division By Zero Error
sidebar:
  order: 81
  label: 81. Division By Zero Error
---

This error occurs when attempting to divide a number by zero.

## Example

```php
try {

    echo intdiv(10,0);

} catch (DivisionByZeroError $e) {

    echo "Cannot divide by zero";

}
```

```

```
