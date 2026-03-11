---
title: File System Functions
sidebar:
  order: 101
  label: 101. File System Functions
---

PHP provides many functions to work with the file system.

Common file system operations include:

- Creating files
- Reading files
- Writing files
- Deleting files
- Managing directories

Some commonly used functions:

- `file_exists()`
- `filesize()`
- `unlink()`
- `copy()`
- `rename()`

## Example

```php
if (file_exists("example.txt")) {
echo "File exists";
}
```
