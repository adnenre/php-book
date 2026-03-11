---
title: time()
sidebar:
  order: 139
  label: 139. time()
---

The `time()` function returns the current Unix timestamp.

A Unix timestamp represents the number of seconds since January 1, 1970.

## Example

````php
echo time();
```

## Using with date()

```php
echo date("Y-m-d H:i:s", time());
```
````
