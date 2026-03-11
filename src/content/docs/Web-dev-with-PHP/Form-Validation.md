---
title: Form Validation
sidebar:
  order: 152
  label: 152. Form Validation
---

Form validation ensures that submitted data meets expected requirements.

Validation should be performed on both client and server.

## Example

```php
if (empty($_POST["email"])) {
  echo "Email is required";
}
```
