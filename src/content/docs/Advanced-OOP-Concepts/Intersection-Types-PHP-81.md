---
title: Intersection Types in PHP 8.1
sidebar:
  order: 67
  label: 67. Intersection Types in PHP 8.1
---

Intersection types require a value to satisfy multiple types.

## Example

```php
interface A {}
interface B {}

class MyClass implements A, B {}

function test(A&B $obj) {
    echo "Object satisfies both interfaces";
}

test(new MyClass());
```
