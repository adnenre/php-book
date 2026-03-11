---
title: Regular Expressions
sidebar:
  order: 123
  label: 123. Regular Expressions
---

Regular expressions are used to match patterns in strings.

PHP uses the PCRE library.

## Example

```php
$text = "Hello 123";

if (preg_match("/[0-9]+/", $text)) {
echo "Number found";
}
```
