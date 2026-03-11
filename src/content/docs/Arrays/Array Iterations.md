---
title: Array Iterations
sidebar:
  order: 31
  label: 31. Array Iterations
---

### foreach Loop

```php
<?php
// ============================================
// PHP FOREACH LOOP EXAMPLES
// ============================================

$fruits = ["Apple", "Banana", "Orange"];

// Basic foreach
foreach ($fruits as $fruit) {
    echo $fruit . PHP_EOL; // Output: Apple Banana Orange
}

// foreach with key and value
$person = ["name" => "John", "age" => 30, "city" => "NYC"];
foreach ($person as $key => $value) {
    echo "$key: $value" . PHP_EOL; // Output: name: John age: 30 city: NYC
}

// foreach by reference (modify original)
$numbers = [1, 2, 3];
foreach ($numbers as &$num) {
    $num *= 2;
}
print_r($numbers); // Output: [2, 4, 6]


```

### ArrayIterator

```php
<?php
// ============================================
// PHP ARRAYITERATOR EXAMPLES
// ============================================

$fruits = ["Apple", "Banana", "Orange"];

// Create ArrayIterator
$iterator = new ArrayIterator($fruits);

// Iterate
foreach ($iterator as $key => $value) {
    echo "$key: $value" . PHP_EOL; // Output: 0: Apple 1: Banana 2: Orange
}

// Iterator methods
$iterator->append("Mango");
echo $iterator->count() . PHP_EOL; // Output: 4
echo $iterator->current() . PHP_EOL; // Output: Apple

// Seek to position
$iterator->seek(2);
echo $iterator->current() . PHP_EOL; // Output: Orange


```

### Generator Functions

```php
<?php
// ============================================
// PHP GENERATOR FUNCTIONS EXAMPLES
// ============================================

// Basic generator
function getNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

foreach (getNumbers() as $number) {
    echo $number . PHP_EOL; // Output: 1 2 3
}

// Generator with loop
function getRange($start, $end) {
    for ($i = $start; $i <= $end; $i++) {
        yield $i;
    }
}

foreach (getRange(1, 5) as $num) {
    echo $num . PHP_EOL; // Output: 1 2 3 4 5
}

// Key-value generator
function getPerson() {
    yield "name" => "John";
    yield "age" => 30;
    yield "city" => "NYC";
}

foreach (getPerson() as $key => $value) {
    echo "$key: $value" . PHP_EOL; // Output: name: John age: 30 city: NYC
}


```
