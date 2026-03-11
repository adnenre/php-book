---
title: Alternative Syntax
sidebar:
  order: 20
  label: 20. Alternative Syntax
---

## if, else, elseif in Templates

```php
$is_logged_in = true;
$role = 'editor';
$user = [
    'name' => 'John Doe',
    'posts' => [
        ['title' => 'First Post'],
        ['title' => 'Second Post'],
        ['title' => 'Third Post']
    ]
];
$on_sale = true;
$sale_price = 24.99;
$regular_price = 39.99;
$in_stock = true;
$quantity = 3;
$_POST['email'] = 'john@example.com';
$errors = [
    'email' => 'Email already exists',
    'password' => 'Password must be at least 8 characters'
];


<!-- Basic if -->
<?php if ($is_logged_in):
    <p>Welcome back!</p>
<?php endif;

<!-- if-else -->
<?php if ($is_logged_in):
    <a href="/logout">Logout</a>
<?php else:
    <a href="/login">Login</a>
<?php endif;

<!-- if-elseif-else -->
<?php if ($role === 'admin'):
    <a href="/admin">Admin Panel</a>
<?php elseif ($role === 'editor'):
    <a href="/editor">Editor Panel</a>
<?php else:
    <a href="/profile">My Profile</a>
<?php endif;

<!-- Nested conditions -->
<div class="container">
    <?php if ($user):
        <h1>Welcome, <?= $user['name'] !</h1>

        <?php if ($user['posts']):
            <ul>
                <?php foreach ($user['posts'] as $post):
                    <li><?= $post['title'] </li>
                <?php endforeach;
            </ul>
        <?php else:
            <p>No posts yet.</p>
        <?php endif;

    <?php else:
        <p>Please log in.</p>
    <?php endif;
</div>

<!-- Mixing HTML and conditions -->
<div class="card">
    <h3>Product Title</h3>

    <?php if ($on_sale):
        <span class="badge">SALE</span>
        <p class="price">$<?= $sale_price </p>
        <p class="original">$<?= $regular_price </p>
    <?php else:
        <p class="price">$<?= $regular_price </p>
    <?php endif;

    <?php if ($in_stock && $quantity > 0):
        <button>Add to Cart</button>
        <?php if ($quantity < 5):
            <p class="low-stock">Only <?= $quantity  left!</p>
        <?php endif;
    <?php else:
        <button disabled>Out of Stock</button>
    <?php endif;
</div>

<!-- Form validation example -->
<form method="POST">
    <div class="field">
        <label>Email:</label>
        <input type="email" name="email" value="<?= $_POST['email'] ?? '' ">

        <?php if (isset($errors['email'])):
            <span class="error"><?= $errors['email'] </span>
        <?php endif;
    </div>

    <div class="field">
        <label>Password:</label>
        <input type="password" name="password">

        <?php if (isset($errors['password'])):
            <span class="error"><?= $errors['password'] </span>
        <?php endif;
    </div>

    <button type="submit">Register</button>
</form>
```

## switch in Templates

```php
<?php
// Variable declarations for all examples
$day = "Monday";
$content_type = "article";
$title = "My Awesome Article";
$body = "<p>This is the article content.</p>";
$images = ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"];
$video_url = "/videos/intro.mp4";
$status_code = 200;
$role = "editor";


<!-- Basic switch -->
<?php switch ($day):
    case 'Monday':
        <p>Start of week</p>
        <?php break;

    <?php case 'Friday':
        <p>Last work day</p>
        <?php break;

    <?php case 'Saturday':
    case 'Sunday':
        <p>Weekend!</p>
        <?php break;

    <?php default:
        <p>Mid week</p>
<?php endswitch;

<!-- Content type example -->
<?php switch ($content_type):
    case 'article':
        <article>
            <h1><?= $title </h1>
            <div class="content"><?= $body </div>
        </article>
        <?php break;

    <?php case 'gallery':
        <div class="gallery">
            <h1><?= $title </h1>
            <?php foreach ($images as $img):
                <img src="<?= $img ">
            <?php endforeach;
        </div>
        <?php break;

    <?php case 'video':
        <div class="video">
            <h1><?= $title </h1>
            <video src="<?= $video_url " controls></video>
        </div>
        <?php break;

    <?php default:
        <div class="default">
            <h1><?= $title </h1>
            <p><?= $body </p>
        </div>
<?php endswitch;

<!-- HTTP status code example -->
<?php switch ($status_code):
    case 200:
        <div class="success">OK</div>
        <?php break;

    <?php case 201:
        <div class="success">Created</div>
        <?php break;

    <?php case 400:
    case 401:
    case 403:
        <div class="error">Access Error</div>
        <?php break;

    <?php case 404:
        <div class="error">Not Found</div>
        <?php break;

    <?php case 500:
        <div class="critical">Server Error</div>
        <?php break;

    <?php default:
        <div class="info">Status: <?= $status_code </div>
<?php endswitch;

<!-- User role layout -->
<?php switch ($role):
    case 'admin':
        <nav class="admin-nav">
            <a href="/admin/users">Users</a>
            <a href="/admin/settings">Settings</a>
            <a href="/admin/logs">Logs</a>
        </nav>
        <?php break;

    <?php case 'editor':
        <nav class="editor-nav">
            <a href="/editor/posts">Posts</a>
            <a href="/editor/media">Media</a>
        </nav>
        <?php break;

    <?php case 'subscriber':
        <nav class="user-nav">
            <a href="/profile">Profile</a>
            <a href="/saved">Saved</a>
        </nav>
        <?php break;

    <?php default:
        <nav class="guest-nav">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </nav>
<?php endswitch;
```
