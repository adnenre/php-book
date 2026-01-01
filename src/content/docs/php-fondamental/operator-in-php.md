---
title: Operators in PHP
sidebar:
    order: 11
    label: 11. Operators in PHP
---

### Arithmetic Operators

Used for basic mathematical operations:

```shell
<?php
$a = 10;
$b = 3;

echo $a + $b;  // 13 - Addition
echo $a - $b;  // 7  - Subtraction
echo $a * $b;  // 30 - Multiplication
echo $a / $b;  // 3.333... - Division
echo $a % $b;  // 1  - Modulus (remainder)
echo $a ** $b; // 1000 - Exponentiation (PHP 5.6+)
```

### Assignment Operators

Used to assign values to variables:

```shell
<?php
$x = 10;     // Basic assignment
$x += 5;     // $x = $x + 5 → 15
$x -= 3;     // $x = $x - 3 → 12
$x *= 2;     // $x = $x * 2 → 24
$x /= 4;     // $x = $x / 4 → 6
$x %= 5;     // $x = $x % 5 → 1
$x **= 2;    // $x = $x ** 2 → 1

```

### Comparison Operators

Used to compare two values:

```shell
<?php
$a = 5;
$b = "5";
$c = 10;

var_dump($a == $b);   // true - Equal (value)
var_dump($a === $b);  // false - Identical (value and type)
var_dump($a != $b);   // false - Not equal
var_dump($a !== $b);  // true - Not identical
var_dump($a < $c);    // true - Less than
var_dump($a > $c);    // false - Greater than
var_dump($a <= $c);   // true - Less than or equal to
var_dump($a >= $c);   // false - Greater than or equal to

// Spaceship operator (PHP 7+)
echo 1 <=> 1; // 0  - Equal
echo 1 <=> 2; // -1 - Less than
echo 2 <=> 1; // 1  - Greater than

```

### Logical Operators

Used to combine conditional statements:

```shell
<?php
$age = 25;
$hasLicense = true;

// AND, OR operators
if ($age >= 18 && $hasLicense) {
    echo "Can drive";
}

if ($age < 18 || $age > 65) {
    echo "Special age group";
}

// NOT operator
if (!$hasLicense) {
    echo "No driving license";
}

// Alternative syntax
if ($age >= 18 and $hasLicense) { } // AND
if ($age < 18 or $age > 65) { }     // OR
if ($age >= 18 xor $hasLicense) { } // XOR (exclusive OR)

```

### String Operators

Used for string manipulation:

```shell
<?php
$str1 = "Hello";
$str2 = "World";

// Concatenation
$greeting = $str1 . " " . $str2; // "Hello World"

// Concatenation assignment
$str1 .= " PHP"; // $str1 becomes "Hello PHP"
Increment/Decrement Operators
Used to increase or decrease values:
```

```shell
<?php
$x = 5;

echo ++$x; // 6 - Pre-increment
echo $x++; // 6 - Post-increment (then $x becomes 7)
echo --$x; // 6 - Pre-decrement
echo $x--; // 6 - Post-decrement (then $x becomes 5)

```

### Array Operators

Used to work with arrays:

```shell
<?php
$arr1 = [1, 2];
$arr2 = [3, 4];
$arr3 = [1, 2];

// Union
$union = $arr1 + $arr2; // [1, 2] (keys preserved)

// Equality
var_dump($arr1 == $arr3);  // true - Same key/value pairs
var_dump($arr1 === $arr3); // true - Same key/value pairs in same order
var_dump($arr1 != $arr2);  // true - Not equal
var_dump($arr1 !== $arr2); // true - Not identical

```

### Ternary Operator

Short conditional assignment:

```shell
<?php
$age = 20;
$status = ($age >= 18) ? "Adult" : "Minor";
echo $status; // "Adult"
```

### Shorthand ternary (PHP 5.3+)

```shell
$name = "";
$displayName = $name ?: "Guest"; // "Guest"
Null Coalescing Operator (PHP 7+)
Checks if value exists and is not null:
```

```shell
<?php
$username = $_GET['user'] ?? 'guest'; // If user doesn't exist, use 'guest'

// Null coalescing assignment (PHP 7.4+)
$array = [];
$array['key'] ??= 'default'; // Only sets if key doesn't exist

```

### Type Operators

Used for type checking:

```shell
<?php
class MyClass {}
$obj = new MyClass();

var_dump($obj instanceof MyClass); // true

class ParentClass {}
class ChildClass extends ParentClass {}
$child = new ChildClass();

var_dump($child instanceof ParentClass); // true

```

### Execution Operator

Executes shell commands:

```shell
<?php
$output = `ls -la`; // Backticks, not single quotes
echo $output;
```
