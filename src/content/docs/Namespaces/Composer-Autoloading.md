---
title: Composer Autoloading
sidebar:
  order: 100
  label: 100. Composer Autoloading
---

Composer provides a powerful autoloading system.

You configure it inside `composer.json`.

## Example composer.json

```php
{
"autoload": {
"psr-4": {
"App\\": "src/"
}
}
}

```

After configuration run:
