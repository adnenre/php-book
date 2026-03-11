---
title: Design Patterns
sidebar:
  order: 59
  label: 59. Design Patterns
---

Design patterns are reusable solutions to common software design problems.

They help developers build flexible and maintainable applications.

Common PHP design patterns include:

- Singleton
- Factory
- Strategy
- Observer

## Example Pattern Structure

```php
interface Logger {
    public function log(string $message);
}

class FileLogger implements Logger {
    public function log(string $message) {
        echo "Writing to file: $message";
    }
}
```
