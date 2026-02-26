---
title: Classes And Objects
sidebar:
  order: 32
  label: 32. Classes And Objects
---

### Class Declaration

A class is a blueprint or template for creating objects. It defines the properties (variables) and methods (functions) that all objects of that type will have.

```php
<?php
// ============================================
// PHP CLASS DECLARATION EXAMPLES
// ============================================

// Basic class declaration
class Car {
    // Class body goes here
}

// Class with properties and methods
class Person {
    public $name;
    public $age;

    public function sayHello() {
        echo "Hello!";
    }
}

// Abstract class
abstract class Animal {
    abstract public function makeSound();
}

// Final class (cannot be extended)
final class MathUtils {
    public static function add($a, $b) {
        return $a + $b;
    }
}

// Class with constants
class Config {
    const VERSION = "1.0.0";
    const MAX_USERS = 100;
}
?>

```

### Object Instantiation

Object instantiation is the process of creating an actual object (instance) from a class using the new keyword. Each instance has its own copy of properties.

```php
<?php
// ============================================
// PHP OBJECT INSTANTIATION EXAMPLES
// ============================================

class Car {
    public $brand;
    public $model;
}

class User {
    public $name;
    public $email;
}

// Create objects (instantiate)
$car1 = new Car();
$car2 = new Car();
$user = new User();

// Assign values
$car1->brand = "Toyota";
$car1->model = "Camry";

$car2->brand = "Honda";
$car2->model = "Civic";

$user->name = "John Doe";
$user->email = "john@example.com";

// var_dump objects
var_dump($car1); // Shows Car object with brand and model
var_dump($user); // Shows User object with name and email

// Check if object is instance of class
echo ($car1 instanceof Car) ? "Yes" : "No"; // Output: Yes
?>

```

### Properties

Properties are variables declared inside a class that hold data specific to each object. They can have visibility modifiers (public, private, protected) controlling access.

```php
<?php
// ============================================
// PHP PROPERTIES EXAMPLES
// ============================================

class Product {
    // Public property - accessible anywhere
    public $name;

    // Private property - accessible only within this class
    private $price;

    // Protected property - accessible in this class and child classes
    protected $tax = 0.1;

    // Static property - belongs to class, not instance
    public static $counter = 0;

    // Typed properties (PHP 7.4+)
    public int $quantity = 0;
    public string $description = "";

    // Constant property
    const CURRENCY = "USD";

    public function setPrice($price) {
        $this->price = $price;
    }

    public function getPrice() {
        return $this->price;
    }
}

$product = new Product();
$product->name = "Laptop"; // OK - public
// $product->price = 1000; // ERROR - private
$product->setPrice(1000); // OK - using public method
echo $product->getPrice(); // Output: 1000
echo Product::$counter; // Access static property
echo Product::CURRENCY; // Access constant
?>

```

### Methods

Methods are functions defined inside a class that define the behavior or actions an object can perform. They can access and manipulate object properties.

```php
<?php
// ============================================
// PHP METHODS EXAMPLES
// ============================================

class Calculator {
    // Public method
    public function add($a, $b) {
        return $a + $b;
    }

    // Private method
    private function multiply($a, $b) {
        return $a * $b;
    }

    // Protected method
    protected function divide($a, $b) {
        if ($b == 0) return "Cannot divide by zero";
        return $a / $b;
    }

    // Static method
    public static function staticAdd($a, $b) {
        return $a + $b;
    }

    // Method with type declarations
    public function subtract(int $a, int $b): int {
        return $a - $b;
    }

    // Method with default parameters
    public function power($base, $exp = 2) {
        return pow($base, $exp);
    }

    // Method calling private method
    public function calculateArea($length, $width) {
        return $this->multiply($length, $width); // Calling private method
    }
}

$calc = new Calculator();
echo $calc->add(5, 3) . PHP_EOL; // Output: 8
echo $calc->subtract(10, 4) . PHP_EOL; // Output: 6
echo $calc->power(3) . PHP_EOL; // Output: 9 (3²)
echo $calc->power(2, 3) . PHP_EOL; // Output: 8 (2³)
echo Calculator::staticAdd(4, 5) . PHP_EOL; // Output: 9
// echo $calc->multiply(3, 4); // ERROR - private method
echo $calc->calculateArea(5, 3) . PHP_EOL; // Output: 15
?>

```

### $this Keyword

\$this is a pseudo-variable available inside class methods that refers to the current object instance. It's used to access properties and methods from within the class.

```php
<?php
// ============================================
// PHP $THIS KEYWORD EXAMPLES
// ============================================

class User {
    public $name;
    public $email;
    private $password;

    // Constructor uses $this
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }

    // Method using $this to access properties
    public function introduce() {
        return "Hi, I'm " . $this->name . " and my email is " . $this->email;
    }

    // Method using $this to call another method
    public function setPassword($password) {
        $this->password = $this->hashPassword($password);
    }

    private function hashPassword($password) {
        return password_hash($password, PASSWORD_DEFAULT);
    }

    // Method chaining using $this
    public function setName($name) {
        $this->name = $name;
        return $this; // Return $this for chaining
    }

    public function setEmail($email) {
        $this->email = $email;
        return $this; // Return $this for chaining
    }

    public function display() {
        echo $this->name . " - " . $this->email . PHP_EOL;
        return $this;
    }
}

$user = new User("John", "john@test.com");
echo $user->introduce() . PHP_EOL; // Output: Hi, I'm John and my email is john@test.com

// Method chaining
$user->setName("Johnny")
     ->setEmail("johnny@test.com")
     ->display(); // Output: Johnny - johnny@test.com

// Another example with $this
class Counter {
    private $count = 0;

    public function increment() {
        $this->count++;
        return $this;
    }

    public function decrement() {
        $this->count--;
        return $this;
    }

    public function reset() {
        $this->count = 0;
        return $this;
    }

    public function getCount() {
        return $this->count;
    }
}

$counter = new Counter();
echo $counter->increment()
             ->increment()
             ->decrement()
             ->getCount() . PHP_EOL; // Output: 1
?>

```

### Example - Bank Accound Class

```php
<?php
// ============================================
// COMPLETE BANK ACCOUNT CLASS EXAMPLE
// ============================================

class BankAccount {
    // Properties
    private $accountNumber;
    private $balance;
    public $owner;
    public static $bankName = "PHP Bank";
    const MIN_BALANCE = 100;

    // Constructor
    public function __construct($owner, $initialBalance = 0) {
        $this->owner = $owner;
        $this->balance = $initialBalance;
        $this->accountNumber = $this->generateAccountNumber();
    }

    // Private method
    private function generateAccountNumber() {
        return "ACC" . rand(1000, 9999);
    }

    // Public methods
    public function deposit($amount) {
        if ($amount > 0) {
            $this->balance += $amount;
            echo "Deposited: $$amount" . PHP_EOL;
        }
        return $this; // For chaining
    }

    public function withdraw($amount) {
        if ($amount > 0 && $this->balance - $amount >= self::MIN_BALANCE) {
            $this->balance -= $amount;
            echo "Withdrawn: $$amount" . PHP_EOL;
        } else {
            echo "Insufficient funds or below minimum balance!" . PHP_EOL;
        }
        return $this;
    }

    public function getBalance() {
        return $this->balance;
    }

    public function getAccountInfo() {
        return [
            "owner" => $this->owner,
            "account" => $this->accountNumber,
            "balance" => $this->balance,
            "bank" => self::$bankName
        ];
    }

    // Static method
    public static function getBankInfo() {
        return "Welcome to " . self::$bankName . ", Min Balance: $" . self::MIN_BALANCE;
    }
}

// Usage
$account = new BankAccount("John Doe", 1000);
$account->deposit(500)
        ->withdraw(200)
        ->deposit(100);

echo "Current balance: $" . $account->getBalance() . PHP_EOL; // Output: 1400
print_r($account->getAccountInfo());
echo BankAccount::getBankInfo() . PHP_EOL;
?>
```
