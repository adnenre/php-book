---
title: Object Comparation
sidebar:
  order: 42
  label: 42. Object Comparation
---

### Object Comparation

Comparing objects using == (same attributes and values) and === (same instance) operators.

```php
<?php
class Person {
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
}

$person1 = new Person("John", 30);
$person2 = new Person("John", 30);
$person3 = $person1;
$person4 = new Person("Jane", 25);

// == compares attributes and values
var_dump($person1 == $person2);  // Output: bool(true) - same attributes
var_dump($person1 == $person4);  // Output: bool(false) - different attributes

// === compares if they are the same instance
var_dump($person1 === $person2); // Output: bool(false) - different instances
var_dump($person1 === $person3); // Output: bool(true) - same instance

```
