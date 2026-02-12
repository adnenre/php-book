---
title: Primitive Types
sidebar:
    order: 10
    label: 10. Primitive Types
---

A primitive data type refers to a basic data type that is built directly into the language. Unlike objects, primitive types in PHP are not reference types and generally represent simple values.

### 1 - boolean

```shell
<?php

// The boolean data type stores a binary value, either true or false

$isReady = true;
$isComplete = false;
```

### 2 - integer

```shell
<?php


// Integer data type represents whole numbers

$decimal = 10;
$negative = -5;
$hexadecimal = 0xa00d;    // Hexadecimal starts with 0x
$octal = 0o633;           // Octal starts with 0o (PHP 8.1+)
$binary = 0b1010;         // Binary starts with 0b
```

### 3 - String

```shell
<?php

// The string primitive type stores textual data
$x = 'x';
$y = "y";

// Strings can span multiple lines using heredoc or nowdoc syntax
$sentence = <<<EOT
xxx,
   yyy
EOT;

// Or with double quotes for variable interpolation
$multiline = "This is a
multi-line string";
```

## 4 - float (double)

```shell
<?php

// Float data type represents floating-point numbers

$float = 3.14;
$scientific = 1.2e3;      // 1200
$negativeFloat = -2.5;
```

### 5 - Array

```shell
<?php

// Arrays can store multiple values of different types


// Indexed arrays
$stringArray = ['a', 'b'];
$mixedArray = ['a', 1, 'b', 2];

// Associative arrays
$assocArray = [
    'name' => 'John',
    'age' => 30
];

// Using array() syntax (older style)
$oldStyleArray = array('a', 'b', 'c');

// Multi-dimensional arrays
$multiDim = [
    [1, 2, 3],
    ['a', 'b', 'c']
];
```

### 6 - Null

```shell
<?php

// null represents a variable with no value

$nullVar = null;
```

### Type checking and conversion

```shell
<?php
// Type checking functions

is_string($x);      // true
is_int($decimal);   // true
is_float($float);   // true
is_bool($isReady);  // true
is_array($stringArray); // true
is_null($nullVar);  // true

// Type conversion
$stringNumber = "123";
$intValue = (int) $stringNumber;    // Cast to integer
$floatValue = (float) $stringNumber; // Cast to float
$stringValue = (string) $decimal;   // Cast to string
$boolValue = (bool) $decimal;       // Cast to boolean

// Strict comparison
$strictCheck = 123 === "123";  // false (different types)
```
