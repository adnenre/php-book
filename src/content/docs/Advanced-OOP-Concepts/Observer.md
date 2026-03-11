---
title: Observer Pattern
sidebar:
  order: 69
  label: 69. Observer Pattern
---

The Observer pattern allows objects to subscribe to events.

## Example

```php
class Subject {

    private array $observers = [];

    public function attach($observer) {
        $this->observers[] = $observer;
    }

    public function notify() {
        foreach ($this->observers as $observer) {
            $observer->update();
        }
    }
}
```
