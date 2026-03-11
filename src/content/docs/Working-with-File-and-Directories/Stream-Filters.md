---
title: Stream Filters
sidebar:
  order: 116
  label: 116. Stream Filters
---

Stream filters modify data while reading or writing streams.

## Example

```php
$handle = fopen("example.txt", "r");

stream_filter_append($handle, "string.toupper");

echo fread($handle, 1024);
```
