---
title: Special Types
sidebar:
  order: 16
  label: 16. Special Types
---

# PHP Special Types: NULL and Resource

PHP has two special data types that don't fit into the standard categories: **NULL** (represents no value) and **Resource** (represents external resources).

### NULL

```php
<?php
// 1. Variable declared but not assigned
$var1;
var_dump($var1); // NULL

// 2. Variable assigned null explicitly
$var2 = null;
var_dump($var2); // NULL

// 3. Variable unset
$var3 = "Hello";
unset($var3);
var_dump($var3); // NULL (undefined variable)

// 4. Function with no return value
function test() {
    // no return
}
$result = test();
var_dump($result); // NULL

// 5. Unknown constants or properties
var_dump($undefined_constant); // NULL (with warning)

```

### Checking for Null

```php
<?php
$value = null;

// Using is_null()
if (is_null($value)) {
    echo "Value is null\n"; // This runs
}

// Using === comparison (recommended)
if ($value === null) {
    echo "Value is strictly null\n"; // This runs
}

// What doesn't work
$zero = 0;
$empty_string = "";
$false = false;

var_dump(is_null($zero));        // bool(false)
var_dump(is_null($empty_string)); // bool(false)
var_dump(is_null($false));        // bool(false)

// Loose comparison pitfalls
var_dump(null == 0);        // bool(true)  ⚠️ Pitfall!
var_dump(null == false);    // bool(true)  ⚠️ Pitfall!
var_dump(null == "");        // bool(true)  ⚠️ Pitfall!

// Strict comparison is safe
var_dump(null === 0);        // bool(false) ✅ Correct
var_dump(null === false);    // bool(false) ✅ Correct
var_dump(null === "");        // bool(false) ✅ Correct

```

### NULL Coalescing in Practice

```php
<?php
// Before PHP 7 (old way)
$username = isset($_GET['user']) ? $_GET['user'] : 'guest';

// PHP 7+ (null coalescing)
$username = $_GET['user'] ?? 'guest';

// Chaining null coalescing
$a = null;
$b = null;
$c = "hello";
$result = $a ?? $b ?? $c ?? "default";
echo $result . "\n"; // hello

// Null coalescing assignment (PHP 7.4+)
$data['key'] ??= 'default';
// Same as: $data['key'] = $data['key'] ?? 'default';

// Practical example: configuration
function getConfig($key, $default = null) {
    $config = [
        'database' => [
            'host' => 'localhost',
            'port' => 3306
        ]
    ];

    return $config[$key] ?? $default;
}

echo getConfig('database')['host'] . "\n"; // localhost
echo getConfig('cache', ['driver' => 'file'])['driver'] . "\n"; // file

```

### NULL vs Other Falsy Values

```php
<?php
$values = [
    'null' => null,
    'false' => false,
    'zero' => 0,
    'empty_string' => "",
    'empty_array' => []
];

foreach ($values as $name => $value) {
    echo "\n--- $name ---\n";
    echo "Value: " . var_export($value, true) . "\n";
    echo "is_null(): " . (is_null($value) ? 'true' : 'false') . "\n";
    echo "== null: " . (($value == null) ? 'true' : 'false') . "\n";
    echo "=== null: " . (($value === null) ? 'true' : 'false') . "\n";
    echo "empty(): " . (empty($value) ? 'true' : 'false') . "\n";
    echo "isset(): " . (isset($value) ? 'true' : 'false') . "\n";
}

```

### Resource

Resource is a special type holding a reference to an external resource (file handle, database connection, etc.).

```php
<?php
// 1. File resources
$file = fopen('example.txt', 'w');
var_dump($file); // resource(5) of type (stream)

if (is_resource($file)) {
    echo "File resource opened\n";
    fwrite($file, "Hello World");
    fclose($file); // Always close resources!
}

// 2. Database connections (MySQL)
$mysqli = mysqli_connect('localhost', 'user', 'pass', 'db');
if (is_resource($mysqli)) {
    echo "MySQL connection resource\n";
    mysqli_close($mysqli);
}

// 3. cURL resources
$ch = curl_init('https://api.example.com');
var_dump($ch); // resource(6) of type (curl)
curl_close($ch);

// 4. Image resources (GD)
$image = imagecreate(100, 100);
if (is_resource($image)) {
    echo "Image resource created\n";
    imagedestroy($image);
}

// 5. XML Parser resources
$parser = xml_parser_create();
var_dump($parser); // resource(7) of type (xml)
xml_parser_free($parser);

// 6. Stream contexts
$context = stream_context_create();
var_dump($context); // resource(8) of type (stream-context)

```
