---
title: PSR-4 Autoloading
sidebar:
  order: 99
  label: 99. PSR-4 Autoloading
---

PSR-4 is the standard for autoloading classes in PHP.

It maps namespaces to directory structures.

## Example Structure

```php
namespace App\Controllers;

class HomeController {}

```

Directory structure:

src/
└── Controllers/
└── HomeController.php
