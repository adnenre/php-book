---
title: Scalar Types
sidebar:
  order: 14
  label: 14. Scalar Types
---

# PHP Data Types

PHP supports various data types. Here's a comprehensive guide with examples showing how each type works.

## Integer

Integers are whole numbers, positive or negative, without decimals.

```php
<?php
// Integer examples
$age = 25;                    // Positive integer
$temperature = -10;            // Negative integer
$hexadecimal = 0x1A;          // Hexadecimal (26 in decimal)
$octal = 012;                  // Octal (10 in decimal)
$binary = 0b1101;              // Binary (13 in decimal)

echo "Age: " . $age . "\n";
echo "Temperature: " . $temperature . "\n";
echo "Hexadecimal: " . $hexadecimal . "\n";

// Check if variable is integer
var_dump(is_int($age));        // bool(true)
var_dump(is_integer($age));    // bool(true)

// Integer limits
echo "PHP_INT_MAX: " . PHP_INT_MAX . "\n";     // Maximum integer size
echo "PHP_INT_MIN: " . PHP_INT_MIN . "\n";     // Minimum integer size
echo "PHP_INT_SIZE: " . PHP_INT_SIZE . " bytes\n";  // Integer size in bytes


// Output

Age: 25
Temperature: -10
Hexadecimal: 26
bool(true)
bool(true)
PHP_INT_MAX: 9223372036854775807
PHP_INT_MIN: -9223372036854775808
PHP_INT_SIZE: 8 bytes
```

## Float

```php
<?php
// Float examples
$price = 19.99;                // Standard float
$temperature = 98.6;           // Body temperature
$scientific = 1.2e3;           // 1.2 × 10³ = 1200
$small_number = 1.2e-3;        // 1.2 × 10⁻³ = 0.0012
$pi = 3.14159265359;           // Pi approximation

echo "Price: $" . $price . "\n";
echo "Scientific notation: " . $scientific . "\n";
echo "Pi to 11 decimals: " . $pi . "\n";

// Check if variable is float
var_dump(is_float($price));     // bool(true)
var_dump(is_double($price));     // bool(true)

// Float precision warning
$result = 0.1 + 0.2;            // Should be 0.3
echo "0.1 + 0.2 = " . $result . "\n";
echo "But actually: ";
var_dump($result === 0.3);       // bool(false) - precision issue!

// Better comparison
$epsilon = 0.00001;
if (abs($result - 0.3) < $epsilon) {
    echo "Values are close enough!\n";
}

// NaN and Infinity
$nan = acos(2);                  // acos(2) is NaN
$inf = log(0);                    // log(0) is -INF

var_dump(is_nan($nan));          // bool(true)
var_dump(is_infinite($inf));     // bool(true)


// Output
Price: $19.99
Scientific notation: 1200
Pi to 11 decimals: 3.14159265359
bool(true)
bool(true)
0.1 + 0.2 = 0.3
But actually: bool(false)
Values are close enough!
bool(true)
bool(true)
```

## String

```php
<?php
// String examples with different syntaxes
$single_quoted = 'Hello World';                    // Single quotes
$double_quoted = "Hello World";                    // Double quotes
$heredoc = <<<EOT
This is a heredoc string
It can span multiple lines
Without needing special escaping
EOT;

$nowdoc = <<<'EOD'
This is a nowdoc string
Similar to single-quoted strings
No parsing of variables inside
EOD;

// Variable interpolation
$name = "John";
$age = 30;

$interpolated = "Hello $name, you are $age years old";
$complex = "Hello {$name}, you will be " . ($age + 5) . " in 5 years";

echo $interpolated . "\n";
echo $complex . "\n";

// String functions
$text = "  PHP Programming  ";

echo "Length: " . strlen($text) . "\n";                    // String length
echo "Trimmed: '" . trim($text) . "'\n";                   // Remove whitespace
echo "Uppercase: " . strtoupper($text) . "\n";             // To uppercase
echo "Lowercase: " . strtolower($text) . "\n";             // To lowercase
echo "Replace: " . str_replace("PHP", "Python", $text) . "\n"; // Replace text
echo "Substring: " . substr($text, 2, 3) . "\n";          // Extract part of string

// String access
$str = "Hello";
echo "First character: " . $str[0] . "\n";                 // 'H'
echo "Last character: " . $str[-1] . "\n";                 // 'o' (PHP 7.1+)

// String concatenation
$firstName = "Jane";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;                   // Dot operator
echo "Full name: " . $fullName . "\n";

// Heredoc with variables
$item = "book";
$price = 15.99;
$order = <<<HTML
<div class="order">
    <h3>Your Order</h3>
    <p>Item: $item</p>
    <p>Price: \$$price</p>
</div>
HTML;

echo $order;


// Output
Hello John, you are 30 years old
Hello John, you will be 35 in 5 years
Length: 18
Trimmed: 'PHP Programming'
Uppercase:   PHP PROGRAMMING
Lowercase:   php programming
Replace:   Python Programming
Substring: PHP
First character: H
Last character: o
Full name: Jane Doe

<div class="order">
    <h3>Your Order</h3>
    <p>Item: book</p>
    <p>Price: $15.99</p>
</div>
```

## Boolean

```php
<?php
// Boolean examples
$is_active = true;
$is_deleted = false;

echo "Is active: " . ($is_active ? 'Yes' : 'No') . "\n";
echo "Is deleted: " . ($is_deleted ? 'Yes' : 'No') . "\n";

// Check if variable is boolean
var_dump(is_bool($is_active));     // bool(true)

// Values that evaluate to FALSE
$false_values = [
    false,      // Boolean false
    0,          // Integer zero
    0.0,        // Float zero
    "",         // Empty string
    "0",        // String "0"
    [],         // Empty array
    null,       // NULL
];

echo "\nValues that evaluate to false:\n";
foreach ($false_values as $value) {
    echo var_export($value, true) . " → " . ($value ? 'true' : 'false') . "\n";
}

// Boolean in conditions
$user_logged_in = true;
$has_permission = false;

if ($user_logged_in && $has_permission) {
    echo "Access granted\n";
} elseif ($user_logged_in && !$has_permission) {
    echo "Access denied: insufficient permissions\n";
} else {
    echo "Please log in\n";
}

// Boolean conversion
$truthy_values = [1, -1, "hello", [1], new stdClass()];
echo "\nTruthy values:\n";
foreach ($truthy_values as $value) {
    echo var_export($value, true) . " → " . (bool)$value . "\n";
}

// Practical example
function can_drive($age, $has_license) {
    return ($age >= 16) && $has_license;
}

$age = 18;
$has_license = true;

if (can_drive($age, $has_license)) {
    echo "\nYou can drive!\n";
} else {
    echo "\nYou cannot drive.\n";
}

// Boolean casting
$number = 42;
$string = "PHP";
$empty = "";

echo "\nCasting to boolean:\n";
echo "(bool) \$number: " . (bool)$number . "\n";     // 1 (true)
echo "(bool) \$string: " . (bool)$string . "\n";     // 1 (true)
echo "(bool) \$empty: " . (bool)$empty . "\n";       // 0 (false)


// Output
Is active: Yes
Is deleted: No
bool(true)

Values that evaluate to false:
false → false
0 → false
0.0 → false
'' → false
'0' → false
[] → false
NULL → false
Access denied: insufficient permissions

Truthy values:
1 → 1
-1 → 1
'hello' → 1
[1] → 1
stdClass::__set_state(array(
)) → 1

You can drive!

Casting to boolean:
(bool) $number: 1
(bool) $string: 1
(bool) $empty: 0
```
