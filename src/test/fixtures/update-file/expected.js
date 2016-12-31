async function updateFile() {
  await istropyFS.updateFile("documents", "report.txt", "hello, universe");
}
