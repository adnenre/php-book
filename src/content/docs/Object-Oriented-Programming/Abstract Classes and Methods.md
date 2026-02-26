---
title: Abstract Classes and Methods
sidebar:
  order: 36
  label: 36. Abstract Classes and Methods
---

### Abstract Classes

```php
Classes that cannot be instantiated directly. They serve as base templates for other classes to extend from.
<?php
// Abstract class - cannot be instantiated
abstract class Animal {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }

    // Regular method
    public function eat() {
        echo "{$this->name} is eating" . PHP_EOL;
    }

    // Abstract method - must be implemented by child classes
    abstract public function makeSound();
}

// Child class must implement abstract methods
class Dog extends Animal {
    public function makeSound() {
        echo "{$this->name} says: Woof!" . PHP_EOL;
    }
}

// $animal = new Animal("Generic"); // ERROR - cannot instantiate abstract class
$dog = new Dog("Buddy");
$dog->eat(); // Output: Buddy is eating
$dog->makeSound(); // Output: Buddy says: Woof!
?>
```

### Abstract Mthods

Methods declared in an abstract class without implementation. Any child class must provide an implementation for these methods.

```php
<?php
abstract class Shape {
    protected $color;

    public function __construct($color) {
        $this->color = $color;
    }

    // Abstract methods - no implementation
    abstract public function getArea();
    abstract public function getPerimeter();

    // Regular method with implementation
    public function getColor() {
        return $this->color;
    }
}

class Circle extends Shape {
    private $radius;

    public function __construct($color, $radius) {
        parent::__construct($color);
        $this->radius = $radius;
    }

    // Implementing abstract methods
    public function getArea() {
        return pi() * $this->radius * $this->radius;
    }

    public function getPerimeter() {
        return 2 * pi() * $this->radius;
    }
}

$circle = new Circle("red", 5);
echo $circle->getArea() . PHP_EOL; // Output: 78.539816339745
echo $circle->getColor() . PHP_EOL; // Output: red
?>

```

### Overriding Methods

Redefining a parent class method in a child class to provide specific functionality.

```php
<?php
class ParentClass {
    public function greet() {
        return "Hello from parent";
    }

    public function calculate($a, $b) {
        return $a + $b;
    }
}

class ChildClass extends ParentClass {
    // Overriding parent method
    public function greet() {
        return "Hello from child";
    }

    // Overriding with different parameters
    public function calculate($a, $b, $c = 0) {
        return $a + $b + $c;
    }
}

$parent = new ParentClass();
$child = new ChildClass();

echo $parent->greet() . PHP_EOL; // Output: Hello from parent
echo $child->greet() . PHP_EOL; // Output: Hello from child
echo $child->calculate(5, 3, 2) . PHP_EOL; // Output: 10
?>
```

### final Keyword

Prevents a class from being extended or a method from being overridden by child classes.

```php
<?php
// Final class - cannot be extended
final class MathHelper {
    public static function add($a, $b) {
        return $a + $b;
    }
}

// class AdvancedMath extends MathHelper { } // ERROR - cannot extend final class

class ParentClass {
    // Final method - cannot be overridden
    final public function importantMethod() {
        return "This is critical functionality";
    }

    public function normalMethod() {
        return "This can be overridden";
    }
}

class ChildClass extends ParentClass {
    // public function importantMethod() { } // ERROR - cannot override final method

    public function normalMethod() {
        return "Overridden version";
    }
}
?>
```
