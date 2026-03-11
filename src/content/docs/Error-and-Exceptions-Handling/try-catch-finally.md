---
title: Try Catch Finally
sidebar:
  order: 75
  label: 75. Try Catch Finally
---

The `finally` block executes regardless of whether an exception occurs.

## Example

```php
try {

    echo "Executing code";

} catch (Exception $e) {

    echo $e->getMessage();

} finally {

    echo "Cleanup executed";

}

```
