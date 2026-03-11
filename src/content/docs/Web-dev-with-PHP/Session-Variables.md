---
title: Session Variables
sidebar:
  order: 156
  label: 156. Session Variables
---

Session variables store user data on the server.

## Example

```php
session_start();

$_SESSION["username"] = "john";

echo $_SESSION["username"];
```
