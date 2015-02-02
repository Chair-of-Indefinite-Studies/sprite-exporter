cois-sprite-editor
===========

A means to store a sprite created with the sprite-editor

Format
------

We will store sprites as a [JSON][json] file with the following format

```json
{
  "columns": 15,
  "rows": "10",
  "pallete": ['rgba(0,0,0,1)', 'rgba(255,0,0,1)'],
  "pixels": [
    [[0, 0], [1, 0], [2, 0]],
    [[12, 9], [13, 9], [14, 9]]
  ]
}
```

The above JSON describe a sprite with 15 columns and 10 rows, where
the first three pixels of the first row are black and the last three
pixels of the last row are red.

[json]: http://www.json.org/
