---
title: CORS (Cross-Origin Resource Sharing)
sidebar:
  order: 165
  label: 165. CORS (Cross-Origin Resource Sharing)
---

CORS allows servers to specify which origins can access their resources.

This is important when making API requests from browsers.

## Example

```php
header("Access-Control-Allow-Origin: \*");
header("Access-Control-Allow-Methods: GET, POST");
```
