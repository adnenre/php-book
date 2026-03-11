---
title: Creating DateTime Objects
sidebar:
  order: 134
  label: 134. Creating DateTime Objects
---

DateTime objects can be created using different formats.

## Current date and time

```php
$date = new DateTime();
```

## Specific date

```php
$date = new DateTime("2025-06-10");
```

## With timezone

```php
$date = new DateTime("now", new DateTimeZone("UTC"));

```
