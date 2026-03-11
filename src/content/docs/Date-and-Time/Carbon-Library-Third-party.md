---
title: Carbon Library (Third-party)
sidebar:
  order: 145
  label: 145. Carbon Library (Third-party)
---

Carbon is a popular PHP library for working with dates.

It extends the PHP `DateTime` class and provides a more expressive API.

## Installing Carbon

```shell
composer require nesbot/carbon
```

## Example

```php
use Carbon\Carbon;

$date = Carbon::now();

echo $date->addDays(3);
```

## Formatting

```php
echo Carbon::now()->format("Y-m-d H:i:s");
```
