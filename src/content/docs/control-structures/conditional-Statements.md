---
title: Conditional Statement
sidebar:
  order: 19
  label: 19. Conditional Statement
---

# PHP Control Structures

Control structures allow you to control the flow of your code execution based on conditions.

## if, else, elseif

### Basic if Statement

```php
<?php
$age = 20;

if ($age >= 18) {
    echo "You are an adult.\n";
}

// Single line without braces (if only one statement)
if ($age >= 18) echo "You are an adult.\n";

```

## if else statement

```php

<?php
$age = 16;

if ($age >= 18) {
    echo "You can vote.\n";
} else {
    echo "You cannot vote yet.\n";
}

// Output: You cannot vote yet.

// Practical example
$is_logged_in = false;

if ($is_logged_in) {
    echo "Welcome back, user!\n";
} else {
    echo "Please log in to continue.\n";
}

```

## if-elseif-else statement

```php
<?php
$score = 85;

if ($score >= 90) {
    $grade = 'A';
    $message = "Excellent!";
} elseif ($score >= 80) {
    $grade = 'B';
    $message = "Good job!";
} elseif ($score >= 70) {
    $grade = 'C';
    $message = "Fair work.";
} elseif ($score >= 60) {
    $grade = 'D';
    $message = "Passing.";
} else {
    $grade = 'F';
    $message = "Need improvement.";
}

echo "Score: $score\n";
echo "Grade: $grade - $message\n";

// Output:
// Score: 85
// Grade: B - Good job!

```

## switch

```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of work week\n";
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        echo "Mid week\n";
        break;
    case "Friday":
        echo "Last work day\n";
        break;
    case "Saturday":
    case "Sunday":
        echo "Weekend!\n";
        break;
    default:
        echo "Invalid day\n";
}

// Output: Start of work week

```

## match Expression (PHP 8+)

```php
<?php
$status_code = 404;

$message = match ($status_code) {
    200 => 'OK',
    201 => 'Created',
    400 => 'Bad Request',
    401 => 'Unauthorized',
    403 => 'Forbidden',
    404 => 'Not Found',
    500 => 'Internal Server Error',
    default => 'Unknown Status',
};

echo "Status $status_code: $message\n";
// Output: Status 404: Not Found

// match returns a value directly
$day = "Monday";
$is_weekend = match($day) {
    'Saturday', 'Sunday' => true,
    default => false,
};

echo "$day is " . ($is_weekend ? 'weekend' : 'weekday') . "\n";


```
