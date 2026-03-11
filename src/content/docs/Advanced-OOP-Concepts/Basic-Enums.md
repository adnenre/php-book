---
title: Basic Enums
sidebar:
  order: 54
  label: 54. Basic Enums
---

Enums represent a fixed set of possible values.

They were introduced in PHP 8.1.

## Example

```php
enum OrderStatus {
case Pending;
case Shipped;
case Delivered;
}
```

## Using enums

```php
$status = OrderStatus::Pending;

if ($status === OrderStatus::Pending) {
echo "Order not shipped yet";
}
```

## Listing cases

```php
foreach (OrderStatus::cases() as $case) {
echo $case->name . PHP_EOL;
}
```
