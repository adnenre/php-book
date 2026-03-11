---
title: strtotime()
sidebar:
  order: 141
  label: 141. strtotime()
---

The `strtotime()` function converts a textual date into a Unix timestamp.

## Example

```php
$timestamp = strtotime("next Monday");

echo date("Y-m-d", $timestamp);
```

## Another Example

```php
echo strtotime("2025-01-01");

```
