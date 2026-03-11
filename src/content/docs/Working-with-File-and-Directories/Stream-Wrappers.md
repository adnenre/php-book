---
title: Stream Wrappers
sidebar:
  order: 117
  label: 117. Stream Wrappers
---

Stream wrappers allow accessing different resources using URLs.

Common wrappers include:

- `file://`
- `http://`
- `ftp://`
- `php://`

## Example

```php
$content = file_get_contents("php://memory");
```
