---
title: Traits
sidebar:
  order: 38
  label: 38. Traits
---

### Trait Declaration

A mechanism for code reuse in single inheritance languages like PHP. Traits allow you to reuse sets of methods across multiple classes.

```php
<?php
// Declaring a trait
trait Logger {
    public function log($message) {
        echo "[" . date('Y-m-d H:i:s') . "] $message" . PHP_EOL;
    }

    public function error($message) {
        $this->log("ERROR: $message");
    }
}

trait Timestamp {
    public function getTimestamp() {
        return time();
    }
}

// Using traits in classes
class User {
    use Logger, Timestamp; // Using multiple traits

    public function create($name) {
        $this->log("User created: $name");
        return "User created at: " . $this->getTimestamp();
    }
}

$user = new User();
echo $user->create("John") . PHP_EOL; // Output: [timestamp] User created: John

```

### Using Traits

The process of including a trait in a class using the use keyword to inherit its methods.

```php
<?php
trait Greeting {
    public function sayHello() {
        return "Hello";
    }

    public function sayGoodbye() {
        return "Goodbye";
    }
}

trait Math {
    public function add($a, $b) {
        return $a + $b;
    }
}

// Using a single trait
class SimpleGreeting {
    use Greeting;

    public function greet($name) {
        return $this->sayHello() . ", $name!";
    }
}

// Using multiple traits
class Calculator {
    use Greeting, Math;

    public function calculateAndGreet($a, $b, $name) {
        $sum = $this->add($a, $b);
        return $this->sayHello() . " $name, sum is $sum";
    }
}

$greeting = new SimpleGreeting();
echo $greeting->greet("John") . PHP_EOL; // Output: Hello, John!

$calc = new Calculator();
echo $calc->calculateAndGreet(5, 3, "John") . PHP_EOL; // Output: Hello John, sum is 8

```

### Trait Conflicts and Resolution

Handling situations when multiple traits have methods with the same name using insteadof and as operators.

```php
<?php
trait A {
    public function sayHello() {
        return "Hello from A";
    }

    public function sayGoodbye() {
        return "Goodbye from A";
    }
}

trait B {
    public function sayHello() {
        return "Hello from B";
    }

    public function sayGoodbye() {
        return "Goodbye from B";
    }
}

class Speaker {
    use A, B {
        // Insteadof resolves conflicts
        A::sayHello insteadof B;
        B::sayGoodbye insteadof A;

        // As creates aliases
        B::sayHello as sayHelloFromB;
        A::sayGoodbye as sayGoodbyeFromA;
    }
}

$speaker = new Speaker();
echo $speaker->sayHello() . PHP_EOL;      // Output: Hello from A
echo $speaker->sayGoodbye() . PHP_EOL;     // Output: Goodbye from B
echo $speaker->sayHelloFromB() . PHP_EOL;  // Output: Hello from B
echo $speaker->sayGoodbyeFromA() . PHP_EOL; // Output: Goodbye from A

```

### Trait Composition

Combining multiple traits together, including the ability for traits to use other traits.

```php
<?php
// Base traits
trait Loggable {
    public function log($message) {
        echo "LOG: $message" . PHP_EOL;
    }
}

trait Timestampable {
    public function getTimestamp() {
        return date('Y-m-d H:i:s');
    }
}

// Trait can use other traits (trait composition)
trait Auditable {
    use Loggable, Timestampable;

    public function audit($action) {
        $time = $this->getTimestamp();
        $this->log("$action performed at $time");
    }
}

trait Serializable {
    public function toArray() {
        return get_object_vars($this);
    }
}

// Composing multiple traits in a class
class Product {
    use Auditable, Serializable;

    public $name;
    public $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
        $this->audit("Product created");
    }
}

$product = new Product("Laptop", 1000);
print_r($product->toArray()); // Output: Array with name and price

```
