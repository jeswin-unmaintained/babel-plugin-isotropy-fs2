async function readFile() {
  const file = await istropyFS.readFile("/some/path", "report.txt");
  console.log(file.contents);
}
