---
title: Reading Directories
sidebar:
  order: 108
  label: 108. Reading Directories
---

Directories can be read using functions like `scandir()`.

## Example

```php
$files = scandir(".");

print_r($files);
```
