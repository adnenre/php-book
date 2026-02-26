---
title: Constructors and Destructors
sidebar:
  order: 33
  label: 33. Constructors and Destructors
---

### \_\_construct()

A magic method that is automatically called when an object is instantiated. Used to initialize properties or perform setup tasks.

```php
<?php
class User {
    public $name;
    public $email;

    // Constructor method
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
        echo "User object created for: $name" . PHP_EOL;
    }
}

$user = new User("John", "john@test.com"); // Output: User object created for: John
echo $user->name . PHP_EOL; // Output: John
?>
```

### \_\_destruct()

A magic method that is automatically called when an object is destroyed or script ends. Used for cleanup tasks like closing files or database connections.

```php
<?php
class FileHandler {
    private $file;

    public function __construct($filename) {
        $this->file = fopen($filename, 'w');
        echo "File opened" . PHP_EOL;
    }

    // Destructor method
    public function __destruct() {
        fclose($this->file);
        echo "File closed" . PHP_EOL;
    }
}

$handler = new FileHandler("test.txt"); // Output: File opened
// When script ends or object is destroyed: File closed
?>
```
