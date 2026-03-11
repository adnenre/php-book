---
title: set_error_handler
sidebar:
  order: 88
  label: 88. set_error_handler
---

This function allows creating custom error handlers.

## Example

```php
set_error_handler(function($errno, $errstr) {

    echo "Custom error: $errstr";

});
```

```

```
