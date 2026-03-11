---
title: $_FILES Superglobal
sidebar:
  order: 111
  label: 111. $_FILES Superglobal
---

The `$_FILES` superglobal contains information about uploaded files.

## Example Structure

```php
print_r($\_FILES);
```

Typical information includes:

- `name`
- `type`
- `tmp_name`
- `error`
- `size`
