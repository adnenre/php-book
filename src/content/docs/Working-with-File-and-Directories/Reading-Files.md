---
title: Reading Files
sidebar:
  order: 103
  label: 103. Reading Files
---

PHP provides several functions to read files.

Common functions include:

- `fgets()`
- `fread()`
- `file_get_contents()`

## Example

```php
$file = fopen("example.txt", "r");

while (!feof($file)) {
    echo fgets($file);
}

fclose($file);
```
