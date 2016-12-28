Delete a file
```javascript
async function deleteFile() {
  fs =  fs.filter(file => !(file.dir === "documents" && file.filename === "report.txt"))
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
          "type": "UnaryExpression",
          "operator": "!",
          "prefix": true,
          "argument": {
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
                "value": "documents"
              }
            },
            "operator": "&&",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "name": "file"
                },
                "property": {
                  "type": "Identifier",
                  "name": "filename"
                }
              },
              "operator": "===",
              "right": {
                "type": "StringLiteral",
                "value": "report.txt"
              }
            }
          }
        }
      }
    }
  }
}
```
