---
title: Type System
sidebar:
  order: 17
  label: 17. Type System
---

# PHP Type System

PHP's type system has evolved significantly. This guide covers everything from traditional type juggling to modern type declarations.

### Type Declarations (Type Hints)

Type declarations specify the expected type of function parameters and return values.

```php
// file: type_declaration.php
<?php
// Basic type declarations
function greet(string $name, int $age): string {
    return "Hello $name, you are $age years old.";
}
echo greet("John", 30); // Hello John, you are 30 years old.

// Array type
function sumArray(array $numbers): float {
    return array_sum($numbers);
}
echo sumArray([1, 2, 3, 4, 5]); // 15

// Class type
class User {}
class Admin extends User {}

function register(User $user): string {
    return "User registered";
}
echo register(new Admin()); // User registered

// Nullable type
function findUser(?int $id): ?string {
    return $id === 1 ? "John" : null;
}
var_dump(findUser(1));  // string(4) "John"
var_dump(findUser(2));  // NULL

// Union type (PHP 8+)
function formatId(int|string $id): string {
    return "ID: $id";
}
echo formatId(100);     // ID: 100
echo formatId("ABC");   // ID: ABC

// Mixed type (PHP 8+)
function debug(mixed $value): void {
    echo gettype($value);
}
debug("hello"); // string
?>
```

### Strict Types

Strict types enforce exact type matching instead of automatic conversion.

```php
<?php
// file: strict.php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

// ✅ Works - exact types match
echo add(5, 3); // 8

// ❌ All throw TypeError
// add(5.5, 3);    // float not allowed
// add("5", 3);    // string not allowed
// add(true, 3);   // bool not allowed

function processString(string $text): string {
    return "Processing: $text";
}

// ✅ Works
echo processString("hello"); // Processing: hello

// ❌ Fails
// processString(123);     // TypeError
// processString(true);    // TypeError

// Without strict types (default behavior)
// file: weak.php
function multiply(int $a, int $b): int {
    return $a * $b;
}

// These all work without strict_types
echo multiply(5, 3);     // 15
echo multiply(5.5, 3);   // 15 (float converts to int)
echo multiply("5", 3);   // 15 (string converts to int)
?>
```

### Type Juggling

PHP automatically converts types based on context (automatic type conversion).

```php
<?php
// String to number in arithmetic
echo "10" + 5;        // 15 (string becomes int)
echo "10.5" + 5;      // 15.5 (string becomes float)
echo "10 apples" + 5; // 15 (Warning, but converts)
echo "apples 10" + 5; // 5 (Warning, converts to 0)

// Number to string in concatenation
echo "Count: " . 10;     // Count: 10
echo "Total: " . 5.5;    // Total: 5.5

// Boolean conversions
if ("hello") {           // Non-empty string = true
    echo "This runs";
}

if (0) {                 // Zero = false
    echo "This doesn't run";
}

// Comparison juggling
var_dump(1 == "1");      // true
var_dump(1 == true);     // true
var_dump(0 == false);    // true
var_dump("" == false);   // true
var_dump("123" == 123);  // true

// Logical context
$values = [
    "hello",  // truthy
    "",       // falsy
    5,        // truthy
    0,        // falsy
    [],       // falsy
    [1, 2]    // truthy
];

foreach ($values as $value) {
    if ($value) {
        echo var_export($value, true) . " is truthy\n";
    } else {
        echo var_export($value, true) . " is falsy\n";
    }
}

// String to number comparison
if ("10" > 5) {
    echo "10 is greater than 5\n"; // This runs
}

// Mixed type operations
echo 5 * "3";        // 15 (string to int)
echo 5 * "3.5";      // 17.5 (string to float)
echo 5 + true;       // 6 (true = 1)
echo 5 + false;      // 5 (false = 0)
echo "5" . 3;        // "53" (int to string)
?>
```

### Type Casting

Manual conversion of variables from one type to another.

```php
<?php
// (int) - cast to integer
$float = 10.75;
$int = (int) $float;
var_dump($int);      // int(10)

$string = "123";
$int = (int) $string;
var_dump($int);      // int(123)

$bool = true;
$int = (int) $bool;
var_dump($int);      // int(1)

// (float) / (double) - cast to float
$int = 5;
$float = (float) $int;
var_dump($float);    // float(5)

$string = "3.14";
$float = (float) $string;
var_dump($float);    // float(3.14)

// (string) - cast to string
$int = 100;
$string = (string) $int;
var_dump($string);   // string(3) "100"

$float = 3.14;
$string = (string) $float;
var_dump($string);   // string(4) "3.14"

$bool = true;
$string = (string) $bool;
var_dump($string);   // string(1) "1"

$bool = false;
$string = (string) $bool;
var_dump($string);   // string(0) ""

// (bool) - cast to boolean
$int = 5;
$bool = (bool) $int;
var_dump($bool);     // bool(true)

$int = 0;
$bool = (bool) $int;
var_dump($bool);     // bool(false)

$string = "hello";
$bool = (bool) $string;
var_dump($bool);     // bool(true)

$string = "";
$bool = (bool) $string;
var_dump($bool);     // bool(false)

$array = [1, 2, 3];
$bool = (bool) $array;
var_dump($bool);     // bool(true)

$array = [];
$bool = (bool) $array;
var_dump($bool);     // bool(false)

// (array) - cast to array
$int = 5;
$array = (array) $int;
print_r($array);     // [0 => 5]

$string = "hello";
$array = (array) $string;
print_r($array);     // [0 => "hello"]

$object = new stdClass();
$object->name = "John";
$array = (array) $object;
print_r($array);     // ["name" => "John"]

// (object) - cast to object
$int = 5;
$obj = (object) $int;
var_dump($obj);      // object(stdClass)#1 (1) { ["scalar"]=> int(5) }

$array = ["name" => "John", "age" => 30];
$obj = (object) $array;
echo $obj->name;     // John
echo $obj->age;      // 30

// Cast operators
$x = 5.7;
echo (int)$x;        // 5
echo intval($x);     // 5 (function alternative)

$y = "123";
echo (int)$y;        // 123
echo intval($y);     // 123

// settype() - changes original variable
$value = "123";
settype($value, "int");
var_dump($value);    // int(123)

$text = "3.14";
settype($text, "float");
var_dump($text);     // float(3.14)

// Practical casting examples
function processInput(mixed $data): array {
    // Ensure we always work with array
    return (array) $data;
}

$result = processInput("single");
print_r($result);    // [0 => "single"]

// Safe integer conversion
$userInput = "123";
$userId = (int) $userInput;  // 123

// Boolean casting for flags
$flag = "true";
$enabled = (bool) $flag;     // true (non-empty string)

// Float conversion for prices
$price = "19.99";
$amount = (float) $price;    // 19.99
?>
```
