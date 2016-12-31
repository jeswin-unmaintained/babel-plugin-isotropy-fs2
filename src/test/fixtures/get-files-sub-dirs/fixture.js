async function getFiles() {
  return fs.filter(file => file.dir === "/some/path" || file.dir.startsWith("/some/path/"))
}
