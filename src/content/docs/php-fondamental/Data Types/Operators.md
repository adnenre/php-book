---
title: Operators
sidebar:
  order: 18
  label: 18. Operators
---

# PHP Operators

Operators are symbols that perform operations on variables and values. Here's a comprehensive guide with examples you'll actually use.

### Arithmetic Operators

Basic math operations: `+ - * / % **`

```php
<?php
$a = 10;
$b = 3;

echo "a = $a, b = $b\n\n";

// Basic arithmetic
echo "Addition: " . ($a + $b) . "\n";        // 13
echo "Subtraction: " . ($a - $b) . "\n";      // 7
echo "Multiplication: " . ($a * $b) . "\n";    // 30
echo "Division: " . ($a / $b) . "\n";         // 3.3333
echo "Modulo (remainder): " . ($a % $b) . "\n"; // 1
echo "Exponentiation: " . ($a ** $b) . "\n";   // 1000 (10³)

// Practical examples
$price = 100;
$tax = 0.08;
$total = $price + ($price * $tax);
echo "Total with tax: $$total\n"; // $108

// Even/odd check
$number = 7;
if ($number % 2 == 0) {
    echo "$number is even\n";
} else {
    echo "$number is odd\n"; // 7 is odd
}

// Minute to hours conversion
$minutes = 135;
$hours = floor($minutes / 60);
$remaining_minutes = $minutes % 60;
echo "$minutes minutes = {$hours}h {$remaining_minutes}m\n"; // 2h 15m

```

### Assignment Operators

Assign values to variables: = += -= \*= /= %= \*\*=

```php
<?php
// Basic assignment
$x = 5;
$name = "John";
echo "x = $x, name = $name\n";

// Combined assignment operators
$num = 10;

$num += 5;  // Same as: $num = $num + 5
echo "After += 5: $num\n"; // 15

$num -= 3;  // Same as: $num = $num - 3
echo "After -= 3: $num\n"; // 12

$num *= 2;  // Same as: $num = $num * 2
echo "After *= 2: $num\n"; // 24

$num /= 4;  // Same as: $num = $num / 4
echo "After /= 4: $num\n"; // 6

$num %= 4;  // Same as: $num = $num % 4
echo "After %= 4: $num\n"; // 2

$num **= 3; // Same as: $num = $num ** 3
echo "After **= 3: $num\n"; // 8

// String assignment
$text = "Hello";
$text .= " World";  // Same as: $text = $text . " World"
echo $text . "\n";  // Hello World

// Practical shopping cart example
$cart_total = 0;
$cart_total += 29.99;  // Add item
$cart_total += 49.99;  // Add another
$cart_total -= 10;      // Apply discount
echo "Cart total: \$$cart_total\n"; // $69.98

```

### Comparison Operators

Compare Operators: == === != !== < > <= >=

```php
<?php
$a = 5;
$b = "5";
$c = 10;

echo "a = $a (int), b = '$b' (string), c = $c (int)\n\n";

// Loose vs strict comparison
echo "Loose equal (==): ";
var_dump($a == $b);   // true (values are the same)

echo "Strict equal (===): ";
var_dump($a === $b);  // false (different types)

echo "Loose not equal (!=): ";
var_dump($a != $c);   // true

echo "Strict not equal (!==): ";
var_dump($a !== $b);  // true

// Greater/less than
echo "Greater than (>): ";
var_dump($a > 3);     // true

echo "Less than (<): ";
var_dump($a < 3);     // false

echo "Greater or equal (>=): ";
var_dump($a >= 5);    // true

echo "Less or equal (<=): ";
var_dump($a <= 4);    // false

// Practical validation
$age = 25;
$has_license = true;

if ($age >= 18 && $has_license) {
    echo "You can drive!\n";
}

// String comparison (alphabetical)
echo "Apple" < "Banana"; // true (A comes before B)

// Null checks
$value = null;
if ($value == null) echo "Value is null\n";
if ($value === null) echo "Value is strictly null\n";

```

### Increment/Decrement Operators

Add or subtract 1: ++$x $x++ --$x $x--

```php
<?php
// Pre-increment (++$x): increment then use
$x = 5;
echo "Starting x = $x\n";
echo "Pre-increment: " . ++$x . "\n"; // 6 (incremented first)
echo "After pre-increment: $x\n";      // 6

echo "---\n";

// Post-increment ($x++): use then increment
$y = 5;
echo "Starting y = $y\n";
echo "Post-increment: " . $y++ . "\n"; // 5 (original value used)
echo "After post-increment: $y\n";      // 6

echo "---\n";

// Decrement (same concept)
$z = 5;
echo "Pre-decrement: " . --$z . "\n"; // 4
echo "Post-decrement: " . $z-- . "\n"; // 4 (then becomes 3)
echo "Final value: $z\n";               // 3

// Practical loop example
echo "\nCounting to 5:\n";
for ($i = 1; $i <= 5; $i++) {  // Post-increment in loop
    echo "$i ";
}
echo "\n";

// Array iteration
$fruits = ["apple", "banana", "orange"];
$index = 0;
while ($index < count($fruits)) {
    echo $fruits[$index++] . "\n"; // Post-increment as index
}

```

### Logical Operators

Boolean logic: && and || or ! xor

```php
<?php
$is_logged_in = true;
$is_admin = false;
$has_permission = true;

// AND (&& or and)
if ($is_logged_in && $is_admin) {
    echo "Admin access granted\n";
} else {
    echo "Admin access denied\n"; // This runs
}

// OR (|| or or)
if ($is_admin || $has_permission) {
    echo "Access granted (admin or permission)\n"; // This runs
}

// NOT (!)
if (!$is_admin) {
    echo "User is not an admin\n"; // This runs
}

// XOR (true if exactly one is true)
$feature_a = true;
$feature_b = false;
if ($feature_a xor $feature_b) {
    echo "Exactly one feature is enabled\n"; // This runs
}

// Combined logic
$age = 22;
$has_ticket = true;
$is_vip = false;

if (($age >= 18 && $has_ticket) || $is_vip) {
    echo "Welcome to the concert!\n"; // This runs
}

// Short-circuit evaluation
$result = $is_admin && someExpensiveFunction(); // Won't call if $is_admin false

// Practical form validation
$email = "user@example.com";
$password = "secret123";
$remember = true;

if ($email && $password) {  // Check if both exist
    if (strlen($password) >= 8 && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Valid login credentials\n";
    }
}

```

### String Operators

String concatenation: . and .=

```php
<?php
// Concatenation operator (.)
$first_name = "John";
$last_name = "Doe";
$full_name = $first_name . " " . $last_name;
echo $full_name . "\n"; // John Doe

// Combining strings and numbers
$age = 30;
$message = $full_name . " is " . $age . " years old";
echo $message . "\n"; // John Doe is 30 years old

// Concatenation assignment (.=)
$text = "Hello";
$text .= " World";
$text .= "!";
echo $text . "\n"; // Hello World!

// Building HTML
$html = "<div class='user'>\n";
$html .= "  <h3>" . $full_name . "</h3>\n";
$html .= "  <p>Age: " . $age . "</p>\n";
$html .= "</div>";
echo $html;

// Building SQL query (careful with SQL injection!)
$table = "users";
$id = 5;
$sql = "SELECT * FROM " . $table . " WHERE id = " . $id;
echo $sql . "\n"; // SELECT * FROM users WHERE id = 5

// Multi-line string with concatenation
$long_text = "This is a very long string that we " .
             "want to break across multiple lines " .
             "for better readability in code.";
echo $long_text . "\n";

```

### Array Operators

Compare and combine arrays: + == === != <> !==

```php
<?php
$a = ["a" => 1, "b" => 2];
$b = ["b" => 3, "c" => 4];
$c = ["a" => 1, "b" => 2];

echo "Array a: "; print_r($a);
echo "Array b: "; print_r($b);
echo "Array c: "; print_r($c);

// Union (+): combines arrays (keeps keys from first if conflict)
$union = $a + $b;
echo "\nUnion (\$a + \$b): ";
print_r($union); // ["a" => 1, "b" => 2, "c" => 4]

// Equality (==): same key/value pairs
echo "\n\$a == \$c: ";
var_dump($a == $c);  // true

echo "\$a == \$b: ";
var_dump($a == $b);  // false

// Identity (===): same pairs and same order
$d = ["b" => 2, "a" => 1];  // Different order
echo "\n\$a === \$c: ";
var_dump($a === $c); // true (same order)

echo "\$a === \$d: ";
var_dump($a === $d); // false (different order)

// Inequality (!= or <>)
echo "\n\$a != \$b: ";
var_dump($a != $b);  // true

// Practical merging with union vs array_merge
$defaults = ["theme" => "light", "lang" => "en", "cache" => true];
$user_prefs = ["theme" => "dark", "notifications" => true];

// Union preserves defaults (keeps existing keys)
$config = $defaults + $user_prefs;
echo "\nUnion config: ";
print_r($config); // theme stays "light"

// array_merge overwrites later values
$merged = array_merge($defaults, $user_prefs);
echo "Array merge: ";
print_r($merged); // theme becomes "dark"

```

### Null Coalescing Operator

Returns first operand if it exists and is not null, otherwise second operand.

```php
<?php
// Basic usage
$username = $_GET['user'] ?? 'guest';
echo "Username: $username\n"; // 'guest' if no 'user' in URL

// Chaining
$a = null;
$b = null;
$c = "hello";
$result = $a ?? $b ?? $c ?? "default";
echo $result . "\n"; // hello

// Practical examples

// 1. Form input with defaults
$name = $_POST['name'] ?? $_GET['name'] ?? 'Anonymous';
echo "Name: $name\n";

// 2. Configuration with fallbacks
$config = [
    'database' => [
        'host' => 'localhost'
    ]
];

$host = $config['database']['host'] ?? '127.0.0.1';
$port = $config['database']['port'] ?? 3306;
$user = $config['database']['user'] ?? 'root';

echo "Host: $host, Port: $port, User: $user\n";

// 3. Safe array access
$data = ['items' => [1, 2, 3]];
$firstItem = $data['items'][0] ?? null;
$missingItem = $data['items'][5] ?? 'Not found';

echo "First item: " . ($firstItem ?? 'none') . "\n";
echo "Missing item: $missingItem\n";

// 4. Function returns with fallback
function getUserPreferences($userId) {
    // Simulate database lookup
    return $userId === 1 ? ['theme' => 'dark'] : null;
}

$prefs = getUserPreferences(2) ?? ['theme' => 'light'];
echo "Theme: " . $prefs['theme'] . "\n"; // light

// 5. Nested object access (PHP 8+)
class User {
    public $profile;
}

$user = new User();
// $user->profile = new Profile(); // Commented out
$bio = $user->profile->bio ?? 'No bio available';
echo "Bio: $bio\n"; // No bio available

// Compare with ternary (requires isset check)
$old_way = isset($_GET['user']) ? $_GET['user'] : 'guest';
$new_way = $_GET['user'] ?? 'guest'; // Much cleaner!

```

### Spaceship Operator

Three-way comparison: returns -1, 0, or 1

```php
<?php
// Basic comparisons
echo "5 <=> 5 = " . (5 <=> 5) . "\n";   // 0 (equal)
echo "5 <=> 3 = " . (5 <=> 3) . "\n";   // 1 (left > right)
echo "3 <=> 5 = " . (3 <=> 5) . "\n";   // -1 (left < right)

// String comparison (alphabetical)
echo "\"apple\" <=> \"banana\" = " . ("apple" <=> "banana") . "\n";  // -1
echo \"banana\" <=> \"apple\" = " . ("banana" <=> "apple") . "\n";  // 1
echo \"apple\" <=> \"apple\" = " . ("apple" <=> "apple") . "\n";    // 0

// Sorting with spaceship
$numbers = [5, 2, 8, 1, 9];
usort($numbers, function($a, $b) {
    return $a <=> $b;  // Ascending
});
echo "Sorted ascending: " . implode(", ", $numbers) . "\n";

usort($numbers, function($a, $b) {
    return $b <=> $a;  // Descending (swap $a and $b)
});
echo "Sorted descending: " . implode(", ", $numbers) . "\n";

// Sorting associative arrays
$users = [
    ['name' => 'John', 'age' => 30],
    ['name' => 'Alice', 'age' => 25],
    ['name' => 'Bob', 'age' => 35]
];

// Sort by age
usort($users, function($a, $b) {
    return $a['age'] <=> $b['age'];
});
echo "\nSorted by age:\n";
foreach ($users as $user) {
    echo "  {$user['name']}: {$user['age']}\n";
}

// Sort by name
usort($users, function($a, $b) {
    return $a['name'] <=> $b['name'];
});
echo "\nSorted by name:\n";
foreach ($users as $user) {
    echo "  {$user['name']}: {$user['age']}\n";
}

// Multiple criteria sorting
$products = [
    ['category' => 'electronics', 'price' => 300],
    ['category' => 'books', 'price' => 15],
    ['category' => 'electronics', 'price' => 100],
    ['category' => 'books', 'price' => 25]
];

// Sort by category, then by price
usort($products, function($a, $b) {
    $categoryCompare = $a['category'] <=> $b['category'];
    if ($categoryCompare !== 0) {
        return $categoryCompare;  // Different categories
    }
    return $a['price'] <=> $b['price'];  // Same category, sort by price
});

echo "\nProducts sorted by category then price:\n";
foreach ($products as $p) {
    echo "  {$p['category']}: \${$p['price']}\n";
}

```

## Complete Operators Table

| Operator     | Type                       | Example                   | Result                                        |
| ------------ | -------------------------- | ------------------------- | --------------------------------------------- |
| `+`          | Arithmetic                 | `5 + 3`                   | `8`                                           |
| `-`          | Arithmetic                 | `5 - 3`                   | `2`                                           |
| `*`          | Arithmetic                 | `5 * 3`                   | `15`                                          |
| `/`          | Arithmetic                 | `6 / 3`                   | `2`                                           |
| `%`          | Arithmetic                 | `5 % 2`                   | `1`                                           |
| `**`         | Arithmetic                 | `2 ** 3`                  | `8`                                           |
| `=`          | Assignment                 | `$x = 5`                  | `5`                                           |
| `+=`         | Assignment                 | `$x += 2`                 | `$x = $x + 2`                                 |
| `-=`         | Assignment                 | `$x -= 2`                 | `$x = $x - 2`                                 |
| `*=`         | Assignment                 | `$x *= 2`                 | `$x = $x * 2`                                 |
| `/=`         | Assignment                 | `$x /= 2`                 | `$x = $x / 2`                                 |
| `%=`         | Assignment                 | `$x %= 2`                 | `$x = $x % 2`                                 |
| `**=`        | Assignment                 | `$x **= 2`                | `$x = $x ** 2`                                |
| `.=`         | String                     | `$s .= "hi"`              | `$s = $s . "hi"`                              |
| `==`         | Comparison                 | `5 == "5"`                | `true`                                        |
| `===`        | Comparison                 | `5 === "5"`               | `false`                                       |
| `!=`         | Comparison                 | `5 != 3`                  | `true`                                        |
| `<>`         | Comparison                 | `5 <> 3`                  | `true` (same as `!=`)                         |
| `!==`        | Comparison                 | `5 !== "5"`               | `true`                                        |
| `>`          | Comparison                 | `5 > 3`                   | `true`                                        |
| `<`          | Comparison                 | `5 < 3`                   | `false`                                       |
| `>=`         | Comparison                 | `5 >= 5`                  | `true`                                        |
| `<=`         | Comparison                 | `5 <= 3`                  | `false`                                       |
| `<=>`        | Comparison (Spaceship)     | `5 <=> 3`                 | `1` (5 > 3)                                   |
| `<=>`        | Comparison (Spaceship)     | `3 <=> 5`                 | `-1` (3 < 5)                                  |
| `<=>`        | Comparison (Spaceship)     | `5 <=> 5`                 | `0` (equal)                                   |
| `++$x`       | Increment                  | `++$x`                    | Increment then use                            |
| `$x++`       | Increment                  | `$x++`                    | Use then increment                            |
| `--$x`       | Decrement                  | `--$x`                    | Decrement then use                            |
| `$x--`       | Decrement                  | `$x--`                    | Use then decrement                            |
| `&&`         | Logical                    | `$a && $b`                | `true` if both true                           |
| `and`        | Logical                    | `$a and $b`               | `true` if both true (lower precedence)        |
| `\|\|`       | Logical                    | `$a \|\| $b`              | `true` if either true                         |
| `or`         | Logical                    | `$a or $b`                | `true` if either true (lower precedence)      |
| `!`          | Logical                    | `!$a`                     | `true` if $a false                            |
| `xor`        | Logical                    | `$a xor $b`               | `true` if exactly one true                    |
| `+`          | Array                      | `$a + $b`                 | Union of arrays                               |
| `==`         | Array                      | `$a == $b`                | `true` if same key/value pairs                |
| `===`        | Array                      | `$a === $b`               | `true` if same order and types                |
| `!=`         | Array                      | `$a != $b`                | `true` if not equal                           |
| `<>`         | Array                      | `$a <> $b`                | `true` if not equal                           |
| `!==`        | Array                      | `$a !== $b`               | `true` if not identical                       |
| `??`         | Null Coalescing            | `$a ?? 'default'`         | `$a` if exists and not null, else `'default'` |
| `??=`        | Null Coalescing Assignment | `$a ??= 'default'`        | Assigns `'default'` to `$a` if `$a` is null   |
| `instanceof` | Type                       | `$obj instanceof MyClass` | `true` if object is instance of class         |
