---
title: Autoloading with Namespaces
sidebar:
  order: 98
  label: 98. Autoloading with Namespaces
---

Autoloading automatically loads class files when they are needed.

This avoids manually including files.

## Example

```php
spl_autoload_register(function ($class) {

    $path = str_replace("\\", "/", $class) . ".php";

    require $path;

});


```
