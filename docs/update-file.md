Update a file
```javascript
async function updateFile() {
  fs =  fs.map(file => file.dir === "documents" && file.filename === "report.txt") ?
    { contents: "hello, universe", ...file } : file;
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
    "type": "ConditionalExpression",
    "test": {
      "type": "CallExpression",
      "callee": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "name": "fs"
        },
        "property": {
          "type": "Identifier",
          "name": "map"
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
    },
    "consequent": {
      "type": "ObjectExpression",
      "properties": {
        "0": {
          "type": "ObjectProperty",
          "method": false,
          "key": {
            "type": "Identifier",
            "name": "contents"
          },
          "value": {
            "type": "StringLiteral",
            "value": "hello, universe"
          }
        },
        "1": {
          "type": "SpreadProperty",
          "argument": {
            "type": "Identifier",
            "name": "file"
          }
        }
      }
    },
    "alternate": {
      "type": "Identifier",
      "name": "file"
    }
  }
}
```
