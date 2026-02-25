---
title: Control Flow
sidebar:
  order: 10
  label: 10. Control Flow
---

Control flow structures allow you to control the execution of code in your PHP programs. Here's a comprehensive overview:

### Conditional Statements

1. If, Elseif, Else

```php
<?php
$age = 20;
$hasLicense = true;

// Basic if
if ($age >= 18) {
    echo "You are an adult\n";
}

// If-else
if ($age >= 18) {
    echo "You can vote\n";
} else {
    echo "You cannot vote yet\n";
}

// If-elseif-else
if ($age < 13) {
    echo "Child";
} elseif ($age < 20) {
    echo "Teenager";
} elseif ($age < 65) {
    echo "Adult";
} else {
    echo "Senior";
}

// Multiple conditions
if ($age >= 18 && $hasLicense) {
    echo "You can drive a car";
}

```

2. Switch Statement

```php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of the work week";
        break;
    case "Friday":
        echo "Thank God it's Friday!";
        break;
    case "Saturday":
    case "Sunday":
        echo "Weekend!";
        break;
    default:
        echo "Regular work day";
}

// Switch with strict comparison
$number = "1";

switch (true) {
    case $number === 1:
        echo "Integer 1";
        break;
    case $number === "1":
        echo "String '1'";
        break;
    default:
        echo "Other value";
}
```

3. Match Expression (PHP 8+)

```php
<?php
$statusCode = 404;

$message = match ($statusCode) {
    200 => "OK",
    301, 302 => "Redirect",
    404 => "Not Found",
    500 => "Server Error",
    default => "Unknown status"
};

echo $message; // "Not Found"

// Match with conditions
$age = 25;
$category = match (true) {
    $age < 13 => "Child",
    $age < 20 => "Teenager",
    $age < 65 => "Adult",
    default => "Senior"
};
```

### Looping Structures

1. For Loop

```php
<?php
// Basic for loop
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i\n";
}

// Multiple expressions
for ($i = 0, $j = 10; $i < 5; $i++, $j--) {
    echo "i: $i, j: $j\n";
}

// Infinite loop (with break)
for (;;) {
    // Do something
    if (someCondition()) {
        break;
    }
}
```

2. While Loop

```php
<?php
// Pre-condition check
$counter = 0;
while ($counter < 5) {
    echo "Counter: $counter\n";
    $counter++;
}

// Reading until condition
$data = [1, 2, 3, 4, 5];
while (!empty($data)) {
    $value = array_shift($data);
    echo "Processing: $value\n";
}
```

3. Do-While Loop

```php
<?php
// Post-condition check (always executes at least once)
$number = 1;
do {
    echo "Number: $number\n";
    $number++;
} while ($number <= 5);

// Useful for user input validation
do {
    $input = readline("Enter yes or no: ");
} while ($input !== 'yes' && $input !== 'no');
```

4. Foreach Loop

```php
<?php
// Iterating over arrays
$fruits = ['apple', 'banana', 'orange'];

// Value only
foreach ($fruits as $fruit) {
    echo "Fruit: $fruit\n";
}

// Key and value
$person = [
    'name' => 'John',
    'age' => 30,
    'city' => 'New York'
];

foreach ($person as $key => $value) {
    echo "$key: $value\n";
}

// By reference (modifies original array)
$numbers = [1, 2, 3];
foreach ($numbers as &$number) {
    $number *= 2;
}
print_r($numbers); // [2, 4, 6]
```

```php
<?php
// Break - exit loop entirely
for ($i = 0; $i < 10; $i++) {
    if ($i === 5) {
        break; // Exit loop when i equals 5
    }
    echo $i . " ";
}
// Output: 0 1 2 3 4

// Continue - skip current iteration
for ($i = 0; $i < 10; $i++) {
    if ($i % 2 === 0) {
        continue; // Skip even numbers
    }
    echo $i . " ";
}
// Output: 1 3 5 7 9

// Break/continue with levels
for ($i = 0; $i < 3; $i++) {
    echo "Outer: $i\n";
    for ($j = 0; $j < 3; $j++) {
        if ($j === 1) {
            break 2; // Break out of 2 levels of loops
        }
        echo "  Inner: $j\n";
    }
}
```

### Alternative Syntax

PHP offers alternative syntax for control structures, commonly used in templates:

```php
<?php if ($isLoggedIn): ?>
    <h1>Welcome, <?= $username ?></h1>
<?php else: ?>
    <h1>Please log in</h1>
<?php endif; ?>

<?php foreach ($users as $user): ?>
    <div class="user">
        <span><?= $user['name'] ?></span>
        <span><?= $user['email'] ?></span>
    </div>
<?php endforeach; ?>

<?php for ($i = 0; $i < 5; $i++): ?>
    <p>Item <?= $i + 1 ?></p>
<?php endfor; ?>

```

### Practical Examples

1. User Authentication

```php
<?php
$username = "admin";
$password = "secret";
$role = "editor";

if (empty($username) || empty($password)) {
    echo "Username and password are required";
} elseif ($username === "admin" && $password === "secret") {
    switch ($role) {
        case "admin":
            echo "Welcome Administrator";
            break;
        case "editor":
            echo "Welcome Editor";
            break;
        default:
            echo "Welcome User";
    }
} else {
    echo "Invalid credentials";
}

```

2. Data Processing

```php
<?php
$users = [
    ['name' => 'Alice', 'age' => 25, 'active' => true],
    ['name' => 'Bob', 'age' => 17, 'active' => true],
    ['name' => 'Charlie', 'age' => 30, 'active' => false],
];

foreach ($users as $user) {
    if (!$user['active']) {
        continue; // Skip inactive users
    }

    if ($user['age'] < 18) {
        echo "{$user['name']} is underage\n";
        continue;
    }

    echo "Processing: {$user['name']}\n";

    // Break after processing 2 active adult users
    if (++$processed >= 2) {
        break;
    }
}
```

3. Menu System

```php
<?php
$choice = 2;

$result = match ($choice) {
    1 => "You selected: Create new item",
    2 => "You selected: View items",
    3 => "You selected: Edit item",
    4 => "You selected: Delete item",
    default => "Invalid selection"
};

echo $result;
```

### Best Practices

Use meaningful condition names:

```php
<?php
// Instead of:
if ($x > 5 && $y < 10) { }

// Use:
$isValidRange = $x > 5 && $y < 10;
if ($isValidRange) { }
Avoid deep nesting:


// Instead of deep nesting:
if ($condition1) {
    if ($condition2) {
        if ($condition3) {
            // code
        }
    }
}

// Use early returns:
if (!$condition1) return;
if (!$condition2) return;
if (!$condition3) return;
// code
```
