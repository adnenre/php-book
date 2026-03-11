---
title: Enumerations in PHP 8.1
sidebar:
  order: 63
  label: 63. Enumerations in PHP 8.1
---

PHP 8.1 introduced enumerations (enums) as a way to represent a fixed set of values.

Enums improve type safety and readability.

## Example

```php
enum Direction {
    case North;
    case South;
    case East;
    case West;
}

$dir = Direction::North;
```
