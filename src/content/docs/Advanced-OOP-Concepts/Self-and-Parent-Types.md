---
title: Self and Parent Types
sidebar:
  order: 71
  label: 71. Self and Parent Types
---

PHP allows using `self` and `parent` as return types.

## Example

```php
class Base {

    public function create(): self {
        return new self();
    }

}

class Child extends Base {

    public function create(): parent {
        return parent::create();
    }

}

```

```

```
