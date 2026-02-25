---
title: Loops
sidebar:
  order: 21
  label: 21. Loops
---

# PHP Loops

Loops are used to execute the same block of code repeatedly until a certain condition is met.

## while Loop

The while loop executes a block of code as long as the condition is true.

```php
<?php
// Basic while loop
$count = 1;
while ($count <= 5) {
    echo "Count: $count\n";
    $count++;
}
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// While loop with array
$fruits = ["Apple", "Banana", "Orange"];
$index = 0;
while ($index < count($fruits)) {
    echo $fruits[$index] . "\n";
    $index++;
}

// Reading files
$file = fopen("data.txt", "r");
while (!feof($file)) {
    $line = fgets($file);
    echo $line;
}
fclose($file);

// Database results (simulated)
$results = [
    ["id" => 1, "name" => "John"],
    ["id" => 2, "name" => "Jane"],
    ["id" => 3, "name" => "Bob"]
];
$i = 0;
while ($i < count($results)) {
    echo "User: " . $results[$i]['name'] . "\n";
    $i++;
}

// Infinite loop with break
$seconds = 0;
while (true) {
    echo "Running... {$seconds}s\n";
    $seconds++;
    if ($seconds >= 5) {
        break;
    }
}
?>
```

## while in Templates

```php
<?php
// Variable declarations
$count = 1;
$max = 5;
$items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
$index = 0;
$messages = ["Hello", "Hi", "Hey", "Greetings"];
$msg_index = 0;
?>

<!-- Basic while loop -->
<ul>
    <?php $i = 1; ?>
    <?php while ($i <= 5): ?>
        <li>Item <?= $i ?></li>
        <?php $i++; ?>
    <?php endwhile; ?>
</ul>

<!-- While loop with array -->
<select name="month">
    <?php $month = 1; ?>
    <?php while ($month <= 12): ?>
        <option value="<?= $month ?>">Month <?= $month ?></option>
        <?php $month++; ?>
    <?php endwhile; ?>
</select>

<!-- While loop for pagination -->
<div class="pagination">
    <?php $page = 1; ?>
    <?php while ($page <= 10): ?>
        <a href="?page=<?= $page ?>" class="page-link"><?= $page ?></a>
        <?php $page++; ?>
    <?php endwhile; ?>
</div>

<!-- Nested while loops for tables -->
<table border="1">
    <?php $row = 1; ?>
    <?php while ($row <= 3): ?>
        <tr>
            <?php $col = 1; ?>
            <?php while ($col <= 4): ?>
                <td>Row <?= $row ?>, Col <?= $col ?></td>
                <?php $col++; ?>
            <?php endwhile; ?>
        </tr>
        <?php $row++; ?>
    <?php endwhile; ?>
</table>

<!-- While loop with conditional formatting -->
<div class="message-list">
    <?php $idx = 0; ?>
    <?php while ($idx < count($messages)): ?>
        <div class="message <?= $idx % 2 === 0 ? 'even' : 'odd' ?>">
            <?= $messages[$idx] ?>
        </div>
        <?php $idx++; ?>
    <?php endwhile; ?>
</div>
```

## do-while

The do-while loop executes the block once, then repeats as long as condition is true.

```php
<?php
// Basic do-while
$count = 1;
do {
    echo "Count: $count\n";
    $count++;
} while ($count <= 5);

// Always runs at least once
$value = 10;
do {
    echo "Value: $value\n";
    $value++;
} while ($value < 10); // Condition false, but runs once

// User input simulation
$input = '';
do {
    echo "Enter 'quit' to exit: ";
    $input = readline(); // Simulated input
} while ($input !== 'quit');

// Menu system
$choice = 0;
do {
    echo "\n1. View Users\n";
    echo "2. Add User\n";
    echo "3. Delete User\n";
    echo "4. Exit\n";
    echo "Choice: ";
    $choice = (int)readline(); // Simulated

    switch ($choice) {
        case 1: echo "Viewing users...\n"; break;
        case 2: echo "Adding user...\n"; break;
        case 3: echo "Deleting user...\n"; break;
    }
} while ($choice != 4);
?>
```

## do-while in Templates

```php
<?php
// Variable declarations
$count = 1;
$max = 3;
$items = [];
$show_once = true;
?>

<!-- Basic do-while (rare in templates, but possible) -->
<?php $i = 0; ?>
<?php do { ?>
    <p>This runs at least once</p>
    <?php $i++; ?>
<?php } while ($i < 3); ?>

<!-- do-while for at least one item -->
<div class="message-box">
    <?php $has_messages = false; ?>
    <?php do { ?>
        <div class="message">Default message</div>
        <?php $has_messages = true; ?>
    <?php } while ($has_messages === false); ?>
</div>

<!-- do-while for form repopulation -->
<form method="POST">
    <?php $field_index = 0; ?>
    <?php do { ?>
        <input type="text" name="field_<?= $field_index ?>"
               value="<?= $_POST['field_' . $field_index] ?? '' ?>">
        <?php $field_index++; ?>
    <?php } while ($field_index < 3); ?>
</form>
```

## for Loop

The for loop is used when you know in advance how many times to execute.

```php
<?php
// Basic for loop
for ($i = 1; $i <= 5; $i++) {
   echo "Number: $i\n";
}

// For loop with step
for ($i = 0; $i <= 10; $i += 2) {
   echo "Even: $i\n";
}

// Decrementing for loop
for ($i = 10; $i >= 1; $i--) {
   echo "Countdown: $i\n";
}

// Multiple expressions
for ($i = 1, $j = 10; $i <= 5; $i++, $j -= 2) {
   echo "i: $i, j: $j\n";
}

// Nested for loops
for ($row = 1; $row <= 3; $row++) {
   for ($col = 1; $col <= 3; $col++) {
       echo "[$row,$col] ";
   }
   echo "\n";
}

// For loop with array
$fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];
for ($i = 0; $i < count($fruits); $i++) {
   echo $fruits[$i] . "\n";
}

// For loop with conditional
for ($i = 0; $i < 10; $i++) {
   if ($i % 2 == 0) {
       continue; // Skip even numbers
   }
   echo "Odd: $i\n";
}
?>
```

## for Loop in Templates

```php
<?php
// Variable declarations
$products = [
  ["name" => "Laptop", "price" => 999],
  ["name" => "Mouse", "price" => 29],
  ["name" => "Keyboard", "price" => 79],
  ["name" => "Monitor", "price" => 299]
];
$start_year = 2020;
$end_year = 2025;
?>

<!-- Basic for loop -->
<ul>
  <?php for ($i = 1; $i <= 5; $i++): ?>
      <li>Item number <?= $i ?></li>
  <?php endfor; ?>
</ul>

<!-- For loop for years dropdown -->
<select name="year">
  <?php for ($year = $start_year; $year <= $end_year; $year++): ?>
      <option value="<?= $year ?>"><?= $year ?></option>
  <?php endfor; ?>
</select>

<!-- For loop with step for hours -->
<div class="time-slots">
  <?php for ($hour = 9; $hour <= 17; $hour += 2): ?>
      <div class="slot"><?= $hour ?>:00 - <?= $hour + 2 ?>:00</div>
  <?php endfor; ?>
</div>

<!-- For loop for star rating -->
<div class="rating">
  <?php $rating = 4; ?>
  <?php for ($star = 1; $star <= 5; $star++): ?>
      <span class="star <?= $star <= $rating ? 'filled' : 'empty' ?>">
          <?= $star <= $rating ? '★' : '☆' ?>
      </span>
  <?php endfor; ?>
</div>

<!-- Nested for loops for grid -->
<table class="grid">
  <?php for ($row = 0; $row < 3; $row++): ?>
      <tr>
          <?php for ($col = 0; $col < 4; $col++): ?>
              <td>Cell <?= $row + 1 ?>,<?= $col + 1 ?></td>
          <?php endfor; ?>
      </tr>
  <?php endfor; ?>
</table>

<!-- For loop with conditional classes -->
<div class="product-grid">
  <?php for ($i = 0; $i < count($products); $i++): ?>
      <div class="product-card <?= $i % 2 === 0 ? 'featured' : 'regular' ?>">
          <h3><?= $products[$i]['name'] ?></h3>
          <p>$<?= $products[$i]['price'] ?></p>
      </div>
  <?php endfor; ?>
</div>
```

## foreach

The foreach loop is designed specifically for arrays and objects.

```php
<?php
// Basic foreach with indexed array
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
  echo $color . "\n";
}

// Foreach with key and value
$user = [
  "name" => "John",
  "email" => "john@example.com",
  "age" => 30
];
foreach ($user as $key => $value) {
  echo "$key: $value\n";
}

// Foreach with nested arrays
$users = [
  ["name" => "John", "age" => 30],
  ["name" => "Jane", "age" => 25],
  ["name" => "Bob", "age" => 35]
];
foreach ($users as $user) {
  echo $user['name'] . " is " . $user['age'] . "\n";
}

// Foreach with reference (modify original)
$numbers = [1, 2, 3, 4, 5];
foreach ($numbers as &$number) {
  $number *= 2;
}
print_r($numbers); // [2, 4, 6, 8, 10]

// Foreach with objects
class Person {
  public $name;
  public $age;
  public function __construct($name, $age) {
      $this->name = $name;
      $this->age = $age;
  }
}

$people = [
  new Person("John", 30),
  new Person("Jane", 25)
];
foreach ($people as $person) {
  echo $person->name . "\n";
}

// Foreach with list() for nested arrays
$data = [
  ["John", 30, "NYC"],
  ["Jane", 25, "LA"],
  ["Bob", 35, "Chicago"]
];
foreach ($data as list($name, $age, $city)) {
  echo "$name ($age) lives in $city\n";
}

// Foreach with early break
$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
foreach ($numbers as $num) {
  if ($num > 5) {
      break;
  }
  echo "$num ";
} // Output: 1 2 3 4 5
?>
```

## foreach in Templates

```php
<?php
// Variable declarations
$users = [
    ["id" => 1, "name" => "John Doe", "email" => "john@example.com", "role" => "admin"],
    ["id" => 2, "name" => "Jane Smith", "email" => "jane@example.com", "role" => "editor"],
    ["id" => 3, "name" => "Bob Johnson", "email" => "bob@example.com", "role" => "subscriber"],
    ["id" => 4, "name" => "Alice Brown", "email" => "alice@example.com", "role" => "editor"]
];

$products = [
    ["name" => "Laptop", "price" => 999.99, "in_stock" => true],
    ["name" => "Mouse", "price" => 29.99, "in_stock" => true],
    ["name" => "Keyboard", "price" => 79.99, "in_stock" => false],
    ["name" => "Monitor", "price" => 299.99, "in_stock" => true]
];

$categories = [
    "Electronics" => ["Laptop", "Phone", "Tablet"],
    "Clothing" => ["Shirt", "Pants", "Shoes"],
    "Books" => ["Fiction", "Non-fiction", "Science"]
];

$menu_items = [
    ["url" => "/", "text" => "Home"],
    ["url" => "/about", "text" => "About"],
    ["url" => "/services", "text" => "Services"],
    ["url" => "/contact", "text" => "Contact"]
];

$current_page = "/about";
?>

<!-- Basic foreach loop -->
<ul>
    <?php foreach ($users as $user): ?>
        <li><?= $user['name'] ?> (<?= $user['email'] ?>)</li>
    <?php endforeach; ?>
</ul>

<!-- Foreach with key and value -->
<dl>
    <?php foreach ($users[0] as $key => $value): ?>
        <dt><?= ucfirst($key) ?></dt>
        <dd><?= $value ?></dd>
    <?php endforeach; ?>
</dl>

<!-- Table with foreach -->
<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($users as $user): ?>
            <tr class="role-<?= $user['role'] ?>">
                <td><?= $user['name'] ?></td>
                <td><?= $user['email'] ?></td>
                <td><?= ucfirst($user['role']) ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

<!-- Foreach with conditional formatting -->
<div class="product-list">
    <?php foreach ($products as $product): ?>
        <div class="product <?= $product['in_stock'] ? 'in-stock' : 'out-of-stock' ?>">
            <h3><?= $product['name'] ?></h3>
            <p class="price">$<?= number_format($product['price'], 2) ?></p>
            <?php if ($product['in_stock']): ?>
                <button class="buy-btn">Add to Cart</button>
            <?php else: ?>
                <button class="disabled" disabled>Out of Stock</button>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>

<!-- Nested foreach loops -->
<div class="categories">
    <?php foreach ($categories as $category => $items): ?>
        <div class="category">
            <h3><?= $category ?></h3>
            <ul>
                <?php foreach ($items as $item): ?>
                    <li><?= $item ?></li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endforeach; ?>
</div>

<!-- Foreach for navigation menu with active state -->
<nav>
    <ul>
        <?php foreach ($menu_items as $item): ?>
            <li class="<?= $item['url'] === $current_page ? 'active' : '' ?>">
                <a href="<?= $item['url'] ?>"><?= $item['text'] ?></a>
            </li>
        <?php endforeach; ?>
    </ul>
</nav>

<!-- Foreach with index -->
<ol>
    <?php $index = 1; ?>
    <?php foreach ($users as $user): ?>
        <li class="item-<?= $index ?>">
            <?= $index ?>. <?= $user['name'] ?>
        </li>
        <?php $index++; ?>
    <?php endforeach; ?>
</ol>

<!-- Foreach with alternating row colors -->
<table>
    <?php $row_count = 0; ?>
    <?php foreach ($users as $user): ?>
        <tr class="<?= $row_count++ % 2 === 0 ? 'even' : 'odd' ?>">
            <td><?= $user['name'] ?></td>
            <td><?= $user['email'] ?></td>
        </tr>
    <?php endforeach; ?>
</table>

<!-- Foreach for select dropdown -->
<select name="user">
    <option value="">Select a user</option>
    <?php foreach ($users as $user): ?>
        <option value="<?= $user['id'] ?>">
            <?= $user['name'] ?> (<?= $user['email'] ?>)
        </option>
    <?php endforeach; ?>
</select>

<!-- Foreach with checkboxes -->
<div class="checkbox-group">
    <?php foreach ($products as $product): ?>
        <label>
            <input type="checkbox" name="products[]" value="<?= $product['name'] ?>">
            <?= $product['name'] ?> - $<?= $product['price'] ?>
        </label><br>
    <?php endforeach; ?>
</div>
```

## break and continue

break exits the loop, continue skips to the next iteration.

```php
<?php
// break example
for ($i = 1; $i <= 10; $i++) {
  if ($i == 5) {
      break; // Stops at 5
  }
  echo "$i ";
}
// Output: 1 2 3 4

// continue example
for ($i = 1; $i <= 10; $i++) {
  if ($i % 2 == 0) {
      continue; // Skip even numbers
  }
  echo "$i ";
}
// Output: 1 3 5 7 9

// break with nested loops
for ($i = 1; $i <= 3; $i++) {
  for ($j = 1; $j <= 3; $j++) {
      if ($i == 2 && $j == 2) {
          break 2; // Breaks both loops
      }
      echo "[$i,$j] ";
  }
}
// Output: [1,1] [1,2] [1,3] [2,1]

// continue with nested loops
for ($i = 1; $i <= 3; $i++) {
  for ($j = 1; $j <= 3; $j++) {
      if ($j == 2) {
          continue; // Skip only inner loop
      }
      echo "[$i,$j] ";
  }
}
// Output: [1,1] [1,3] [2,1] [2,3] [3,1] [3,3]

// break in while
$i = 1;
while (true) {
  echo "$i ";
  $i++;
  if ($i > 5) {
      break;
  }
}
// Output: 1 2 3 4 5

// continue in while
$i = 0;
while ($i < 10) {
  $i++;
  if ($i % 2 == 0) {
      continue;
  }
  echo "$i ";
}
// Output: 1 3 5 7 9

// break with switch inside loop
$numbers = [1, 2, 3, 4, 5];
foreach ($numbers as $num) {
  switch ($num) {
      case 1:
          echo "One ";
          break; // Breaks switch, not loop
      case 3:
          echo "Three ";
          break 2; // Breaks switch AND loop
      default:
          echo "$num ";
  }
}
// Output: One 2 Three
?>
```

## break and continue in Templates

```php
<?php
// Simple array for all examples
$items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
$matrix = [[1,2,3],[4,5,6],[7,8,9]];
?>

<!-- break - show first 3 items only -->
<ul>
    <?php $count = 0; ?>
    <?php foreach ($items as $item): ?>
        <?php if ($count >= 3) break; ?>
        <li><?= $item ?></li>
        <?php $count++; ?>
    <?php endforeach; ?>
</ul>

<!-- continue - skip even indices -->
<ul>
    <?php foreach ($items as $index => $item): ?>
        <?php if ($index % 2 == 0) continue; ?>
        <li><?= $item ?> (index <?= $index ?>)</li>
    <?php endforeach; ?>
</ul>

<!-- break when found -->
<?php $search = "Item 3"; ?>
<?php $found = false; ?>
<?php foreach ($items as $item): ?>
    <?php if ($item === $search): ?>
        <p>Found: <?= $item ?></p>
        <?php $found = true; ?>
        <?php break; ?>
    <?php endif; ?>
<?php endforeach; ?>
<?php if (!$found): ?>
    <p>Not found</p>
<?php endif; ?>

<!-- break from nested loops -->
<table border="1">
    <?php $found = false; ?>
    <?php foreach ($matrix as $row): ?>
        <tr>
            <?php foreach ($row as $cell): ?>
                <td><?= $cell ?></td>
                <?php if ($cell == 5): ?>
                    <?php $found = true; ?>
                    <?php break 2; ?>
                <?php endif; ?>
            <?php endforeach; ?>
        </tr>
    <?php endforeach; ?>
    <?php if ($found): ?>
        <tr><td colspan="3">Found 5!</td></tr>
    <?php endif; ?>
</table>
```

## Loop comparison

| Loop Type    | When to Use                                | Syntax                                  | Guaranteed Execution |
| ------------ | ------------------------------------------ | --------------------------------------- | -------------------- |
| **while**    | When condition is checked before execution | `while (condition) {}`                  | 0+ times             |
| **do-while** | When you need at least one execution       | `do {} while (condition);`              | 1+ times             |
| **for**      | When you know exact number of iterations   | `for (init; condition; increment) {}`   | 0+ times             |
| **foreach**  | When iterating through arrays/objects      | `foreach ($array as $key => $value) {}` | 0+ times             |
