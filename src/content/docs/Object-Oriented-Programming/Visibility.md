---
title: Visibility
sidebar:
  order: 34
  label: 34. Visibility
---

### public

The most permissive visibility modifier. Public properties and methods can be accessed from anywhere - inside the class, from child classes, and from outside the class.

```php
<?php
class Car {
    public $brand; // Public property - accessible anywhere
    public $model;

    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }

    public function start() { // Public method - can be called from anywhere
        return "Car started";
    }
}

$car = new Car("Toyota", "Camry");
echo $car->brand . PHP_EOL;      // Output: Toyota (accessible outside)
echo $car->start() . PHP_EOL;     // Output: Car started (accessible outside)
$car->model = "Corolla";          // Can modify from outside
echo $car->model . PHP_EOL;       // Output: Corolla
?>
```

### protected

Protected properties and methods can be accessed only within the class itself and by child classes (inheritance), but not from outside the class.

```php
<?php
class ParentClass {
    protected $data = "Protected data"; // Protected property

    protected function getData() { // Protected method
        return $this->data;
    }
}

class ChildClass extends ParentClass {
    public function exposeData() {
        return $this->getData(); // Can access protected parent method
    }

    protected function childMethod() {
        return "Child protected method";
    }
}

$parent = new ParentClass();
// echo $parent->data;      // ERROR - cannot access protected property
// echo $parent->getData(); // ERROR - cannot access protected method

$child = new ChildClass();
echo $child->exposeData() . PHP_EOL; // Output: Protected data (through public method)
// echo $child->childMethod(); // ERROR - cannot access protected method
?>
```

### private

The most restrictive visibility modifier. Private properties and methods can only be accessed within the class that defines them. Not even child classes can access them.

```php
<?php
class BankAccount {
    private $balance = 1000; // Private property - only accessible in this class
    private $pin = 1234;

    private function calculateInterest() { // Private method
        return $this->balance * 0.05;
    }

    public function getBalance($pin) {
        if ($pin === $this->pin) {
            return $this->balance; // Can access private property here
        }
        return "Wrong PIN";
    }

    public function addInterest() {
        return $this->balance + $this->calculateInterest(); // Can call private method
    }
}

class SavingsAccount extends BankAccount {
    public function tryAccessPrivate() {
        // return $this->balance;    // ERROR - cannot access private property
        // return $this->calculateInterest(); // ERROR - cannot access private method
        return "Cannot access parent's private members";
    }
}

$account = new BankAccount();
// echo $account->balance; // ERROR - cannot access private property
echo $account->getBalance(1234) . PHP_EOL; // Output: 1000
echo $account->addInterest() . PHP_EOL; // Output: 1050

$savings = new SavingsAccount();
echo $savings->tryAccessPrivate() . PHP_EOL; // Output: Cannot access parent's private members
?>
```

### Readonly Properties (PHP 8.1+)

Properties that can only be initialized once and cannot be changed after initialization. They provide immutability.

```php
<?php
class User {
    public readonly string $name; // Readonly property
    public readonly int $age;

    public function __construct(string $name, int $age) {
        $this->name = $name; // Can set once in constructor
        $this->age = $age;
    }

    // public function setName(string $name) {
    //     $this->name = $name; // ERROR - cannot modify readonly property
    // }
}

class Config {
    // Constructor property promotion with readonly (PHP 8.0+)
    public function __construct(
        public readonly string $dbHost,
        public readonly int $dbPort,
        public readonly string $appName
    ) {}
}

$user = new User("John", 30);
echo $user->name . PHP_EOL; // Output: John
// $user->name = "Jane"; // ERROR - cannot modify readonly property

$config = new Config("localhost", 3306, "MyApp");
echo $config->dbHost . PHP_EOL; // Output: localhost
// $config->dbPort = 5432; // ERROR - readonly
?>

```
