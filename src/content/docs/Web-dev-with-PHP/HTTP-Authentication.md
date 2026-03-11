---
title: HTTP Authentication
sidebar:
  order: 164
  label: 164. HTTP Authentication
---

HTTP authentication allows protecting pages with a username and password.

## Example

```php
if (!isset($_SERVER["PHP_AUTH_USER"])) {

    header("WWW-Authenticate: Basic realm=\"My Site\"");
    header("HTTP/1.0 401 Unauthorized");

    echo "Authentication required";

} else {

    echo "Hello " . $_SERVER["PHP_AUTH_USER"];

}
```
