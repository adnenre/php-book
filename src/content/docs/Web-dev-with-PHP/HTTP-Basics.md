---
title: HTTP Basics
sidebar:
  order: 146
  label: 146. HTTP Basics
---

HTTP (Hypertext Transfer Protocol) is the protocol used for communication between web browsers and web servers.

Each request from a browser sends information to the server, and the server returns a response.

An HTTP request typically includes:

- Method (GET, POST)
- Headers
- Body

## Example

```php
echo $_SERVER["REQUEST_METHOD"];
```
