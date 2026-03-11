---
title: DateTime Class
sidebar:
  order: 133
  label: 133. DateTime Class
---

The `DateTime` class provides an object-oriented interface for working with dates and times.

## Creating a DateTime Object

````php
$date = new DateTime();

echo $date->format("Y-m-d H:i:s");
```

## Creating from specific date

```php
$date = new DateTime("2025-01-01");

echo $date->format("Y-m-d");
```
````
