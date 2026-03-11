---
title: Custom Getter and Setter Methods
sidebar:
  order: 57
  label: 57. Custom Getter and Setter Methods
---

Getter and setter methods allow controlled access to object properties.

## Example

```php
class User {

    private string $name;

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getName(): string {
        return $this->name;
    }
}

$user = new User();
$user->setName("Alice");

echo $user->getName();
```
