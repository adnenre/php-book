---
title: Throw Expression (PHP 8)
sidebar:
  order: 84
  label: 84. Throw Expression (PHP 8)
---

PHP 8 allows `throw` to be used as an expression.

## Example

---php
$value = $input ?? throw new Exception("Value required");
---phpend
