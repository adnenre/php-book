---
title: Stream Contexts
sidebar:
  order: 115
  label: 115. Stream Contexts
---

Stream contexts allow customizing how streams behave.

They are commonly used with HTTP requests.

## Example

```php
$options = [
"http" => [
"method" => "GET"
]
];

$context = stream_context_create($options);

$content = file_get_contents("https://example.com", false, $context);
```

```

```
