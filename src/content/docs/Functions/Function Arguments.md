---
title: Function Arguments
sidebar:
  order: 23
  label: 23. Function Arguments
---

### Required Parameters

Parameters that must be passed when calling the function.

```php
<?php
function greet($name) {
    return "Hello, $name!";
}
echo greet("John"); // Hello, John!
?>
```

### Optional Parameters

Parameters that can be omitted. They are set to null by default.

```php
<?php
function greet($name, $prefix = null) {
  if ($prefix) {
      return "Hello, $prefix $name!";
  }
  return "Hello, $name!";
}
echo greet("John");       // Hello, John!
echo greet("John", "Mr."); // Hello, Mr. John!
?>
```

### Default Values

Parameters with predefined default values that are used when no argument is passed.

```php
<?php
function greet($name = "Guest") {
  return "Hello, $name!";
}
echo greet();      // Hello, Guest!
echo greet("John"); // Hello, John!
?>
```

### Variable-length Argument Lists

Accept any number of arguments using the ... operator.

```php
<?php
function sum(...$numbers) {
  return array_sum($numbers);
}
echo sum(1, 2, 3, 4, 5); // 15

// Argument unpacking - spread array into arguments
$nums = [1, 2, 3, 4, 5];
echo sum(...$nums); // 15
?>
```

### Named Arguments (PHP 8+)

Pass arguments by parameter name instead of position. Order doesn't matter.

```php
<?php
function createUser($name, $age, $city = "Unknown") {
  return "$name ($age) from $city";
}

// Named arguments (order doesn't matter)
echo createUser(age: 30, name: "John", city: "NYC"); // John (30) from NYC
echo createUser(name: "Jane", age: 25);              // Jane (25) from Unknown
?>
```
