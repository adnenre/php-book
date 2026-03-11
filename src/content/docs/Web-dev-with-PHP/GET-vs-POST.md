---
title: GET vs POST
sidebar:
  order: 151
  label: 151. GET vs POST
---

GET and POST are HTTP methods used for sending data.

GET:

- Data is appended to the URL
- Used for retrieving data

POST:

- Data is sent in the request body
- Used for submitting forms

## Example GET

```php
echo $_GET["name"];

```

## Example POST

```php
echo $_POST["name"];
```
