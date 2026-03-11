---
title: Class Type Hints
sidebar:
  order: 56
  label: 56. Class Type Hints
---

Class type hints ensure that a function receives an object of a specific class.

## Example

```php
class User {
public string $name;
}

function greet(User $user) {
echo "Hello " . $user->name;
}

$user = new User();
$user->name = "John";

greet($user);
```
