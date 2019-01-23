const zlib = require("zlib");
const gzip = zlib.createGzip();
const fs = require("fs");
const inp = fs.createReadStream("package.json");
const out = fs.createWriteStream("input.txt.gz");
inp.pipe(gzip).pipe(out);
