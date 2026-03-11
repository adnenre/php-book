---
title: Session Security
sidebar:
  order: 158
  label: 158. Session Security
---

Sessions must be secured to prevent attacks like session hijacking.

Security practices include:

- Regenerating session IDs
- Using HTTPS
- Setting secure cookies

## Example

```php
session_start();

session_regenerate_id(true);
```
