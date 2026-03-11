---
title: Sessions
sidebar:
  order: 154
  label: 154. Sessions
---

Sessions allow storing data on the server for each user.

Session data persists across multiple requests.

## Example

```php
session_start();

$_SESSION["user"] = "Alice";
```
