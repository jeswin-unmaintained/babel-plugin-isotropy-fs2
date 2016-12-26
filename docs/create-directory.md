Create a directory
```javascript
fs = fs.concat({ name: "myDir", files: [] })
```

Add a file in directory
```javascript
fs =  fs.map(dir => dir.name === "myDir" ? dir.concat({ name: "myFile", contents: "hello, world" }) : dir);
```

Add a sub-directory
```javascript
fs =  fs.map(dir => dir.name === "myDir" ? dir.concat({ name: "mySubDir", contents: [] }) : dir);
```
