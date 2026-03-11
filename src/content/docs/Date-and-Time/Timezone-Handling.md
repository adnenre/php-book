---
title: Timezone Handling
sidebar:
  order: 137
  label: 137. Timezone Handling
---

Handling timezones is important when building global applications.

## Setting default timezone

```php
date_default_timezone_set("UTC");
```

## Example

```php
$date = new DateTime();

echo $date->format("Y-m-d H:i:s");
```

## Changing timezone

```php
$date->setTimezone(new DateTimeZone("America/New_York"));

```
