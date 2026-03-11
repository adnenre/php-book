---
title: Group Use Declarations
sidebar:
  order: 97
  label: 97. Group Use Declarations
---

Group use declarations allow importing multiple classes from the same namespace.

## Example

```php
use App\Models\{
User,
Product,
Order
};

$user = new User();
$product = new Product();

```

```

```
