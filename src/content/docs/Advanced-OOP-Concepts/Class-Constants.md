---
title: Class Constants
sidebar:
  order: 55
  label: 55. Class Constants
---

Class constants store values that should not change.

They are defined using the `const` keyword.

## Example

```php
class Config {
const APP_NAME = "My Application";
const VERSION = "1.0";
}

echo Config::APP_NAME;
```

## Access inside class

```php
class MathHelper {
const PI = 3.14159;

    public function area($radius) {
        return self::PI * $radius * $radius;
    }

}
```
