---
title: Array Operations
sidebar:
  order: 30
  label: 30. Array Operations
---

### Accessing Elements

```php
<?php
// ============================================
// PHP ACCESSING ELEMENTS EXAMPLES
// ============================================

$fruits = ["Apple", "Banana", "Orange"];
$person = ["name" => "John", "age" => 30];

// Access by index (indexed array)
echo $fruits[0] . PHP_EOL; // Output: Apple
echo $fruits[2] . PHP_EOL; // Output: Orange

// Access by key (associative array)
echo $person["name"] . PHP_EOL; // Output: John
echo $person["age"] . PHP_EOL; // Output: 30

// Nested array access
$matrix = [
    "row1" => [1, 2, 3],
    "row2" => [4, 5, 6]
];
echo $matrix["row1"][1] . PHP_EOL; // Output: 2

// Using current(), next(), reset()
$numbers = [10, 20, 30];
echo current($numbers) . PHP_EOL; // Output: 10
next($numbers);
echo current($numbers) . PHP_EOL; // Output: 20
reset($numbers);
echo current($numbers) . PHP_EOL; // Output: 10
?>
```

### Adding Elements

```php
<?php
// ============================================
// PHP ADDING ELEMENTS EXAMPLES
// ============================================

$fruits = ["Apple", "Banana"];

// Add with [] operator
$fruits[] = "Orange";
print_r($fruits); // Output: ["Apple", "Banana", "Orange"]

// Add with array_push()
array_push($fruits, "Mango", "Grape");
print_r($fruits); // Output: ["Apple", "Banana", "Orange", "Mango", "Grape"]

// Add at beginning with array_unshift()
array_unshift($fruits, "Strawberry");
print_r($fruits); // Output: ["Strawberry", "Apple", "Banana", "Orange", "Mango", "Grape"]

// Add to associative array
$person = ["name" => "John"];
$person["age"] = 30;
$person["city"] = "NYC";
print_r($person); // Output: ["name" => "John", "age" => 30, "city" => "NYC"]

// Merge arrays
$array1 = [1, 2];
$array2 = [3, 4];
$merged = array_merge($array1, $array2);
print_r($merged); // Output: [1, 2, 3, 4]
?>

```

### Removing Elements

```php
<?php
// ============================================
// PHP REMOVING ELEMENTS EXAMPLES
// ============================================

$fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

// Remove last element with array_pop()
$last = array_pop($fruits);
echo $last . PHP_EOL; // Output: Grape
print_r($fruits); // Output: ["Apple", "Banana", "Orange", "Mango"]

// Remove first element with array_shift()
$first = array_shift($fruits);
echo $first . PHP_EOL; // Output: Apple
print_r($fruits); // Output: ["Banana", "Orange", "Mango"]

// Remove specific element with unset()
unset($fruits[1]); // Remove element at index 1 (Orange)
print_r($fruits); // Output: ["Banana", "Mango"] (keys are preserved)

// Remove with array_splice()
$numbers = [1, 2, 3, 4, 5];
array_splice($numbers, 1, 2); // Remove 2 elements starting at index 1
print_r($numbers); // Output: [1, 4, 5]

// Remove by value
$colors = ["red", "green", "blue", "green"];
$key = array_search("green", $colors);
unset($colors[$key]);
print_r($colors); // Output: ["red", "blue", "green"]
?>

```

### Modifying Elements

```php
<?php
// ============================================
// PHP MODIFYING ELEMENTS EXAMPLES
// ============================================

$fruits = ["Apple", "Banana", "Orange"];

// Modify by index
$fruits[1] = "Mango";
print_r($fruits); // Output: ["Apple", "Mango", "Orange"]

// Modify associative array
$person = ["name" => "John", "age" => 30];
$person["age"] = 31;
$person["name"] = "Johnny";
print_r($person); // Output: ["name" => "Johnny", "age" => 31]

// Modify with array_replace()
$base = ["a" => 1, "b" => 2];
$replacements = ["b" => 5, "c" => 3];
$result = array_replace($base, $replacements);
print_r($result); // Output: ["a" => 1, "b" => 5, "c" => 3]

// Modify with array_map()
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);
print_r($doubled); // Output: [2, 4, 6, 8, 10]

// Modify by reference in loop
$values = [10, 20, 30];
foreach ($values as &$value) {
    $value += 5;
}
print_r($values); // Output: [15, 25, 35]
?>
```
