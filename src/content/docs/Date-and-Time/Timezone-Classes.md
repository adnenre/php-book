---
title: Timezone Classes
sidebar:
  order: 144
  label: 144. Timezone Classes
---

PHP provides classes for working with timezones.

The main classes are:

- `DateTimeZone`
- `DateTime`

## Example

```php
$timezone = new DateTimeZone("Europe/Paris");

$date = new DateTime("now", $timezone);

echo $date->format("Y-m-d H:i:s");
```

```

```
