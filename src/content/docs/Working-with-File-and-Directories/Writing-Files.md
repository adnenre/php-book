---
title: Writing Files
sidebar:
  order: 104
  label: 104. Writing Files
---

Files can be written using functions like `fwrite()`.

## Example

```php
$file = fopen("example.txt", "w");

fwrite($file, "Hello World");

fclose($file);
```

```

```
