async function deleteFile() {
  await istropyFS.deleteFile("documents", "report.txt");
}
