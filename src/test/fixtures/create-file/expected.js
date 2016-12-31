async function createFile() {
  await isotropyFS.createFile("documents", "report.txt", "hello, world");
}
