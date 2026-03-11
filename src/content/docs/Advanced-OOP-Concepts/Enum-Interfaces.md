---
title: Enum Interfaces
sidebar:
  order: 60
  label: 60. Enum Interfaces
---

Enums can implement interfaces in PHP.

This allows enum cases to share behavior defined in the interface.

## Example

```php
interface Labelable {
    public function label(): string;
}

enum Status implements Labelable {
    case Active;
    case Inactive;

    public function label(): string {
        return match($this) {
            Status::Active => "Active User",
            Status::Inactive => "Inactive User"
        };
    }
}

echo Status::Active->label();
```
