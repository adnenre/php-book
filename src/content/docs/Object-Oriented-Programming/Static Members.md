---
title: Static Members
sidebar:
  order: 39
  label: 39. Static Members
---

### Static Properties

Properties that belong to the class itself, not to individual instances. Shared across all objects of the class.

```php
<?php
class Counter {
    public static $count = 0; // Static property
    public $instanceId;

    public function __construct() {
        self::$count++; // Access static property with self::
        $this->instanceId = self::$count;
    }

    public static function getCount() {
        return self::$count;
    }
}

$obj1 = new Counter();
$obj2 = new Counter();
$obj3 = new Counter();

echo Counter::$count . PHP_EOL; // Output: 3 (access directly)
echo $obj1->instanceId . PHP_EOL; // Output: 1
echo $obj2->instanceId . PHP_EOL; // Output: 2
echo $obj3->instanceId . PHP_EOL; // Output: 3
echo Counter::getCount() . PHP_EOL; // Output: 3

```

### Static Method

Methods that belong to the class rather than any object instance. Called on the class itself, not on objects.

```php
<?php
class MathUtils {
    // Static methods
    public static function add($a, $b) {
        return $a + $b;
    }

    public static function multiply($a, $b) {
        return $a * $b;
    }

    public static function factorial($n) {
        if ($n <= 1) return 1;
        return $n * self::factorial($n - 1); // self:: calls static method
    }
}

// Call static methods without instantiating
echo MathUtils::add(5, 3) . PHP_EOL; // Output: 8
echo MathUtils::multiply(4, 5) . PHP_EOL; // Output: 20
echo MathUtils::factorial(5) . PHP_EOL; // Output: 120

// Cannot use $this in static methods
// $math = new MathUtils();
// echo $math->add(5, 3); // Also works but not recommended

```

### Late Static Binding

A feature that allows static method calls to be resolved at runtime based on the class that called them, using the static:: keyword.

```php
<?php
class ParentClass {
    public static $name = "Parent";

    public static function who() {
        echo __CLASS__ . PHP_EOL;
    }

    public static function test() {
        // self:: refers to the class where it's written
        self::who();     // Parent::who()

        // static:: refers to the class that was called at runtime
        static::who();   // Late static binding
    }
}

class ChildClass extends ParentClass {
    public static $name = "Child";

    public static function who() {
        echo __CLASS__ . PHP_EOL;
    }
}

ChildClass::test();
// Output:
// ParentClass
// ChildClass

```
