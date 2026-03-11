---
title: Exception Class
sidebar:
  order: 70
  label: 70. Exception Class
---

The `Exception` class is the base class for all user-defined exceptions.

It provides useful methods for debugging and handling errors.

## Example

```php
try {
throw new Exception("Custom exception");
} catch (Exception $e) {
echo $e->getMessage();
}
```

```

```
