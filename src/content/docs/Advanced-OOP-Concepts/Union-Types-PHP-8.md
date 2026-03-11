---
title: Union Types in PHP 8
sidebar:
  order: 75
  label: 75. Union Types in PHP 8
---

Union types allow multiple possible types.

## Example

```php
function formatNumber(int|float $number) {
    return number_format($number, 2);
}

echo formatNumber(10);
echo formatNumber(10.5);


```
