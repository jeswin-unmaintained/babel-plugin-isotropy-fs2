async function deleteFile() {
  await isotropyFS.deleteFile("documents", "report.txt");
}
