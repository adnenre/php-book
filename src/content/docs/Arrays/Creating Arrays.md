---
title: Array Operations
sidebar:
  order: 31
  label: 31. Array Operations
---

### array() Syntax

```php
<?php
// ============================================
// PHP ARRAY() SYNTAX EXAMPLES
// ============================================

// Indexed array
$fruits = array("Apple", "Banana", "Orange");
print_r($fruits); // Output: [0=>"Apple", 1=>"Banana", 2=>"Orange"]

// Associative array
$person = array("name" => "John", "age" => 30, "city" => "NYC");
print_r($person); // Output: ["name"=>"John", "age"=>30, "city"=>"NYC"]

// Mixed array
$mixed = array(1, "hello", true, 3.14);
print_r($mixed); // Output: [0=>1, 1=>"hello", 2=>true, 3=>3.14]

// Nested array
$matrix = array(
    array(1, 2, 3),
    array(4, 5, 6),
    array(7, 8, 9)
);
echo $matrix[1][2] . PHP_EOL; // Output: 6

// Specify keys
$custom = array(0 => "zero", 2 => "two", 5 => "five");
print_r($custom); // Output: [0=>"zero", 2=>"two", 5=>"five"]
?>
```

### Short Array Syntax []

```php
<?php
// ============================================
// PHP SHORT ARRAY SYNTAX [] EXAMPLES
// ============================================

// Indexed array (PHP 5.4+)
$fruits = ["Apple", "Banana", "Orange"];
print_r($fruits); // Output: [0=>"Apple", 1=>"Banana", 2=>"Orange"]

// Associative array
$person = ["name" => "John", "age" => 30, "city" => "NYC"];
print_r($person); // Output: ["name"=>"John", "age"=>30, "city"=>"NYC"]

// Mixed array
$mixed = [1, "hello", true, 3.14];
print_r($mixed); // Output: [0=>1, 1=>"hello", 2=>true, 3=>3.14]

// Nested array
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
echo $matrix[2][1] . PHP_EOL; // Output: 8

// Empty array
$empty = [];

// Array of arrays
$users = [
    ["name" => "John", "email" => "john@test.com"],
    ["name" => "Jane", "email" => "jane@test.com"]
];
echo $users[1]["name"] . PHP_EOL; // Output: Jane
?>
```
