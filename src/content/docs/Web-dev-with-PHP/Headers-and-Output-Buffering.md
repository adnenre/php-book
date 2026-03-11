---
title: Headers and Output Buffering
sidebar:
  order: 163
  label: 163. Headers and Output Buffering
---

Headers must be sent before any output.

Output buffering allows delaying output so headers can still be modified.

## Example

```php
ob_start();

echo "Hello";

header("X-Test: Example");

ob_end_flush();
```
