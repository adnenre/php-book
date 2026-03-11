---
title: Get and Set Methods
sidebar:
  order: 65
  label: 65. Get and Set Methods
---

Getters and setters control access to class properties.

## Example

```php
class Product {

    private float $price;

    public function setPrice(float $price) {
        $this->price = $price;
    }

    public function getPrice(): float {
        return $this->price;
    }
}

$product = new Product();
$product->setPrice(100);

echo $product->getPrice();
```
