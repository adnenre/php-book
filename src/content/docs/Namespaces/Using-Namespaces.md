---
title: Using Namespaces
sidebar:
  order: 92
  label: 92. Using Namespaces
---

Classes from namespaces can be accessed using their fully qualified names.

## Example

```php
namespace App\Models;

class User {}

```

Another file:

```php
$user = new \App\Models\User();
```
