---
title: Array Functions
sidebar:
  order: 29
  label: 29. Array Functions
---

### Sorting Functions

```php
<?php
// ============================================
// PHP SORTING FUNCTIONS EXAMPLES
// ============================================

$numbers = [5, 2, 8, 1, 9, 3];

sort($numbers); // Ascending sort
print_r($numbers); // Output: [1, 2, 3, 5, 8, 9]

rsort($numbers); // Descending sort
print_r($numbers); // Output: [9, 8, 5, 3, 2, 1]

$ages = ["John" => 25, "Jane" => 30, "Bob" => 20];
asort($ages); // Ascending sort by values
print_r($ages); // Output: ["Bob" => 20, "John" => 25, "Jane" => 30]

ksort($ages); // Ascending sort by keys
print_r($ages); // Output: ["Bob" => 20, "Jane" => 30, "John" => 25]
?>
```

### Filtering Functions

```php
<?php
// ============================================
// PHP FILTERING FUNCTIONS EXAMPLES
// ============================================

$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers
$evenNumbers = array_filter($numbers, function($num) {
    return $num % 2 == 0;
});
print_r($evenNumbers); // Output: [2, 4, 6, 8, 10]

$people = [
    ["name" => "John", "age" => 25],
    ["name" => "Jane", "age" => 17],
    ["name" => "Bob", "age" => 30]
];

// Filter adults (age >= 18)
$adults = array_filter($people, function($person) {
    return $person["age"] >= 18;
});
print_r($adults); // Output: [["name" => "John", "age" => 25], ["name" => "Bob", "age" => 30]]
?>

```

### Mapping Functions

```php
<?php
// ============================================
// PHP MAPPING FUNCTIONS EXAMPLES
// ============================================

$numbers = [1, 2, 3, 4, 5];

// Square each number
$squared = array_map(function($num) {
    return $num * $num;
}, $numbers);
print_r($squared); // Output: [1, 4, 9, 16, 25]

$names = ["john", "jane", "bob"];

// Capitalize names
$capitalized = array_map('ucfirst', $names);
print_r($capitalized); // Output: ["John", "Jane", "Bob"]

// Multiply by 2
$doubled = array_map(fn($n) => $n * 2, $numbers);
print_r($doubled); // Output: [2, 4, 6, 8, 10] (PHP 7.4+ arrow functions)
?>

```

### Reduction Functions

```php
<?php
// ============================================
// PHP REDUCTION FUNCTIONS EXAMPLES
// ============================================

$numbers = [1, 2, 3, 4, 5];

// Sum all numbers
$sum = array_reduce($numbers, function($carry, $item) {
    return $carry + $item;
}, 0);
echo $sum . PHP_EOL; // Output: 15

// Multiply all numbers
$product = array_reduce($numbers, function($carry, $item) {
    return $carry * $item;
}, 1);
echo $product . PHP_EOL; // Output: 120

// Find maximum value
$max = array_reduce($numbers, function($carry, $item) {
    return $carry > $item ? $carry : $item;
}, $numbers[0]);
echo $max . PHP_EOL; // Output: 5

// Count total characters in strings
$words = ["Hello", "World", "PHP"];
$totalChars = array_reduce($words, function($carry, $word) {
    return $carry + strlen($word);
}, 0);
echo $totalChars . PHP_EOL; // Output: 11
?>
```

### Searching Functions

```php
<?php
// ============================================
// PHP SEARCHING FUNCTIONS EXAMPLES
// ============================================

$fruits = ["apple", "banana", "orange", "mango"];
$ages = ["John" => 25, "Jane" => 30, "Bob" => 35];

// Check if value exists
if (in_array("banana", $fruits)) {
    echo "Found banana!" . PHP_EOL; // Output: Found banana!
}

// Find key by value
$key = array_search("orange", $fruits);
echo $key . PHP_EOL; // Output: 2

// Check if key exists
if (array_key_exists("Jane", $ages)) {
    echo "Jane's age is " . $ages["Jane"] . PHP_EOL; // Output: Jane's age is 30
}

// Find all occurrences of a value
$numbers = [1, 2, 3, 2, 4, 2, 5];
$keys = array_keys($numbers, 2);
print_r($keys); // Output: [1, 3, 5]
?>
```

### Slicing and Splicing

```php
<?php
// ============================================
// PHP SLICING AND SPLICING EXAMPLES
// ============================================

$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array_slice - Extract a portion of array
$slice1 = array_slice($numbers, 2, 4); // Start at index 2, take 4 elements
print_r($slice1); // Output: [3, 4, 5, 6]

$slice2 = array_slice($numbers, -3); // Last 3 elements
print_r($slice2); // Output: [8, 9, 10]

// array_splice - Remove and replace elements
$fruits = ["apple", "banana", "orange", "mango", "grape"];

// Remove 2 elements starting from index 1
$removed = array_splice($fruits, 1, 2);
print_r($removed); // Output: ["banana", "orange"]
print_r($fruits); // Output: ["apple", "mango", "grape"]

// Replace elements
$colors = ["red", "green", "blue", "yellow"];
array_splice($colors, 1, 2, ["pink", "purple"]);
print_r($colors); // Output: ["red", "pink", "purple", "yellow"]

// Insert without removing
$letters = ["a", "b", "e", "f"];
array_splice($letters, 2, 0, ["c", "d"]);
print_r($letters); // Output: ["a", "b", "c", "d", "e", "f"]
?>
```
