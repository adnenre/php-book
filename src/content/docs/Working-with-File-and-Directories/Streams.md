---
title: Streams
sidebar:
  order: 114
  label: 114. Streams
---

Streams provide a unified way to read and write data in PHP.

They allow accessing files, network resources, and memory using the same API.

## Example

```php
$handle = fopen("php://memory", "r+");

fwrite($handle, "Hello Stream");

rewind($handle);

echo stream_get_contents($handle);
```
