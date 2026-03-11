---
title: File Uploads
sidebar:
  order: 110
  label: 110. File Uploads
---

PHP allows users to upload files through HTML forms.

To upload files, the form must include:

- `method="post"`
- `enctype="multipart/form-data"`

## Example Form

```html
<form method="post" enctype="multipart/form-data">
  <input type="file" name="file" />
  <input type="submit" />
</form>
```

PHP Upload Handling

```php
move_uploaded_file($\_FILES["file"]["tmp_name"], "uploads/file.txt");
```
