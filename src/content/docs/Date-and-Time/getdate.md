---
title: getdate()
sidebar:
  order: 142
  label: 142. getdate()
---

The `getdate()` function returns an associative array containing date information.

## Example

```php
$date = getdate();

print_r($date);
```

## Returned Information

The array includes:

- seconds
- minutes
- hours
- day
- month
- year
