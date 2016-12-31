async function updateFile() {
  fs =  fs.map(file => file.dir === "documents" && file.filename === "report.txt") ?
    { contents: "hello, universe", ...file } : file;
}
