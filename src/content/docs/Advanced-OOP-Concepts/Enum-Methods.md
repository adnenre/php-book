---
title: Enum Methods
sidebar:
  order: 61
  label: 61. Enum Methods
---

Enums can contain methods to add behavior.

## Example

```php
enum Role {
    case Admin;
    case User;

    public function canEdit(): bool {
        return $this === Role::Admin;
    }
}

$role = Role::Admin;

var_dump($role->canEdit());
```
