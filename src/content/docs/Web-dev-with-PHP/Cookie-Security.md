---
title: Cookie Security
sidebar:
  order: 162
  label: 162. Cookie Security
---

Cookies should be secured to prevent attacks.

Important security options:

- HttpOnly
- Secure
- SameSite

## Example

```php
setcookie(
    "session",
    "abc123",
    [
        "expires" => time()+3600,
        "secure" => true,
        "httponly" => true,
        "samesite" => "Strict"
    ]
);
```
