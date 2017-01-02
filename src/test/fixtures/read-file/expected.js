async function readFile() {
  const file = await isotropyFS.readFile("/some/path", "report.txt");
  console.log(file.contents);
}
