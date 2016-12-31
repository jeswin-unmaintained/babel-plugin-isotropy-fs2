async function readFile() {
  const file = fs.find(file => file.dir === "/some/path" && filename === "report.txt");
  console.log(file.contents);
}
