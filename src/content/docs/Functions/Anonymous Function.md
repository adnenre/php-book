---
title: Anonymous Functions
sidebar:
  order: 25
  label: 25. Anonymous Functions
---

Anonymous functions are functions without a name.  
They are often used for short tasks, callbacks, or when passing functions as arguments.

Anonymous functions are also called **closures**.

## Basic Example

```php
$greet = function () {
    echo "Hello World";
};

$greet();
```

## Anonymous Function with Parameters

```php
$add = function ($a, $b) {
    return $a + $b;
};

echo $add(5, 3);
```

## Using Variables from Outside

The `use` keyword allows access to variables from the parent scope.

```php
$message = "Hello";

$printMessage = function () use ($message) {
    echo $message;
};

$printMessage();
```
