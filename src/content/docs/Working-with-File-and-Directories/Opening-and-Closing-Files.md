---
title: Opening and Closing Files
sidebar:
  order: 102
  label: 102. Opening and Closing Files
---

Files must be opened before reading or writing.

The `fopen()` function opens a file and returns a file handle.

## Example

```php
$file = fopen("example.txt", "r");

fclose($file);
```

## Common Modes

- `r` – read only
- `w` – write (overwrite)
- `a` – append
- `r+` – read and write
