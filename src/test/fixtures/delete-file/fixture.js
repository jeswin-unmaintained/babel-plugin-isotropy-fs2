async function deleteFile() {
  fs =  fs.filter(file => !(file.dir === "documents" && file.filename === "report.txt"))
}
