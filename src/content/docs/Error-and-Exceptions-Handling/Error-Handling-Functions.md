---
title: Error Handling Functions
sidebar:
  order: 85
  label: 85. Error Handling Functions
---

PHP provides functions to control error handling.

Common functions include:

- set_error_handler()
- trigger_error()
- error_reporting()

## Example

```php
set_error_handler(function($errno, $errstr) {
echo "Error: $errstr";
});

```
