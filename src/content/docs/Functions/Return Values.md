---
title: Return Values
sidebar:
  order: 24
  label: 24. Return Values
---

### Returning Values

Functions can return values using the `return` keyword. The function stops execution when `return` is called.

```php
<?php
function add($a, $b) {
    return $a + $b;
}
$result = add(5, 3);
echo $result; // 8

function getUser() {
    return [
        'name' => 'John',
        'email' => 'john@example.com'
    ];
}
$user = getUser();
echo $user['name']; // John

```

### Returning References

Return a reference to a variable instead of a copy. Use & in both function definition and assignment

```php
<?php
$colors = ["red", "green", "blue"];

function &getColor(&$array, $index) {
    return $array[$index]; // Return as reference
}

$ref = &getColor($colors, 1); // Get reference to 'green'
$ref = "yellow"; // Modifies the original array

print_r($colors); // ["red", "yellow", "blue"]

```

### Void Return Type

Function that does not return any value. The void return type ensures nothing is returned.

```php
<?php
function logMessage($message): void {
    echo "[LOG] " . $message . "\n";
    // No return statement needed
    // return; // This is allowed (empty return)
    // return $message; // ERROR: Cannot return a value
}

logMessage("User logged in"); // [LOG] User logged in

function sendEmail($to, $subject): void {
    // Mail sending code
    echo "Email sent to $to\n";
    // Function completes without returning anything
}
sendEmail("john@example.com", "Welcome");

```

### Never Return Type (PHP 8.1+)

The `never` return type indicates that a function will **never return** - it either exits the script, throws an exception, or runs indefinitely.

```php
<?php
// 1. Redirect - exits script
function redirect($url): never {
    header("Location: $url");
    exit;
}

// 2. Throw exception
function abort($message): never {
    throw new Exception($message);
}

// 3. Die/dump function
function dd($data): never {
    var_dump($data);
    die;
}

// 4. Infinite loop
function runForever(): never {
    while (true) {
        echo "Running...\n";
        sleep(1);
    }
}

// Usage
if (!isset($_SESSION['user'])) {
    // redirect('/login'); // Would exit
}

// abort('Error'); // Would throw exception
// dd($variable);  // Would dump and die
// runForever();   // Would run infinitely

```
