---
title: Aliasing and Importing
sidebar:
  order: 94
  label: 94. Aliasing and Importing
---

Aliasing allows renaming imported classes.

This is useful when two classes share the same name.

## Example

```php
use App\Models\User as AppUser;
use Vendor\Auth\User as AuthUser;

$appUser = new AppUser();
$authUser = new AuthUser();

```

```

```
