---
title: Singleton Pattern
sidebar:
  order: 72
  label: 72. Singleton Pattern
---

Singleton ensures that only one instance of a class exists.

## Example

```php
class Database {

    private static ?Database $instance = null;

    private function __construct() {}

    public static function getInstance(): Database {

        if (self::$instance === null) {
            self::$instance = new Database();
        }

        return self::$instance;
    }

}

$db = Database::getInstance();

```

```

```
