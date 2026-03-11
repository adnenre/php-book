---
title: Multiple Catch Blocks
sidebar:
  order: 74
  label: 74. Multiple Catch Blocks
---

Multiple catch blocks allow handling different exceptions separately.

## Example

```php
try {

    throw new RuntimeException("Runtime error");

} catch (InvalidArgumentException $e) {

    echo "Invalid argument";

} catch (RuntimeException $e) {

    echo "Runtime problem";

}

```
