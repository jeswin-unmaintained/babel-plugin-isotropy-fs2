async function getFiles() {
  return await isotropyFS.getFiles("/some/path", true);
}
