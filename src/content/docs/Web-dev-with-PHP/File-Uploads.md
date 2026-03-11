---
title: File Uploads
sidebar:
  order: 153
  label: 153. File Uploads
---

File uploads allow users to send files to the server.

Forms must include:

- `method="post"`
- `enctype="multipart/form-data"`

## Example Upload Handler

```php
if (isset($_FILES["file"])) {

    move_uploaded_file(
        $_FILES["file"]["tmp_name"],
        "uploads/" . $_FILES["file"]["name"]
    );

}
```
