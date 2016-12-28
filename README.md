Isotropy File System Transpiler
===============================
A variable identifier called "fs" is used to identify file system operations. A directory called "data" under the current directory is used as the store.

Create a file
```javascript
async function createFile() {
  fs = fs.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
}
```

Delete a file
```javascript
async function deleteFile() {
  fs =  fs.filter(file => !(file.dir === "documents" && file.filename === "report.txt"))
}
```

Update a file
```javascript
async function updateFile() {
  fs =  fs.map(file => file.dir === "documents" && file.filename === "report.txt") ?
    { contents: "hello, universe", ...file } : file;
}
```

Get all files in the directory
```javascript
async function getFiles() {
  return fs.filter(file => file.dir === "/some/path")
}
```

Get all files in the directory, including sub-directories
```javascript
async function getFiles() {
  return fs.filter(file => file.dir === "/some/path" || file.dir.startsWith("/some/path/"))
}
```

Read a file
```javascript
async function readFile() {
  const file = fs.find(file => file.dir === "/some/path" && filename === "report.txt");
  console.log(file.contents);
}
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
async function createFile() {
  myFS = myFS.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
}
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
async function createFiles() {
  myDocuments = myDocuments.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
  myPhotos = myPhotos.concat({ dir: "documents", filename: "face.gif", contents: "AADE32df..." });
}
```

An alternative if you don't want to use a global identifier is to use isotropy's import syntax for identifiers.
For proficient users, this is strongly recommended.

Note the "useImports" field below. If true, the transpiler will no longer honor global identifiers (such as myDocuments or myPhotos).
Instead, you'll have to use the import syntax.

```json
{
  "isotropy": {
    "fs": {
      "useImports": true,
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

The code is more verbose, but this approach is way more robust.

```javascript
import isotropyFS from "isotropy-fs";
const myDocuments = isotropyFS("myDocuments");

async function createFile() {
  myDocuments = myDocuments.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
}
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
const myDocuments = isotropyFS("myDocuments");
const myPhotos = isotropyFS("myPhotos");

async function createFiles() {
  myDocuments = myDocuments.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
  myPhotos = myPhotos.concat({ dir: "documents", filename: "face.gif", contents: "AADE32df..." });
}
```
