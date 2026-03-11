---
title: Strategy Pattern
sidebar:
  order: 73
  label: 73. Strategy Pattern
---

The Strategy pattern allows selecting an algorithm at runtime.

## Example

```php
interface PaymentStrategy {
public function pay(int $amount);
}

class PayPal implements PaymentStrategy {
public function pay(int $amount) {
echo "Paid $amount with PayPal";
}
}

class Payment {

    private PaymentStrategy $strategy;

    public function __construct(PaymentStrategy $strategy) {
        $this->strategy = $strategy;
    }

    public function execute(int $amount) {
        $this->strategy->pay($amount);
    }

}

```

```

```
