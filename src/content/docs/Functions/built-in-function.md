---
title: Built-in Functions
sidebar:
  order: 27
  label: 27. Built-in Functions
---

PHP provides many built-in functions that simplify common programming tasks.

These functions are grouped into categories such as:

- String Functions
- Array Functions
- Math Functions
- Date/Time Functions

**String functions**

String functions help manipulate and analyze text.

Common functions include:

- `strlen()` – get string length
- `strpos()` – find position of a substring
- `str_replace()` – replace text
- `substr()` – extract part of a string

## Example

```php
$text = "Hello World";

echo strlen($text);
```

## Replace Text

```php
echo str_replace("World", "PHP", "Hello World");
```

**Array functions**

Array functions allow working with collections of values.

Common functions include:

- `count()`
- `array_push()`
- `array_merge()`
- `array_map()`

## Example

```php
$numbers = [1,2,3];

echo count($numbers);
```

## Adding Values

```php
array_push($numbers, 4);

print_r($numbers);
```

**Math functions**
Math functions perform mathematical calculations.

Common functions include:

- `abs()` – absolute value
- `round()` – round numbers
- `sqrt()` – square root
- `rand()` – generate random numbers

## Example

```php
echo abs(-10);
```

## Random Number

```php
echo rand(1, 100);
```

**Date and time functions**

Date and time functions work with timestamps and formatted dates.

Common functions include:

- `date()`
- `time()`
- `strtotime()`

## Example

```php
echo date("Y-m-d");
```

## Current Timestamp

```php
echo time();
```
