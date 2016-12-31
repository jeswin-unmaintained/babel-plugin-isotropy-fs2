async function getFiles() {
  return await istropyFS.getFiles("/some/path", false);
}
