Read a file
```javascript
async function getFiles() {
  const file = fs.find(file => file.dir === "/some/path" && filename === "report.txt");
  console.log(file.contents);
}
```

```json
{
  "type": "CallExpression",
  "callee": {
    "type": "MemberExpression",
    "object": {
      "type": "Identifier",
      "name": "fs"
    },
    "property": {
      "type": "Identifier",
      "name": "find"
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
        "operator": "&&",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "name": "filename"
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
```
