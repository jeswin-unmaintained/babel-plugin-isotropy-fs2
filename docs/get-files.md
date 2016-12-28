Get files in directory
```javascript
async function getFiles() {
  return fs.filter(file => file.dir === "/some/path")
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
      }
    }
  }
}
```
