---
title: Array Basics
sidebar:
  order: 28
  label: 28. Array Basics
---

### Indexed Arrays

```php
<?php
// ============================================
// PHP INDEXED ARRAY COMPREHENSIVE GUIDE
// ============================================
$fruits = array("Apple", "Banana", "Orange", "Mango");
echo $fruits[0] . PHP_EOL  ;// Output: Apple

```

### Associative Arrays

```php
<?php
// ============================================
// PHP ASSOCIATIVE ARRAY EXAMPLE
// ============================================

$person = [
    "name" => "John Doe",
    "age" => 30,
    "city" => "New York"
];

echo $person["name"] . PHP_EOL; // Output: John Doe
echo $person["age"] . PHP_EOL;  // Output: 30
echo $person["city"] . PHP_EOL; // Output: New York

// Alternative syntax
$car = array(
    "brand" => "Toyota",
    "model" => "Camry",
    "year" => 2024
);

echo $car["brand"] . PHP_EOL; // Output: Toyota
?>
```

### Multidimensional Arrays

```php
<?php
// ============================================
// PHP MULTIDIMENSIONAL ARRAY EXAMPLE
// ============================================

// 2D Indexed Array
$matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

echo $matrix[0][0] . PHP_EOL; // Output: 1
echo $matrix[1][2] . PHP_EOL; // Output: 6

// Associative Multidimensional Array
$students = [
    "student1" => [
        "name" => "Alice",
        "grade" => "A"
    ],
    "student2" => [
        "name" => "Bob",
        "grade" => "B"
    ]
];

echo $students["student1"]["name"] . PHP_EOL;  // Output: Alice
echo $students["student2"]["grade"] . PHP_EOL; // Output: B

// Mixed Multidimensional Array
$company = [
    "IT" => [
        ["name" => "John", "role" => "Developer"],
        ["name" => "Jane", "role" => "Designer"]
    ]
];

echo $company["IT"][0]["name"] . PHP_EOL; // Output: John
echo $company["IT"][1]["role"] . PHP_EOL; // Output: John
?>
```
