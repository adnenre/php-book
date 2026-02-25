---
title: "PHP Superglobals"
sidebar:
  order: 13
  label: 13. PHP Superglobals
---

Superglobals are built-in variables that are always available in all scopes throughout a PHP script. They are arrays that contain information from various sources and are accessible from any function, class, or file without the need for the global keyword.

## 1. $\_GET

The $\_GET superglobal is an associative array of variables passed to the current script via the URL parameters (query string).

Basic Usage:

```php
<?php
// URL: http://example.com/page.php?id=123&name=John

// Access GET parameters
$user_id = $_GET['id'];     // 123
$user_name = $_GET['name']; // "John"

echo "User ID: " . $user_id . "<br>";
echo "User Name: " . $user_name;

// Check if parameter exists
if (isset($_GET['search'])) {
    $search_term = $_GET['search'];
    echo "Searching for: " . htmlspecialchars($search_term);
}
?>
```

**Security Considerations:**

```php
<?php
// Always validate and sanitize GET data
$id = isset($_GET['id']) ? intval($_GET['id']) : 0; // Convert to integer
$name = isset($_GET['name']) ? htmlspecialchars($_GET['name']) : ''; // Prevent XSS

// For string parameters, use filter_input
$email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);

// Better practice: validate before use
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = (int)$_GET['id'];
    // Proceed with valid id
} else {
    // Handle error
    die("Invalid ID parameter");
}
?>
```

**Example Form:**
**HTML**

```php
<!-- form.html -->
<form action="process.php" method="get">
    <input type="text" name="search" placeholder="Search...">
    <select name="category">
        <option value="books">Books</option>
        <option value="movies">Movies</option>
    </select>
    <input type="submit" value="Search">
</form>
```

**PHP**

<!-- process.php -->
<?php
if (isset($_GET['search']) && !empty($_GET['search'])) {
    $search = htmlspecialchars($_GET['search']);
    $category = isset($_GET['category']) ? $_GET['category'] : 'all';
    echo "Search results for '$search' in category: $category";
}
?>

2. $\_POST
   The $\_POST superglobal contains variables passed to the current script via HTTP POST method, typically from HTML forms.

**Basic Usage:**
**php**

```php
<?php
// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Access POST data
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];

    // Process the data (e.g., save to database)
    echo "Registration successful for: " . htmlspecialchars($username);
}

// Always check if array keys exist
$age = isset($_POST['age']) ? $_POST['age'] : 'Not provided';
?>
```

**Security Best Practices:**

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $age = filter_input(INPUT_POST, 'age', FILTER_VALIDATE_INT);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address");
    }

    // For file uploads, use $_FILES, not $_POST
    // Never trust user input
    $clean_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
}
?>
```

**Example Registration Form:**
php

```php
<!-- register.php -->
<?php
$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate inputs
    $username = trim($_POST['username'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $confirm = $_POST['confirm_password'] ?? '';

    if (empty($username)) {
        $errors[] = "Username is required";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email address";
    }

    if (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters";
    }

    if ($password !== $confirm) {
        $errors[] = "Passwords do not match";
    }

    if (empty($errors)) {
        // Process registration
        echo "Registration successful!";
    }
}
?>

<form method="POST">
    <input type="text" name="username" placeholder="Username"
           value="<?= htmlspecialchars($_POST['username'] ?? '') ?>">

    <input type="email" name="email" placeholder="Email"
           value="<?= htmlspecialchars($_POST['email'] ?? '') ?>">

    <input type="password" name="password" placeholder="Password">
    <input type="password" name="confirm_password" placeholder="Confirm Password">

    <input type="submit" value="Register">

</form>

<?php if (!empty($errors)): ?>

    <div class="errors">
        <?php foreach ($errors as $error): ?>
            <p><?= htmlspecialchars($error) ?></p>
        <?php endforeach; ?>
    </div>

<?php endif; ?>
```

### 3. $\_REQUEST

The $\_REQUEST superglobal contains the contents of $\_GET, $\_POST, and $\_COOKIE. It's a merged array, but the order depends on PHP configuration (request_order in php.ini).

Usage (with caution):

```php

<?php
// Not recommended for most cases due to ambiguity
$value = $_REQUEST['key']; // Could be from GET, POST, or COOKIE

// Check specific source instead
if (isset($_POST['key'])) {
    // Definitely from POST
} elseif (isset($_GET['key'])) {
    // Definitely from GET
}

// Configuration affects order (php.ini):
// request_order = "GP"  // GET then POST (default)
// request_order = "PG"  // POST then GET
// request_order = "GPC" // GET, POST, COOKIE
?>
```

**Warning:** Using $_REQUEST can lead to security issues and unexpected behavior. It's generally better to use the specific superglobal ($\_GET, $\_POST, or $\_COOKIE) to know exactly where the data is coming from.

### 4. $\_SESSION

The $\_SESSION superglobal is used to store session variables that persist across multiple pages for a single user.

**Basic Usage:**

```php
<?php
// Always start session at the beginning
session_start();

// Set session variables
$_SESSION['username'] = 'john_doe';
$_SESSION['user_id'] = 123;
$_SESSION['logged_in'] = true;
$_SESSION['cart'] = ['item1', 'item2'];

// Access session variables
if (isset($_SESSION['logged_in']) && $_SESSION['logged_in']) {
    echo "Welcome, " . htmlspecialchars($_SESSION['username']);
}

// Modify session data
$_SESSION['cart'][] = 'item3'; // Add item to cart

// Remove session variable
unset($_SESSION['cart']);

// Destroy entire session
session_destroy();
?>
```

**Complete Login System Example:**

```php

<?php
session_start();

// login.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // Validate credentials (simplified example)
    if ($username === 'admin' && $password === 'secret') {
        $_SESSION['user_id'] = 1;
        $_SESSION['username'] = 'admin';
        $_SESSION['role'] = 'administrator';
        $_SESSION['last_login'] = time();

        // Regenerate session ID for security
        session_regenerate_id(true);

        header('Location: dashboard.php');
        exit;
    } else {
        $error = "Invalid credentials";
    }
}

// dashboard.php (protected page)
session_start();
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

echo "Welcome, " . htmlspecialchars($_SESSION['username']);
echo "<br>Last login: " . date('Y-m-d H:i:s', $_SESSION['last_login']);

// logout.php
session_start();
session_unset();    // Remove all session variables
session_destroy();  // Destroy the session
setcookie(session_name(), '', time() - 3600); // Delete session cookie
header('Location: login.php');
exit;
?>
```

**Session Security Tips:**

```php
<?php
// Secure session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1); // HTTPS only
ini_set('session.use_strict_mode', 1);

session_start();

// Regenerate session ID periodically
if (!isset($_SESSION['created'])) {
    $_SESSION['created'] = time();
} elseif (time() - $_SESSION['created'] > 1800) { // 30 minutes
    session_regenerate_id(true);
    $_SESSION['created'] = time();
}

// Store user agent for verification
if (!isset($_SESSION['user_agent'])) {
    $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
} elseif ($_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
    // Possible session hijacking
    session_destroy();
    die("Security violation detected");
}
?>
```

### 5. $\_COOKIE

The $\_COOKIE superglobal contains variables passed to the current script via HTTP cookies.

**Basic Usage:**

```php
<?php
// Set a cookie (must be before any output)
$cookie_name = "user";
$cookie_value = "John Doe";
$expiry = time() + (86400 * 30); // 30 days
setcookie($cookie_name, $cookie_value, $expiry, "/");

// Access cookie values
if (isset($_COOKIE['user'])) {
    echo "Welcome back, " . htmlspecialchars($_COOKIE['user']);
} else {
    echo "Welcome, first-time visitor!";
}

// Set cookie with more options
setcookie(
    "preferences",
    json_encode(['theme' => 'dark', 'language' => 'en']),
    [
        'expires' => time() + (86400 * 365),
        'path' => '/',
        'domain' => 'example.com',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ]
);

// Delete a cookie
setcookie("user", "", time() - 3600, "/");
?>
```

**Example: Remember Me Functionality:**

```php

<?php
// Set remember me cookie
function setRememberMeCookie($user_id) {
    $token = bin2hex(random_bytes(32)); // Secure random token
    $expiry = time() + (86400 * 30); // 30 days

    // Store token in database (simplified)
    // $db->storeToken($user_id, $token, $expiry);

    setcookie(
        "remember_me",
        $token,
        [
            'expires' => $expiry,
            'path' => '/',
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Strict'
        ]
    );
}

// Check remember me cookie
function checkRememberMe() {
    if (isset($_COOKIE['remember_me'])) {
        $token = $_COOKIE['remember_me'];

        // Verify token in database
        // $user_id = $db->verifyToken($token);

        if ($user_id) {
            // Log user in automatically
            $_SESSION['user_id'] = $user_id;
            return true;
        }
    }
    return false;
}
?>
```

### 6. $\_SERVER

The $\_SERVER superglobal contains information about the server and execution environment.

**Common $\_SERVER Elements:**

```php
<?php
echo "Server Information:<br>";
echo "Server Name: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
echo "Server Protocol: " . $_SERVER['SERVER_PROTOCOL'] . "<br>";
echo "Server Port: " . $_SERVER['SERVER_PORT'] . "<br><br>";

echo "Request Information:<br>";
echo "Request Method: " . $_SERVER['REQUEST_METHOD'] . "<br>";
echo "Request URI: " . $_SERVER['REQUEST_URI'] . "<br>";
echo "Query String: " . $_SERVER['QUERY_STRING'] . "<br>";
echo "Script Name: " . $_SERVER['SCRIPT_NAME'] . "<br>";
echo "Script Filename: " . $_SERVER['SCRIPT_FILENAME'] . "<br><br>";

echo "Client Information:<br>";
echo "Remote Address: " . $_SERVER['REMOTE_ADDR'] . "<br>";
echo "Remote Port: " . $_SERVER['REMOTE_PORT'] . "<br>";
echo "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br>";
echo "Accept Language: " . $_SERVER['HTTP_ACCEPT_LANGUAGE'] . "<br><br>";

echo "Other Useful Elements:<br>";
echo "Document Root: " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
echo "HTTPS: " . (isset($_SERVER['HTTPS']) ? 'Yes' : 'No') . "<br>";
echo "HTTP Host: " . $_SERVER['HTTP_HOST'] . "<br>";
echo "HTTP Referer: " . ($_SERVER['HTTP_REFERER'] ?? 'Not set') . "<br>";
?>
```

**Practical Examples:**

```php

<?php
// Redirect based on HTTPS
if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    $redirect = "https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    header("Location: $redirect");
    exit;
}

// Get current page URL
function getCurrentUrl() {
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
                ? "https://" : "http://";
    return $protocol . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
}

// Get client IP address (considering proxies)
function getClientIp() {
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        return $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        return $_SERVER['REMOTE_ADDR'];
    }
}

// Create absolute URL
function asset($path) {
    $base = "https://" . $_SERVER['HTTP_HOST'];
    return $base . '/' . ltrim($path, '/');
}

// Check if request is AJAX
function isAjaxRequest() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH'])
           && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest';
}

// Security: Validate HTTP_HOST
$allowed_hosts = ['example.com', 'www.example.com'];
if (!in_array($_SERVER['HTTP_HOST'], $allowed_hosts, true)) {
    die("Invalid host");
}
?>
```

### 7. $\_ENV

The $\_ENV superglobal contains environment variables. These are typically set in the server configuration or .env files.

**Basic Usage:**

```php
<?php
// Access environment variables
$db_host = $_ENV['DB_HOST'] ?? 'localhost';
$db_user = $_ENV['DB_USER'] ?? 'root';
$db_pass = $_ENV['DB_PASS'] ?? '';
$db_name = $_ENV['DB_NAME'] ?? 'myapp';

// Set environment variables (in PHP code)
putenv("APP_ENV=production");
$_ENV['APP_ENV'] = 'production';

// Common environment variables
echo "Application Environment: " . ($_ENV['APP_ENV'] ?? 'development') . "<br>";
echo "Path: " . ($_ENV['PATH'] ?? 'Not set') . "<br>";
echo "Temporary Directory: " . ($_ENV['TMPDIR'] ?? sys_get_temp_dir()) . "<br>";
?>
```

**Using .env Files (with vlucas/phpdotenv):**

```php
<?php
// Install via: composer require vlucas/phpdotenv

require_once __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Now access via getenv() or $_ENV
$db_host = $_ENV['DB_HOST'];
$api_key = $_ENV['API_KEY'];

// Or using getenv()
$debug = getenv('APP_DEBUG') === 'true';

// Required variables
$dotenv->required(['DB_HOST', 'DB_NAME', 'DB_USER', 'DB_PASS']);
?>
```

### 8. $\_FILES

The $\_FILES superglobal contains items uploaded via HTTP POST method with enctype="multipart/form-data".

**Basic Structure of $\_FILES:**

```php
Array
(
[avatar] => Array
(
[name] => photo.jpg
[type] => image/jpeg
[tmp_name] => /tmp/php/php6hst32
[error] => 0
[size] => 98174
)
)
```

**_File Upload Example:_**
php

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['avatar'])) {
    $file = $_FILES['avatar'];

    // Check for errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        die("Upload failed with error code: " . $file['error']);
    }

    // Validate file type
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif'];
    if (!in_array($file['type'], $allowed_types)) {
        die("Invalid file type. Only JPG, PNG, and GIF are allowed.");
    }

    // Validate file size (2MB max)
    $max_size = 2 * 1024 * 1024; // 2MB in bytes
    if ($file['size'] > $max_size) {
        die("File is too large. Maximum size is 2MB.");
    }

    // Validate file extension
    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    $allowed_extensions = ['jpg', 'jpeg', 'png', 'gif'];
    if (!in_array($extension, $allowed_extensions)) {
        die("Invalid file extension.");
    }

    // Generate unique filename
    $new_filename = uniqid() . '.' . $extension;
    $upload_path = __DIR__ . '/uploads/' . $new_filename;

    // Move uploaded file
    if (move_uploaded_file($file['tmp_name'], $upload_path)) {
        echo "File uploaded successfully!";
        echo "<br>Saved as: " . htmlspecialchars($new_filename);
    } else {
        die("Failed to move uploaded file.");
    }
}
?>

<form method="POST" enctype="multipart/form-data">
    <input type="file" name="avatar" accept="image/*">
    <input type="submit" value="Upload">
</form>
```

**Multiple File Upload:**

```php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !empty($_FILES['photos'])) {
    $files = $_FILES['photos'];
    $uploaded_files = [];

    // Handle multiple files
    foreach ($files['error'] as $key => $error) {
        if ($error === UPLOAD_ERR_OK) {
            $tmp_name = $files['tmp_name'][$key];
            $name = basename($files['name'][$key]);
            $upload_path = __DIR__ . '/uploads/' . $name;

            if (move_uploaded_file($tmp_name, $upload_path)) {
                $uploaded_files[] = $name;
            }
        }
    }

    echo "Uploaded " . count($uploaded_files) . " files.";

}
?>

<form method="POST" enctype="multipart/form-data">
    <input type="file" name="photos[]" multiple accept="image/*">
    <input type="submit" value="Upload Multiple Files">
</form>
```

**File Upload Security Tips:**

```php
<?php
function handleFileUpload($field_name, $options = []) {
    $defaults = [
        'max_size' => 5 * 1024 * 1024, // 5MB
        'allowed_types' => ['image/jpeg', 'image/png'],
        'upload_dir' => __DIR__ . '/uploads/',
        'rename' => true
    ];

    $options = array_merge($defaults, $options);

    if (!isset($_FILES[$field_name])) {
        return ['error' => 'No file uploaded'];
    }

    $file = $_FILES[$field_name];

    // Check upload errors
    if ($file['error'] !== UPLOAD_ERR_OK) {
        return ['error' => 'Upload failed: ' . $file['error']];
    }

    // Check file size
    if ($file['size'] > $options['max_size']) {
        return ['error' => 'File too large'];
    }

    // Verify MIME type using finfo (more reliable than $_FILES['type'])
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);

    if (!in_array($mime_type, $options['allowed_types'])) {
        return ['error' => 'Invalid file type: ' . $mime_type];
    }

    // Get safe filename
    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $safe_extension = strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $extension));

    if ($options['rename']) {
        $new_filename = uniqid() . '.' . $safe_extension;
    } else {
        $new_filename = preg_replace('/[^a-zA-Z0-9\._-]/', '', $file['name']);
    }

    $destination = $options['upload_dir'] . $new_filename;

    // Ensure upload directory exists
    if (!is_dir($options['upload_dir'])) {
        mkdir($options['upload_dir'], 0755, true);
    }

    // Move file
    if (move_uploaded_file($file['tmp_name'], $destination)) {
        return [
            'success' => true,
            'filename' => $new_filename,
            'path' => $destination,
            'size' => $file['size'],
            'type' => $mime_type
        ];
    }

    return ['error' => 'Failed to save file'];

}
?>
```

Security Considerations for All Superglobals
General Security Rules:
Never trust user input - Always validate and sanitize

Use prepared statements for database queries

Escape output with htmlspecialchars() when displaying user data

Validate data types and ranges

Use HTTPS for sensitive data transmission

**Input Validation Example:**

```php

<?php
function validateInput($input, $type = 'string', $options = []) {
    switch ($type) {
        case 'email':
            return filter_var($input, FILTER_VALIDATE_EMAIL);

        case 'int':
            $min = $options['min'] ?? PHP_INT_MIN;
            $max = $options['max'] ?? PHP_INT_MAX;
            $filtered = filter_var($input, FILTER_VALIDATE_INT, [
                'options' => ['min_range' => $min, 'max_range' => $max]
            ]);
            return $filtered !== false ? $filtered : false;

        case 'url':
            return filter_var($input, FILTER_VALIDATE_URL);

        case 'string':
        default:
            $input = trim($input);
            $max_length = $options['max_length'] ?? 255;
            if (strlen($input) > $max_length) {
                return false;
            }
            return htmlspecialchars($input, ENT_QUOTES, 'UTF-8');
    }
}

// Usage
$clean_email = validateInput($_POST['email'], 'email');
$clean_age = validateInput($_POST['age'], 'int', ['min' => 1, 'max' => 120]);
$clean_name = validateInput($_POST['name'], 'string', ['max_length' => 100]);
?>
```

**Remember**: Superglobals are powerful tools, but with great power comes great responsibility. Always validate, sanitize, and secure your data handling.
