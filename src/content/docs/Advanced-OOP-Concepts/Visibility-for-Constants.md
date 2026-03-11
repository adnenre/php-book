---
title: Visibility for Constants
sidebar:
  order: 76
  label: 76. Visibility for Constants
---

PHP allows defining visibility for class constants.

## Example

```php
class Example {

    public const PUBLIC_CONST = "Public";
    protected const PROTECTED_CONST = "Protected";
    private const PRIVATE_CONST = "Private";

    public function show() {
        echo self::PUBLIC_CONST;
        echo self::PROTECTED_CONST;
        echo self::PRIVATE_CONST;
    }

}


```
