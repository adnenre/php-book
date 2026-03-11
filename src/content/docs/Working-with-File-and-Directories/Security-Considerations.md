---
title: Security Considerations
sidebar:
  order: 113
  label: 113. Security Considerations
---

Handling files requires proper security practices.

Important considerations:

- Validate file types
- Limit upload size
- Store files outside the public directory
- Rename uploaded files

## Example

```php
$allowed = ["jpg", "png"];

$extension = pathinfo($\_FILES["file"]["name"], PATHINFO_EXTENSION);

if (!in_array($extension, $allowed)) {
die("Invalid file type");
}
```
