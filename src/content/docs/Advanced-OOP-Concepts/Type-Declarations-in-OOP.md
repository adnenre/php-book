---
title: Type Declarations in OOP
sidebar:
  order: 74
  label: 74. Type Declarations in OOP
---

Type declarations ensure variables match expected types.

## Example

```php
class Calculator {

    public function add(int $a, int $b): int {
        return $a + $b;
    }

}

$calc = new Calculator();
echo $calc->add(2,3);


```
