---
title: Inheritance
sidebar:
  order: 35
  label: 35. Inheritance
---

### extends Keyword

Used to create a child class that inherits all public and protected properties and methods from a parent class.

```php
<?php
// Parent class
class Animal {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function eat() {
        return "{$this->name} is eating";
    }

    protected function breathe() {
        return "{$this->name} is breathing";
    }
}

// Child class extends parent
class Dog extends Animal {
    public function bark() {
        return "{$this->name} is barking";
    }

    public function getBreathing() {
        return $this->breathe(); // Can access protected method
    }
}

class Cat extends Animal {
    public function meow() {
        return "{$this->name} is meowing";
    }
}

$dog = new Dog("Buddy");
echo $dog->eat() . PHP_EOL;     // Output: Buddy is eating (inherited)
echo $dog->bark() . PHP_EOL;    // Output: Buddy is barking (own method)
echo $dog->getBreathing() . PHP_EOL; // Output: Buddy is breathing

$cat = new Cat("Whiskers");
echo $cat->eat() . PHP_EOL;     // Output: Whiskers is eating
echo $cat->meow() . PHP_EOL;    // Output: Whiskers is meowing
?>

```

### parent Keyword

Used to call parent class methods or access parent class constructors from within a child class.

```php
<?php
class Vehicle {
    public $brand;
    public $year;

    public function __construct($brand, $year) {
        $this->brand = $brand;
        $this->year = $year;
    }

    public function start() {
        return "Vehicle starting";
    }

    public function getInfo() {
        return "Brand: {$this->brand}, Year: {$this->year}";
    }
}

class Car extends Vehicle {
    public $model;

    public function __construct($brand, $year, $model) {
        // Call parent constructor
        parent::__construct($brand, $year);
        $this->model = $model;
    }

    public function start() {
        // Call parent method and extend it
        return parent::start() . " - Car engine roaring!";
    }

    public function getInfo() {
        // Extend parent method
        return parent::getInfo() . ", Model: {$this->model}";
    }
}

$car = new Car("Toyota", 2024, "Camry");
echo $car->start() . PHP_EOL;     // Output: Vehicle starting - Car engine roaring!
echo $car->getInfo() . PHP_EOL;   // Output: Brand: Toyota, Year: 2024, Model: Camry
?>

```

### Overriding Methods

Redefining a parent class method in a child class to change or extend its behavior while maintaining the same method signature.

```php
<?php
class Payment {
    protected $amount;

    public function __construct($amount) {
        $this->amount = $amount;
    }

    public function process() {
        return "Processing payment of $" . $this->amount;
    }

    public function getFee() {
        return $this->amount * 0.02; // 2% fee
    }
}

class CreditCardPayment extends Payment {
    private $cardNumber;

    public function __construct($amount, $cardNumber) {
        parent::__construct($amount);
        $this->cardNumber = $cardNumber;
    }

    // Override parent method
    public function process() {
        return "Processing credit card payment of $" . $this->amount .
               " with card ending in " . substr($this->cardNumber, -4);
    }

    // Override with different logic
    public function getFee() {
        return $this->amount * 0.03; // 3% fee for credit cards
    }
}

class PayPalPayment extends Payment {
    private $email;

    public function __construct($amount, $email) {
        parent::__construct($amount);
        $this->email = $email;
    }

    public function process() {
        return "Processing PayPal payment of $" . $this->amount .
               " for account: " . $this->email;
    }
}

$payment = new Payment(100);
$creditCard = new CreditCardPayment(100, "1234567890123456");
$paypal = new PayPalPayment(100, "user@test.com");

echo $payment->process() . PHP_EOL;    // Output: Processing payment of $100
echo $creditCard->process() . PHP_EOL; // Output: Processing credit card payment of $100 with card ending in 3456
echo $paypal->process() . PHP_EOL;     // Output: Processing PayPal payment of $100 for account: user@test.com

echo $payment->getFee() . PHP_EOL;    // Output: 2
echo $creditCard->getFee() . PHP_EOL; // Output: 3
?>
```

### final Keyword (method)

When applied to a method, it prevents child classes from overriding that method. Ensures critical functionality cannot be changed.

```php
<?php
class SecurityBase {
    // Final method - cannot be overridden
    final public function encryptData($data) {
        return "ENCRYPTED_" . base64_encode($data);
    }

    // Regular method - can be overridden
    public function logAccess($user) {
        return "User $user accessed the system";
    }
}

class AdvancedSecurity extends SecurityBase {
    // public function encryptData($data) { } // ERROR - cannot override final method

    public function logAccess($user) {
        return "User $user accessed the system at " . date('Y-m-d H:i:s');
    }

    public function processData($data) {
        // Can still call the final method
        return $this->encryptData($data);
    }
}

$security = new AdvancedSecurity();
echo $security->logAccess("John") . PHP_EOL;    // Output: User John accessed the system at [timestamp]
echo $security->processData("secret") . PHP_EOL; // Output: ENCRYPTED_c2VjcmV0
?>
```
