---
title: Factory Pattern
sidebar:
  order: 64
  label: 64. Factory Pattern
---

The Factory pattern creates objects without exposing the creation logic.

## Example

```php
class Car {
    public function drive() {
      echo "Driving car";
    }
}

class CarFactory {
    public static function create(): Car {
      return new Car();
    }
}

$car = CarFactory::create();
$car->drive();
```
