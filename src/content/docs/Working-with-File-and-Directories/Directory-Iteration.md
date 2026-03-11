---
title: Directory Iteration
sidebar:
  order: 109
  label: 109. Directory Iteration
---

Directory iteration allows looping through files in a directory.

## Example

```php
$dir = opendir(".");

while (($file = readdir($dir)) !== false) {
echo $file . PHP_EOL;
}

closedir($dir);
```
