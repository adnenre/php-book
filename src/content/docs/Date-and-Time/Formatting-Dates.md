---
title: Formatting Dates
sidebar:
  order: 135
  label: 135. Formatting Dates
---

Dates can be formatted using the `format()` method of the DateTime class.

## Example

```php
$date = new DateTime();

echo $date->format("Y-m-d");
echo $date->format("d/m/Y");
```

## Formatting with time

```php
echo $date->format("Y-m-d H:i:s");

```
