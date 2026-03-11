---
title: Object Cloning
sidebar:
  order: 42
  label: 42. Object Cloning
---

### Object Cloning

Creating a copy of an existing object using the clone keyword. Can be customized with the \_\_clone() magic method.

```php
<?php
class Engine {
    public $type;
    public $horsepower;

    public function __construct($type, $horsepower) {
        $this->type = $type;
        $this->horsepower = $horsepower;
    }

    public function __clone() {
        echo "Engine cloned" . PHP_EOL;
    }
}

class Car {
    public $brand;
    public $model;
    public $engine; // Object property

    public function __construct($brand, $model, Engine $engine) {
        $this->brand = $brand;
        $this->model = $model;
        $this->engine = $engine;
    }

    // Custom clone behavior
    public function __clone() {
        echo "Car is being cloned" . PHP_EOL;
        // Deep clone the engine
        $this->engine = clone $this->engine;
    }

    public function getSpecs() {
        return "{$this->brand} {$this->model} with {$this->engine->horsepower}hp {$this->engine->type} engine";
    }
}

// Create original object
$engine1 = new Engine("V8", 400);
$car1 = new Car("Ford", "Mustang", $engine1);

// Clone the object
$car2 = clone $car1;

// Modify clone
$car2->brand = "Chevrolet";
$car2->model = "Camaro";
$car2->engine->horsepower = 450;
$car2->engine->type = "V6";

// Original remains unchanged
echo $car1->getSpecs() . PHP_EOL; // Output: Ford Mustang with 400hp V8 engine
echo $car2->getSpecs() . PHP_EOL; // Output: Chevrolet Camaro with 450hp V6 engine

// Shallow clone example (without deep cloning)
class ShallowCar {
    public $brand;
    public $engine;

    public function __construct($brand, $engine) {
        $this->brand = $brand;
        $this->engine = $engine;
    }
}

$eng = new Engine("V6", 300);
$shallow1 = new ShallowCar("Toyota", $eng);
$shallow2 = clone $shallow1; // No __clone - shallow copy

$shallow2->engine->horsepower = 350; // This affects original!
echo $shallow1->engine->horsepower . PHP_EOL; // Output: 350

```
