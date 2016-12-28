Create a file
```javascript
async function createFile() {
  fs = fs.concat({ dir: "documents", filename: "report.txt", contents: "hello, world" });
}
```

```json
{
  "type": "AssignmentExpression",
  "operator": "=",
  "left": {
    "type": "Identifier",
    "name": "fs"
  },
  "right": {
    "type": "CallExpression",
    "callee": {
      "type": "MemberExpression",
      "object": {
        "type": "Identifier",
        "name": "fs"
      },
      "property": {
        "type": "Identifier",
        "name": "concat"
      }
    },
    "arguments": {
      "0": {
        "type": "ObjectExpression",
        "properties": {
          "0": {
            "type": "ObjectProperty",
            "method": false,
            "key": {
              "type": "Identifier",
              "name": "dir"
            },
            "value": {
              "type": "StringLiteral",
              "value": "documents"
            }
          },
          "1": {
            "type": "ObjectProperty",
            "method": false,
            "key": {
              "type": "Identifier",
              "name": "filename"
            },
            "value": {
              "type": "StringLiteral",
              "value": "report.txt"
            }
          },
          "2": {
            "type": "ObjectProperty",
            "method": false,
            "key": {
              "type": "Identifier",
              "name": "contents"
            },
            "value": {
              "type": "StringLiteral",
              "value": "hello, world"
            }
          }
        }
      }
    }
  }
}
```
