async function updateFile() {
  await isotropyFS.updateFile("documents", "report.txt", "hello, universe");
}
