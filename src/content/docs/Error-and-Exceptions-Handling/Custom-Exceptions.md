---
title: Custom Exceptions
sidebar:
  order: 72
  label: 72. Custom Exceptions
---

Developers can create custom exception classes by extending the `Exception` class.

## Example

```php
class InvalidAgeException extends Exception {}

function checkAge($age) {

    if ($age < 18) {
        throw new InvalidAgeException("Age must be 18 or older");
    }

}

try {
checkAge(15);
} catch (InvalidAgeException $e) {
echo $e->getMessage();
}
```

```

```
