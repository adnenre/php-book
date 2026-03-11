---
title: DateInterval and DatePeriod
sidebar:
  order: 143
  label: 143. DateInterval and DatePeriod
---

`DateInterval` represents a time interval.

`DatePeriod` is used to iterate over a range of dates.

## DateInterval Example

```php
$date = new DateTime();

$interval = new DateInterval("P5D");

$date->add($interval);

echo $date->format("Y-m-d");
```

## DatePeriod Example

```php
$start = new DateTime("2025-01-01");
$interval = new DateInterval("P1D");
$end = new DateTime("2025-01-05");

$period = new DatePeriod($start, $interval, $end);

foreach ($period as $date) {
echo $date->format("Y-m-d") . PHP_EOL;
}

```
