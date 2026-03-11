---
title: Exception Hierarchy
sidebar:
  order: 73
  label: 73. Exception Hierarchy
---

PHP exceptions follow a hierarchy.
Throwable
├── Error
└── Exception

Both `Error` and `Exception` implement the `Throwable` interface.

## Example

---php
try {
throw new Exception("Example");
} catch (Throwable $e) {
echo $e->getMessage();
}
---phpend
