Get files in directory including sub-directories
```javascript
async function getFiles() {
  return fs.filter(file => file.dir === "/some/path" || file.dir.startsWith("/some/path/"))
}
```

```json

  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "type": "Identifier",
      "name": "fs"
    },
    "property": {
      "type": "Identifier",
      "name": "filter"
    }
  },
  "arguments": {
    "0": {
      "type": "ArrowFunctionExpression",
      "id": {},
      "generator": false,
      "expression": true,
      "async": false,
      "params": {
        "0": {
          "type": "Identifier",
          "name": "file"
        }
      },
      "body": {
        "type": "LogicalExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "name": "file"
            },
            "property": {
              "type": "Identifier",
              "name": "dir"
            }
          },
          "operator": "===",
          "right": {
            "type": "StringLiteral",
            "value": "/some/path"
          }
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "name": "file"
              },
              "property": {
                "type": "Identifier",
                "name": "dir"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "startsWith"
            }
          },
          "arguments": {
            "0": {
              "type": "StringLiteral",
              "value": "/some/path/"
            }
          }
        }
      }
    }
  }
}
```
