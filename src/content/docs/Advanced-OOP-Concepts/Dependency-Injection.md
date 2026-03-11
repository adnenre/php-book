---
title: Dependency Injection
sidebar:
  order: 58
  label: 58. Dependency Injection
---

Dependency Injection (DI) is a design pattern where dependencies are provided from outside the class.

This improves **testability** and **maintainability**.

## Example

```php
class Database {
    public function connect() {
        echo "Connected to database";
    }
}

class UserRepository {

    private Database $database;

    public function __construct(Database $database) {
        $this->database = $database;
    }

    public function save() {
        $this->database->connect();
        echo "User saved";
    }
}

$db = new Database();
$repo = new UserRepository($db);

$repo->save();
```
