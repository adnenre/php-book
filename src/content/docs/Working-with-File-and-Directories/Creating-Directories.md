---
title: Creating Directories
sidebar:
  order: 107
  label: 107. Creating Directories
---

Directories can be created using the `mkdir()` function.

## Example

```php
mkdir("images");
```

## Creating nested directories

```php
mkdir("storage/uploads", 0777, true);

```
