---
title: Compound Types
sidebar:
  order: 15
  label: 15. Compound Types
---

## Arrays

Arrays store multiple values in a single variable.

```php
<?php
// Indexed array
$colors = ["Red", "Green", "Blue"];
echo $colors[0]; // Red

// Associative array
$user = [
    "name" => "John",
    "age" => 30,
    "active" => true
];
echo $user["name"]; // John

// Multidimensional array
$matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
echo $matrix[1][2]; // 6

// Array functions
$numbers = [3, 1, 4, 1, 5];
sort($numbers);
echo count($numbers); // 5
echo implode(", ", $numbers); // 1, 1, 3, 4, 5

// Loop through array
foreach ($colors as $color) {
    echo $color . " ";
}
// Red Green Blue
?>
```

### Object

Objects are instance of classes.

```php
<?php
// Define a class
class Car {
    // Properties
    public $brand;
    public $color;

    // Constructor
    public function __construct($brand, $color) {
        $this->brand = $brand;
        $this->color = $color;
    }

    // Method
    public function honk() {
        return "Beep beep!";
    }

    public function describe() {
        return "This is a {$this->color} {$this->brand}.";
    }
}

// Create an object (instance)
$myCar = new Car("Toyota", "red");
echo $myCar->brand; // Toyota
echo $myCar->honk(); // Beep beep!
echo $myCar->describe(); // This is a red Toyota.

// Check if object
var_dump(is_object($myCar)); // bool(true)

// Another example
class Person {
    public $name;
    public function __construct($name) {
        $this->name = $name;
    }
    public function greet() {
        return "Hello, I'm " . $this->name;
    }
}

$person = new Person("Alice");
echo $person->greet(); // Hello, I'm Alice
?>
```

### Callable

Callables are functions that can be called indirectly.

```php
<?php
// 1. String function name
function sayHello($name) {
    return "Hello, $name!";
}
$func = "sayHello";
echo $func("World"); // Hello, World!

// 2. Anonymous function (closure)
$multiply = function($a, $b) {
    return $a * $b;
};
echo $multiply(4, 5); // 20

// 3. Arrow function (PHP 7.4+)
$add = fn($a, $b) => $a + $b;
echo $add(10, 5); // 15

// 4. Class method as callable
class Calculator {
    public function square($n) {
        return $n * $n;
    }
}
$calc = new Calculator();
$method = [$calc, "square"];
echo $method(6); // 36

// 5. Static class method
class MathUtils {
    public static function cube($n) {
        return $n * $n * $n;
    }
}
$staticMethod = ["MathUtils", "cube"];
echo $staticMethod(3); // 27

// Using callable with array_map
$numbers = [1, 2, 3, 4];
$doubled = array_map(fn($n) => $n * 2, $numbers);
print_r($doubled); // [2, 4, 6, 8]

// Check if callable
var_dump(is_callable($add)); // bool(true)
?>
```

### Iterable

Iterable types can be looped through (arrays and objects implementing Traversable).

```php
<?php
// 1. Array is iterable
$fruits = ["apple", "banana", "orange"];
function processItems(iterable $items) {
    $result = [];
    foreach ($items as $item) {
        $result[] = strtoupper($item);
    }
    return $result;
}
print_r(processItems($fruits)); // [APPLE, BANANA, ORANGE]

// 2. Custom iterable object
class NumberGenerator implements Iterator {
    private $position = 0;
    private $numbers = [10, 20, 30, 40, 50];

    public function current(): mixed {
        return $this->numbers[$this->position];
    }

    public function key(): int {
        return $this->position;
    }

    public function next(): void {
        ++$this->position;
    }

    public function rewind(): void {
        $this->position = 0;
    }

    public function valid(): bool {
        return isset($this->numbers[$this->position]);
    }
}

$generator = new NumberGenerator();
foreach ($generator as $key => $value) {
    echo "$key: $value\n"; // 0:10, 1:20, 2:30, 3:40, 4:50
}

// 3. Generator function (simplest iterable)
function getRange($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        yield $i;
    }
}

foreach (getRange(1, 5) as $number) {
    echo $number . " "; // 1 2 3 4 5
}

echo "\n";

// 4. Check if iterable
var_dump(is_iterable([1, 2, 3])); // bool(true)
var_dump(is_iterable($generator)); // bool(true)
var_dump(is_iterable("hello")); // bool(false)

// 5. Practical example: process any iterable
function sum(iterable $values) {
    $total = 0;
    foreach ($values as $value) {
        $total += $value;
    }
    return $total;
}

echo sum([1, 2, 3, 4, 5]); // 15
echo sum(getRange(1, 5)); // 15 (same result with generator)
?>
```
