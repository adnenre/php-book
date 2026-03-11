---
title: Interface Type Hints
sidebar:
  order: 66
  label: 66. Interface Type Hints
---

Functions can require objects implementing a specific interface.

## Example

```php
interface PaymentMethod {
    public function pay();
}

class CreditCard implements PaymentMethod {
    public function pay() {
        echo "Paid with credit card";
    }
}

function processPayment(PaymentMethod $method) {
    $method->pay();
}

processPayment(new CreditCard());
```
