---
title: Magic Methods
sidebar:
  order: 40
  label: 40. Magic Methods
---

### **get() and **set()

Magic methods called when accessing or setting inaccessible (private/protected) or non-existent properties.

```php
<?php
class User {
    private $data = [];

    // Called when reading from inaccessible property
    public function __get($name) {
        echo "Attempting to get: $name" . PHP_EOL;
        return $this->data[$name] ?? null;
    }

    // Called when writing to inaccessible property
    public function __set($name, $value) {
        echo "Setting $name to $value" . PHP_EOL;
        $this->data[$name] = $value;
    }

    // Called when checking if property exists
    public function __isset($name) {
        return isset($this->data[$name]);
    }
}

class Product {
    private $properties = [];

    public function __get($name) {
        return $this->properties[$name] ?? "Property '$name' doesn't exist";
    }

    public function __set($name, $value) {
        $this->properties[$name] = $value;
    }
}

$user = new User();
$user->name = "John"; // Output: Setting name to John
$user->age = 30;      // Output: Setting age to 30

echo $user->name . PHP_EOL; // Output: John
echo $user->age . PHP_EOL;  // Output: 30

$product = new Product();
$product->title = "Laptop";
$product->price = 1000;
echo $product->title . PHP_EOL; // Output: Laptop
echo $product->invalid . PHP_EOL; // Output: Property 'invalid' doesn't exist
?>
```

### **isset() and **unset()

Magic methods called when using isset() or unset() on inaccessible properties.

```php
<?php
class Person {
    private $data = [
        'name' => 'John',
        'age' => 30,
        'email' => 'john@test.com'
    ];

    // Called when isset() is used on inaccessible property
    public function __isset($name) {
        echo "Checking if '$name' is set" . PHP_EOL;
        return isset($this->data[$name]);
    }

    // Called when unset() is used on inaccessible property
    public function __unset($name) {
        echo "Unsetting '$name'" . PHP_EOL;
        unset($this->data[$name]);
    }

    public function getData() {
        return $this->data;
    }
}

$person = new Person();

// Using __isset
var_dump(isset($person->name)); // Output: Checking if 'name' is set, bool(true)
var_dump(isset($person->address)); // Output: Checking if 'address' is set, bool(false)

// Using __unset
unset($person->age); // Output: Unsetting 'age'
print_r($person->getData()); // Output: ['name' => 'John', 'email' => 'john@test.com']
?>
```

### **call() and **callStatic()

Magic methods invoked when calling inaccessible or non-existent methods (**call for instance methods, **callStatic for static methods)

```php
<?php
class DynamicMethods {
    // Called when calling inaccessible instance methods
    public function __call($name, $arguments) {
        echo "Calling method '$name' with arguments: " . implode(', ', $arguments) . PHP_EOL;

        if ($name === 'sum') {
            return array_sum($arguments);
        }

        return "Method '$name' doesn't exist";
    }

    // Called when calling inaccessible static methods
    public static function __callStatic($name, $arguments) {
        echo "Calling static method '$name' with arguments: " . implode(', ', $arguments) . PHP_EOL;

        if ($name === 'multiply') {
            return array_product($arguments);
        }

        return "Static method '$name' doesn't exist";
    }
}

$obj = new DynamicMethods();

// Calling non-existent instance methods
echo $obj->sayHello("John") . PHP_EOL; // Output: Calling method 'sayHello' with arguments: John
echo $obj->sum(5, 3, 2) . PHP_EOL;     // Output: Calling method 'sum' with arguments: 5, 3, 2 \n 10

// Calling non-existent static methods
echo DynamicMethods::multiply(2, 3, 4) . PHP_EOL; // Output: Calling static method 'multiply' with arguments: 2, 3, 4 \n 24
echo DynamicMethods::unknown() . PHP_EOL; // Output: Calling static method 'unknown' with arguments:
?>
```

### \_\_toString()

Magic method that defines how an object should be represented when treated as a string.

```php
<?php
class User {
    private $name;
    private $email;
    private $role;

    public function __construct($name, $email, $role = 'user') {
        $this->name = $name;
        $this->email = $email;
        $this->role = $role;
    }

    // Called when object is used as string
    public function __toString() {
        return "User: {$this->name} ({$this->email}) - Role: {$this->role}";
    }
}

class Product {
    private $name;
    private $price;

    public function __construct($name, $price) {
        $this->name = $name;
        $this->price = $price;
    }

    public function __toString() {
        return sprintf("%s - $%.2f", $this->name, $this->price);
    }
}

$user = new User("John Doe", "john@test.com", "admin");
$product = new Product("Laptop", 999.99);

// Automatically calls __toString()
echo $user . PHP_EOL;    // Output: User: John Doe (john@test.com) - Role: admin
echo $product . PHP_EOL; // Output: Laptop - $999.99

// Also works with string functions
$userString = (string) $user;
echo $userString . PHP_EOL; // Same output
?>
```

### \_\_invoke()

Magic method that allows an object to be called as a function.

```php
<?php
class Calculator {
    private $precision;

    public function __construct($precision = 2) {
        $this->precision = $precision;
    }

    // Called when object is used as function
    public function __invoke($a, $b, $operation = 'add') {
        switch($operation) {
            case 'add':
                return round($a + $b, $this->precision);
            case 'subtract':
                return round($a - $b, $this->precision);
            case 'multiply':
                return round($a * $b, $this->precision);
            case 'divide':
                return round($a / $b, $this->precision);
            default:
                return "Unknown operation";
        }
    }
}

class Filter {
    private $min;
    private $max;

    public function __construct($min, $max) {
        $this->min = $min;
        $this->max = $max;
    }

    public function __invoke($value) {
        return $value >= $this->min && $value <= $this->max;
    }
}

$calc = new Calculator(3);
echo $calc(10, 3, 'divide') . PHP_EOL; // Output: 3.333 (object called as function)

$add = new Calculator();
echo $add(5, 3) . PHP_EOL; // Output: 8 (default operation)

$filter = new Filter(10, 20);
$numbers = [5, 12, 18, 25, 9, 15];
$filtered = array_filter($numbers, $filter); // Using object as callback
print_r($filtered); // Output: [12, 18, 15]
?>
```

Magic method called when an object is cloned using the clone keyword. Allows control over what gets copied during cloning.

```php
<?php
class Address {
    public $street;
    public $city;

    public function __construct($street, $city) {
        $this->street = $street;
        $this->city = $city;
    }
}

class User {
    public $name;
    public $address; // Object reference

    public function __construct($name, Address $address) {
        $this->name = $name;
        $this->address = $address;
    }

    // Called when object is cloned
    public function __clone() {
        // Deep copy - create new Address object
        $this->address = clone $this->address;
        echo "User object cloned with deep copy" . PHP_EOL;
    }
}

// Example without __clone (shallow copy)
$address1 = new Address("123 Main St", "New York");
$user1 = new User("John", $address1);
$user2 = clone $user1; // Triggers __clone

$user2->name = "Jane";
$user2->address->street = "456 Oak Ave"; // This changes original because of deep clone

echo "User1: {$user1->name}, {$user1->address->street}" . PHP_EOL; // Output: User1: John, 123 Main St
echo "User2: {$user2->name}, {$user2->address->street}" . PHP_EOL; // Output: User2: Jane, 456 Oak Ave

// Without __clone (shallow copy) - for comparison
class SimpleUser {
    public $name;
    public $address;

    public function __construct($name, $address) {
        $this->name = $name;
        $this->address = $address;
    }
}

$addr = new Address("123 Main", "NYC");
$simple1 = new SimpleUser("John", $addr);
$simple2 = clone $simple1; // No __clone - shallow copy

$simple2->address->street = "Changed Street"; // Modifies original!
echo $simple1->address->street . PHP_EOL; // Output: Changed Street
?>
```

### **sleep() and **wakeup()

**sleep is called before serialization to specify which properties to serialize. **wakeup is called after unserialization to reinitialize resources.

```php
<?php
class DatabaseConnection {
    private $connection;
    private $host;
    private $username;
    private $password;
    private $database;

    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        $this->connect();
    }

    private function connect() {
        $this->connection = new PDO(
            "mysql:host={$this->host};dbname={$this->database}",
            $this->username,
            $this->password
        );
        echo "Connected to database" . PHP_EOL;
    }

    // Called before serialization
    public function __sleep() {
        echo "Preparing to serialize" . PHP_EOL;
        // Return array of properties to serialize
        return ['host', 'username', 'password', 'database'];
    }

    // Called after unserialization
    public function __wakeup() {
        echo "Reconnecting after unserialization" . PHP_EOL;
        $this->connect(); // Re-establish connection
    }

    public function query($sql) {
        return $this->connection->query($sql);
    }
}

$db = new DatabaseConnection('localhost', 'root', 'password', 'test');
$serialized = serialize($db);
echo "Serialized data length: " . strlen($serialized) . PHP_EOL;

$unserialized = unserialize($serialized); // Triggers __wakeup
// Output: Reconnecting after unserialization \n Connected to database
?>
```

### **serialize() and **unserialize()

Modern alternative to **sleep/**wakeup with more control over serialization process. Returns/processes array representation of object.

```php
<?php
class SessionUser {
    private $id;
    private $username;
    private $password; // Don't serialize this!
    private $sessionToken;
    private $lastLogin;

    public function __construct($id, $username, $password) {
        $this->id = $id;
        $this->username = $username;
        $this->password = password_hash($password, PASSWORD_DEFAULT);
        $this->sessionToken = bin2hex(random_bytes(16));
        $this->lastLogin = time();
    }

    // Modern serialization
    public function __serialize(): array {
        echo "Serializing user" . PHP_EOL;
        return [
            'id' => $this->id,
            'username' => $this->username,
            'sessionToken' => $this->sessionToken,
            'lastLogin' => $this->lastLogin
            // password is excluded intentionally
        ];
    }

    // Modern unserialization
    public function __unserialize(array $data): void {
        echo "Unserializing user" . PHP_EOL;
        $this->id = $data['id'];
        $this->username = $data['username'];
        $this->sessionToken = $data['sessionToken'];
        $this->lastLogin = $data['lastLogin'];
        // password remains null
    }

    public function getInfo() {
        return "User: {$this->username}, ID: {$this->id}, Token: {$this->sessionToken}";
    }
}

$user = new SessionUser(1, "john_doe", "secret123");
$serialized = serialize($user);
echo $serialized . PHP_EOL;

$unserialized = unserialize($serialized);
echo $unserialized->getInfo() . PHP_EOL;
?>
```
