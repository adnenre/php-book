---
title: Date Arithmetic
sidebar:
  order: 136
  label: 136. Date Arithmetic
---

Date arithmetic allows adding or subtracting time from a date.

## Adding days

````php
$date = new DateTime();

$date->modify("+5 days");

echo $date->format("Y-m-d");
```

## Subtracting time

```php
$date->modify("-1 month");
```
````
