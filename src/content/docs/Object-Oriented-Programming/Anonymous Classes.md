---
title: Anonymous Classes
sidebar:
  order: 43
  label: 43. Anonymous Classes
---

### Anonymous Classes

Classes without a name that can be created on-the-fly. Useful for simple, one-time use objects.

```php
<?php
// Creating an anonymous class
$logger = new class {
    public function log($message) {
        echo "LOG: $message" . PHP_EOL;
    }
};

$logger->log("Test message"); // Output: LOG: Test message

// Anonymous class with constructor
$person = new class("John", 30) {
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        return "I'm {$this->name}, {$this->age} years old";
    }
};

echo $person->introduce() . PHP_EOL; // Output: I'm John, 30 years old


```
