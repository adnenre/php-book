---
title: date()
sidebar:
  order: 140
  label: 140. date()
---

The `date()` function formats a timestamp into a readable date string.

## Syntax

````php
date(string $format, ?int $timestamp = null);
```

If no timestamp is provided, the current time is used.

## Example

```php
echo date("Y-m-d");
echo date("d/m/Y");
```

## Common Format Characters

- `Y` – Full year
- `m` – Month
- `d` – Day
- `H` – Hour
- `i` – Minutes
- `s` – Seconds
````
