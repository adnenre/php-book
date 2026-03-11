---
title: Complex Syntax
sidebar:
  order: 132
  label: 132. Complex Syntax
---

Complex syntax allows embedding variables inside strings using curly braces.

## Example

```php
$user = ["name" => "John"];

echo "Hello {$user['name']}";
```
