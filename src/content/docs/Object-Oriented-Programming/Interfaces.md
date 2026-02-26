---
title: Interface
sidebar:
  order: 37
  label: 37. Interface
---

### Interface Declaration

An interface defines a contract specifying what methods a class must implement, without providing any implementation details.

```php
<?php
// Declaring interfaces
interface Logger {
    public function log($message);
    public function error($message);
}

interface Cacheable {
    public function setCache($key, $value, $ttl = 3600);
    public function getCache($key);
}

interface MathOperations {
    public function add($a, $b);
    public function subtract($a, $b);
    public function multiply($a, $b);
}

// Interface with constants
interface DatabaseConfig {
    const MAX_CONNECTIONS = 10;
    const DEFAULT_PORT = 3306;

    public function connect();
    public function disconnect();
}
?>

```

### Implementing Interfaces

A class uses the implements keyword to fulfill an interface contract by providing concrete implementations for all interface methods.

```php
<?php
interface Drawable {
    public function draw();
    public function getArea();
}

interface Colorful {
    public function setColor($color);
    public function getColor();
}

// Class implementing a single interface
class Circle implements Drawable {
    private $radius;
    private $color;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    // Must implement all interface methods
    public function draw() {
        return "Drawing a circle with radius: " . $this->radius;
    }

    public function getArea() {
        return pi() * $this->radius * $this->radius;
    }

    // Additional methods are allowed
    public function setColor($color) {
        $this->color = $color;
    }
}

$circle = new Circle(5);
echo $circle->draw() . PHP_EOL;    // Output: Drawing a circle with radius: 5
echo $circle->getArea() . PHP_EOL;  // Output: 78.539816339745
?>
```

### Multiple Interface Implementation

A PHP class can implement multiple interfaces, separating them with commas. The class must implement all methods from all interfaces.

```php
<?php
// Multiple interfaces
interface Readable {
    public function read();
}

interface Writable {
    public function write($data);
}

interface Encryptable {
    public function encrypt($data);
    public function decrypt($data);
}

// Class implementing multiple interfaces
class SecureFileHandler implements Readable, Writable, Encryptable {
    private $filename;

    public function __construct($filename) {
        $this->filename = $filename;
    }

    // From Readable
    public function read() {
        return file_get_contents($this->filename);
    }

    // From Writable
    public function write($data) {
        file_put_contents($this->filename, $data);
        return "Data written";
    }

    // From Encryptable
    public function encrypt($data) {
        return base64_encode($data);
    }

    public function decrypt($data) {
        return base64_decode($data);
    }

    // Additional method
    public function getFilename() {
        return $this->filename;
    }
}

// Another example
interface PaymentGateway {
    public function charge($amount);
    public function refund($transactionId);
}

interface FraudDetection {
    public function checkFraud($transaction);
    public function flagTransaction($transactionId);
}

interface Notifiable {
    public function sendNotification($message);
}

class StripePayment implements PaymentGateway, FraudDetection, Notifiable {
    public function charge($amount) {
        return "Charged: $" . $amount;
    }

    public function refund($transactionId) {
        return "Refunded transaction: " . $transactionId;
    }

    public function checkFraud($transaction) {
        return "Checking fraud for transaction";
    }

    public function flagTransaction($transactionId) {
        return "Flagged: " . $transactionId;
    }

    public function sendNotification($message) {
        return "SMS sent: " . $message;
    }
}

$handler = new SecureFileHandler("test.txt");
echo $handler->write("Hello World") . PHP_EOL; // Output: Data written
echo $handler->read() . PHP_EOL; // Output: Hello World

$payment = new StripePayment();
echo $payment->charge(100) . PHP_EOL; // Output: Charged: $100
echo $payment->sendNotification("Payment successful") . PHP_EOL; // Output: SMS sent: Payment successful
?>
```
