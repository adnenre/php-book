---
title: Enum Traits
sidebar:
  order: 62
  label: 62. Enum Traits
---

Enums can use traits to share reusable methods.

## Example

```php
trait HasLabel {
    public function label(): string {
        return strtolower($this->name);
    }
}

enum Status {
    use HasLabel;

    case Pending;
    case Completed;
}

echo Status::Pending->label();
```
