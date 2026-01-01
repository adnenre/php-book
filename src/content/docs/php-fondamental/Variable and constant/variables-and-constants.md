---
title: Variables and constants
sidebar:
  order: 12
  label: 12. Variables and constants
---

### Variable Declaration

PHP variables are declared with a $ sign followed by the variable name. They are dynamically typed, meaning you don't need to declare the type explicitly.

**Basic variable declarations**

```shell
<?php

$integer = 42;                    // Integer
$float = 3.14;                     // Float (double)
$string = "Hello, World!";         // String
$boolean = true;                    // Boolean
$array = [1, 2, 3];                 // Array
$nullVar = null;                    // Null value

// Variable naming rules
$validName = "Starts with letter or underscore";
$_alsoValid = "Can start with underscore";
$camelCase = "Common convention";
$snake_case = "Also common";

// Invalid names (commented out because they'd cause errors)
// $123invalid = "Can't start with number";
// $invalid-name = "Hyphens not allowed";
// $invalid name = "Spaces not allowed";

// Displaying values
echo "Integer: " . $integer . "\n";
echo "Float: " . $float . "\n";
echo "String: " . $string . "\n";
echo "Boolean: " . ($boolean ? 'true' : 'false') . "\n";
echo "Array first element: " . $array[0] . "\n";
echo "Null variable: " . ($nullVar ?? 'is null') . "\n";

```

### Variable Scope

Scope refers to the context where a variable is accessible. PHP has three main variable scopes.

**Global Scope**
Variables declared outside any function or class have global scope.

```shell
<?php
// Global variable
$siteName = "MyPHPWebsite";
$counter = 0;
$user = "John Doe";

function testGlobal() {
    // This will NOT work - $siteName is not accessible here
    // echo $siteName; // Would cause an error

    // Correct way: use 'global' keyword
    global $siteName;
    echo "Inside function: " . $siteName . "\n";

    // Alternative: using $GLOBALS array
    echo "Using GLOBALS: " . $GLOBALS['user'] . "\n";

    // Modifying global variable
    global $counter;
    $counter++;
}

testGlobal();
echo "Counter after function call: " . $counter . "\n";

```

**Local Scope**
Variables declared inside a function are local to that function.

```shell
<?php
function calculateTotal() {
    // Local variables - only accessible inside this function
    $price = 100;
    $tax = 0.2;
    $total = $price * (1 + $tax);

    echo "Local price: " . $price . "\n";
    echo "Local total: " . $total . "\n";

    return $total;
}

$result = calculateTotal();
echo "Returned value: " . $result . "\n";

// These would cause errors - variables don't exist here
// echo $price; // Undefined variable
// echo $tax;   // Undefined variable

// Local variables with same name don't conflict
function anotherFunction() {
    $price = 500; // Different from previous $price
    echo "Another local price: " . $price . "\n";
}
anotherFunction();
```

**Static Scope**
Static variables retain their value between function calls.

```shell
<?php
function counter() {
    // Static variable - persists between calls
    static $count = 0;

    // Regular local variable - resets each time
    $localCount = 0;

    $count++;
    $localCount++;

    echo "Static count: " . $count . " (persists)\n";
    echo "Local count: " . $localCount . " (resets)\n";

    return $count;
}

echo "First call:\n";
counter();

echo "\nSecond call:\n";
counter();

echo "\nThird call:\n";
counter();

// Practical example: generating unique IDs
function generateId() {
    static $id = 1000;
    return $id++;
}

echo "\nGenerated IDs:\n";
echo generateId() . "\n"; // 1000
echo generateId() . "\n"; // 1001
echo generateId() . "\n"; // 1002
```

### Constants

Constants are like variables but cannot be changed once defined.

**Defining Constants**

```shell
<?php
// Using define() function (runtime)
define("SITE_NAME", "MyPHPWebsite");
define("MAX_USERS", 100);
define("VERSION", "1.0.0");
define("DEBUG_MODE", true);

// Using const keyword (compile-time)
const API_KEY = "abc123xyz";
const DEFAULT_LANGUAGE = "en";
const SUPPORTED_FORMATS = ["jpg", "png", "gif"];

// Accessing constants
echo "Site name: " . SITE_NAME . "\n";
echo "Max users: " . MAX_USERS . "\n";
echo "API Key: " . API_KEY . "\n";

// Constants are case-sensitive by default
define("GREETING", "Hello", true); // Case-insensitive (not recommended)
echo greeting . "\n"; // Works, but not recommended

// Checking if constant exists
if (defined("SITE_NAME")) {
    echo "Constant SITE_NAME is defined\n";
}

```

**Magic Constants**
PHP provides several predefined constants that change based on where they're used.

```shell
<?php
// Magic constants example
echo "Current file: " . __FILE__ . "\n";
echo "Current line: " . __LINE__ . "\n";
echo "Current directory: " . __DIR__ . "\n";

function testFunction() {
    echo "Function name: " . __FUNCTION__ . "\n";
}
testFunction();

class TestClass {
    public function showConstants() {
        echo "Class name: " . __CLASS__ . "\n";
        echo "Method name: " . __METHOD__ . "\n";
        echo "Namespace: " . __NAMESPACE__ . "\n";
    }
}

$obj = new TestClass();
$obj->showConstants();
```

**Class Scope Variables**
Variables within classes have additional scope modifiers.

```shell
<?php
class UserManager {
    // Class properties with different visibility
    public $name = "Public - accessible anywhere";
    private $password = "Private - only within class";
    protected $email = "Protected - class and inheritance";

    // Class constant
    const MAX_LOGIN_ATTEMPTS = 3;

    // Static property
    public static $totalUsers = 0;

    public function __construct($name) {
        $this->name = $name;
        self::$totalUsers++;

        // Local variable within method
        $timestamp = date('Y-m-d H:i:s');
        echo "User created at: " . $timestamp . "\n";
    }

    public function displayInfo() {
        echo "Name: " . $this->name . "\n";
        // Can't access $password directly outside class

        // Accessing class constant
        echo "Max login attempts: " . self::MAX_LOGIN_ATTEMPTS . "\n";

        // Local variable
        $info = "User information display";
        echo $info . "\n";
    }

    public static function getTotalUsers() {
        return self::$totalUsers;
    }
}

// Using the class
$user1 = new UserManager("Alice");
$user2 = new UserManager("Bob");

$user1->displayInfo();
echo "Total users: " . UserManager::getTotalUsers() . "\n";
echo "Class constant: " . UserManager::MAX_LOGIN_ATTEMPTS . "\n";

```

**Variable Variables**
PHP allows dynamic variable names (use with caution).

```shell
<?php
// Variable variables
$varName = "message";
$$varName = "Hello from dynamic variable!";

echo $message . "\n"; // Access via original name
echo ${$varName} . "\n"; // Access via variable variable

// Practical example
$color = "red";
$red = "#FF0000";
$blue = "#0000FF";

$selectedColor = "red";
echo "Color code for red: " . ${$selectedColor} . "\n";

// Array of variable names
$fields = ["name", "email", "phone"];
foreach ($fields as $field) {
    $$field = "Value for " . $field;
}
echo $name . "\n";
echo $email . "\n";

```

**Variable References**
References allow multiple variables to point to the same content.

```shell
<?php
// References example
$original = "Hello";
$reference =& $original; // Both point to same value

echo "Original: " . $original . "\n";
echo "Reference: " . $reference . "\n";

// Changing reference affects original
$reference = "World";
echo "After change:\n";
echo "Original: " . $original . "\n";
echo "Reference: " . $reference . "\n";

// Practical example with arrays
$data = [1, 2, 3];
foreach ($data as &$value) { // Reference in loop
    $value *= 2;
}
print_r($data); // [2, 4, 6]
```

**Best Practices**
Use meaningful variable names:

```shell
<?php
// Instead of:
$a = 25;
$b = true;

// Use:
$userAge = 25;
$isLoggedIn = true;
```
