Isotropy File System Transpiler
===============================
A variable identifier called "fs" is used to identify file system operations. A directory called "data" under the current directory is used as the store.

Create a directory
```javascript
fs["myDir"] = {}
//OR
fs.myDir = {}
```

Write a file inside the directory
```javascript
fs["myDir"]["myFile.txt"] = "Hello, world";
//OR
fs.myDir["myFile.txt"] = "Hello, world";
```

List contents of a directory.
```javascript
const contents = Object.keys(fs["myDir"] )
```

Read a file
```javascript
const content = fs["myDir"]["myFile.txt"];
```

Create a sub-directory
```javascript
fs["myDir"]["mySubDir"] = {};
```

Advanced
--------
You can override the default variable identifier "fs" via package.json.
In the following example, myFS is used in place of fs.

```json
{
  "isotropy": {
    "fs": {
      "roots": {
        "myFS": {
          "path": "data"
        }
      }
    }
  }
}
```

This can be referenced in JavaScript as:

```javascript
//Create a directory. Note that the identifier is myFS.
myFS["myDir"] = {}
```

As you can see, you can have multiple roots.
```json
{
  "isotropy": {
    "fs": {
      "roots": {
        "myDocuments": {
          "path": "docs"
        },
        "myPhotos": {
          "path": "photos"
        }
      }
    }
  }
}
```

```javascript
//Create a directory. Note that the identifier is myFS.
myDocuments["myDir"] = {}
myPhotos["myDir"] = {}
```

An alternative if you don't want to use a global identifier is to use isotropy's import syntax for identifiers.
For proficient users, this is strongly recommended.

```json
{
  "isotropy": {
    "useImports": true
  }
}
```

The code is a little more robust, but this approach is way more robust.

```javascript
import isotropyFS from "isotropy-fs";
const myFS = isotropyFS("myFS");
myFS["myFile.txt"] = "hello, world";
```

To use multiple root directories, follow the same approach seen earlier.

```json
{
  "isotropy": {
    "fs": {
      "roots": {
        "myDocuments": {
          "path": "docs"
        },
        "myPhotos": {
          "path": "photos"
        }
      }
    }
  }
}
```

```javascript
import isotropyFS from "isotropy-fs";
const docs = isotropyFS("myDocuments");
const photos = isotropyFS("myPhotos");
docs["myFile.txt"] = "hello, world";
```
