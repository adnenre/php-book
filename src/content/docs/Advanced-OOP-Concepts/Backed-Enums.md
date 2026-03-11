---
title: Backed Enums
sidebar:
  order: 53
  label: 53. Backed Enums
---

Backed enums in PHP allow enum cases to have scalar values.  
Each case is backed by either a **string** or **integer**.

This is useful when storing enum values in databases or APIs.

## Example

```php
enum Status: string {
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';
}

$status = Status::Approved;

echo $status->value; // approved
```

## Converting from value

```php
$status = Status::from('approved');

var_dump($status === Status::Approved);
```

## Safe conversion

```php
$status = Status::tryFrom('unknown');

var_dump($status); // null
```
