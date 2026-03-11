---
title: Error Class (PHP 7)
sidebar:
  order: 69
  label: 69. Error Class (PHP 7)
---

PHP 7 introduced the `Error` class which represents internal PHP errors.

It allows developers to catch fatal errors using try-catch blocks.

## Example

```php
try {
throw new Error("Something went wrong");
} catch (Error $e) {
echo $e->getMessage();
}
```

```

```
