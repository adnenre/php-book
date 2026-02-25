---
title: PHP Fondametal
sidebar:
  order: 8
  label: 8. PHP Fondametal
---

## 1. Basic Syntax

PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. The basic syntax follows C-style conventions, making it familiar to developers with experience in C, Java, or JavaScript.

PHP code is executed on the server, and the result is sent to the client's browser as plain HTML. This allows for dynamic content generation, database interactions, and session management.

## 2. Tags

PHP code is enclosed within special tags that tell the server to parse the content as PHP code rather than plain text.

**Standard Tags (Recommended)**

```php
<?php
    // PHP code goes here
    echo "Hello, World!";
?>

```

**Short Tags (Not Always Available)**

```php
<?
    // PHP code (requires short_open_tag enabled in php.ini)
    echo "Short tag example";
?>
```

**Echo Tags**

```php
<?= "This is shorthand for echo" ?>

```

**ASP Style Tags (Deprecated)**

```php

<%
    // ASP style (rarely used, requires configuration)
    echo "ASP style example";
%>
```

Best Practice: Always use the standard <?php ?> tags for maximum compatibility across different server configurations.

## 3. Statements and Semicolons

PHP statements are instructions that perform actions. Each statement typically ends with a semicolon (;).

**Examples:**

```php
<?php
    echo "Hello World";  // Statement 1
    $name = "John";      // Statement 2
    echo $name;          // Statement 3
?>

```

### Important Notes:

The semicolon marks the end of a statement

Multiple statements can appear on one line (though not recommended for readability)

The closing tag (?>) automatically implies a semicolon for the last statement

Forgetting semicolons causes parse errors

Example of Error:

```php
<?php
    echo "Hello"  // Missing semicolon - will cause error
    echo "World";
?>
```

## 4. Comments

Comments are non-executable text that helps document code. PHP supports several comment styles.

**Single-line Comments:**

```php
<?php
    // This is a single-line comment
    # This is also a single-line comment (shell style)

    echo "Hello"; // Comment after code
?>
```

**Multi-line Comments:**

```php
<?php
    /*
     * This is a multi-line comment
     * It can span multiple lines
     * Useful for longer explanations
     */

    function calculate() {
        /* Temporary debug comment
           echo "Debugging";
           return $result;
        */
    }
?>
```

**DocBlock Comments (for documentation):**

```php
<?php
    /**
     * Calculates the sum of two numbers
     *
     * @param int $a First number
     * @param int $b Second number
     * @return int Sum of $a and $b
     */
    function add($a, $b) {
        return $a + $b;
    }
?>
```

## 5. Variables and Constants

**Variable Declaration**
Variables in PHP start with a dollar sign ($) followed by the variable name.

```php
<?php
    $name = "Alice";      // String variable
    $age = 30;            // Integer variable
    $price = 19.99;       // Float variable
    $is_active = true;    // Boolean variable

    // Variable names are case-sensitive
    $Name = "Bob";  // Different from $name

    // Valid variable names
    $user1 = "John";
    $_private = "hidden";
    $camelCase = "valid";

    // Invalid variable names
    // $1stPlace = "first";  // Cannot start with number
    // $first-name = "test"; // Cannot use hyphens
?>
```

**Constants**

Constants are like variables but cannot be changed once defined.

```php
<?php
    // Defining constants
    define("SITE_NAME", "My Website");
    define("MAX_USERS", 100);
    define("PI", 3.14159);

    // Using constants (no $ sign)
    echo SITE_NAME;

    // PHP 7+ syntax
    const DATABASE = "mysql";
    const VERSION = 2.0;

    // Magic constants (predefined by PHP)
    echo __LINE__;     // Current line number
    echo __FILE__;     // Full path and filename
    echo __DIR__;      // Directory of the file
?>
```

## 6. Variable Scope

Variable scope determines where a variable can be accessed within your code.

**Local Scope**

Variables declared within a function have local scope.

```php
<?php
    function testFunction() {
        $localVar = "I'm local";  // Only accessible inside this function
        echo $localVar;
    }

    testFunction();  // Outputs: I'm local
    // echo $localVar;  // Error: undefined variable
?>
```

**Global Scope**

Variables declared outside any function have global scope.

```php
<?php
    $globalVar = "I'm global";  // Accessible anywhere

    function showGlobal() {
        // Cannot access $globalVar directly here
        // Need to use global keyword or $GLOBALS array

        global $globalVar;  // Import global variable
        echo $globalVar;

        // OR using $GLOBALS array
        echo $GLOBALS['globalVar'];
    }

    showGlobal();  // Outputs: I'm global
?>
```

**Static Scope**

Static variables retain their value between function calls.

```php
<?php
    function counter() {
        static $count = 0;  // Static variable
        $count++;
        echo "This function has been called $count times<br>";
    }

    counter();  // Outputs: This function has been called 1 times
    counter();  // Outputs: This function has been called 2 times
    counter();  // Outputs: This function has been called 3 times

    // Each call remembers the previous value of $count
?>

```

**Scope Example Summary:**

```php
<?php
    $global = "Global variable";

    function testScopes() {
        $local = "Local variable";
        static $static = 0;
        global $global;

        $static++;

        echo "Inside function:<br>";
        echo "- Local: $local<br>";
        echo "- Static: $static<br>";
        echo "- Global: $global<br>";

        // $GLOBALS example
        $GLOBALS['global'] = "Modified from inside function";
    }

    echo "Before function: $global<br>";  // Global variable

    testScopes();
    // Outputs:
    // Inside function:
    // - Local: Local variable
    // - Static: 1
    // - Global: Global variable

    testScopes();
    // Outputs:
    // Inside function:
    // - Local: Local variable
    // - Static: 2
    // - Global: Modified from inside function

    echo "After function: $global<br>";  // Modified from inside function
    // echo $local;  // Error: undefined variable
    // echo $static; // Error: undefined variable
?>
```
