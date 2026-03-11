---
title: Property Accessors
sidebar:
  order: 70
  label: 70. Property Accessors
---

Property accessors provide controlled access to properties.

## Example

```php
class User {

    private string $email;

    public function setEmail(string $email) {
        $this->email = strtolower($email);
    }

    public function getEmail(): string {
        return $this->email;
    }

}
```
