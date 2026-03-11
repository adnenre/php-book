---
title: Forms Processing
sidebar:
  order: 150
  label: 150. Forms Processing
---

Forms allow users to submit data to a server.

HTML forms usually send data using GET or POST.

## Example Form

```html
<form method="post">
  <input type="text" name="username" />
  <input type="submit" />
</form>
```

## Processing Form Data

```php
 $username = $_POST["username"];
 echo "Hello " . $username;

```
