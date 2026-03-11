---
title: Namespace Basics
sidebar:
  order: 90
  label: 90. Namespace Basics
---

Namespaces allow organizing code into logical groups and prevent name conflicts.

They are especially useful in large applications and libraries.

## Declaring a Namespace

```php
namespace App;

class User {
    public function sayHello() {
        echo "Hello";
    }
}
```

## Using the Class

```php
$user = new \App\User();
$user->sayHello();
```
