---
title: Callback
sidebar:
  order: 26
  label: 26. Callback
---

A callback is a function passed as an argument to another function.

Callbacks allow functions to execute custom logic.

They are commonly used with array functions and event handlers.

## Example Callback

```php
function greet($name) {
    echo "Hello $name";
}

function processUser($callback) {
    $callback("John");
}

processUser("greet");
```

## Using an Anonymous Function as Callback

```php
processUser(function ($name) {
    echo "Welcome $name";
});
```

## Callback with Array Functions

```php
$numbers = [1,2,3,4];

$result = array_map(function ($n) {
    return $n * 2;
}, $numbers);

print_r($result);
```
