---
title: Defining Function
sidebar:
  order: 22
  label: 22. Defining Function
---

### Defining Functions

Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and make programs easier to maintain.

```php
<?php
// Basic function definition
function sayHello() {
    echo "Hello, World!";
}

// Calling a function
sayHello(); // Hello, World!

```

### Function with return value

```php
<?php
function getGreeting() {
    return "Hello, World!";
}

$message = getGreeting();
echo $message; // Hello, World!


```
