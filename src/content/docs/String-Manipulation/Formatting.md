---
title: Formatting
sidebar:
  order: 120
  label: 120. Formatting
---

String formatting allows creating formatted output.

Common functions include:

- `printf()`
- `sprintf()`

## Example

```php
$name = "John";
$age = 30;

printf("%s is %d years old", $name, $age);
```

## Using sprintf

```php
$message = sprintf("Price: %.2f", 10.5);

echo $message;
```
