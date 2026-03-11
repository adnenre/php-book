---
title: Request/Response Cycle
sidebar:
  order: 147
  label: 147. Request/Response Cycle
---

The request-response cycle describes how a client and server communicate.

1. The client sends a request to the server.
2. The server processes the request.
3. The server sends a response back to the client.

For example, when a user submits a form, the browser sends an HTTP request to the server. The server processes the submitted data and returns a response.

## Example

### HTML Form (Client Request)

```html
<form method="post">
  <input type="text" name="username" placeholder="Enter your name" />
  <button type="submit">Submit</button>
</form>
```

**php script (server Processing)**

```php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

$username = $_POST["username"] ?? "Guest";

// Process the request
$message = "Hello, " . htmlspecialchars($username);

// Send response to the client
echo "<h2>$message</h2>";

}
```

**What Happens**

- The browser sends a POST request when the form is submitted.

- PHP reads the request data using $\_POST.

- The server processes the data.

- The server sends back an HTML response that the browser displays.
