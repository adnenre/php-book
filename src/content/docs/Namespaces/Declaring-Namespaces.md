---
title: Declaring Namespaces
sidebar:
  order: 91
  label: 91. Declaring Namespaces
---

A namespace is declared at the top of a PHP file using the `namespace` keyword.

## Example

```php
namespace App\Models;

class Product {
    public string $name;
}
```

Every class inside this file belongs to the `App\Models` namespace.
