const os = require("os");
const path = require("path");

const user = os.type(); // Windows_NT
console.log(user);

const abc = os.totalmem(); // 12560961536
console.log(abc);


const joinPath = path.join("/content/", "value", "text.js");  // \content\value\text.js
console.log(joinPath)

const basename = path.basename(joinPath); // text.js
console.log(basename)

const absolute = path.resolve(__dirname, "value", "text.js");//  C:\Users\Mg\Desktop\node\value\text.js
console.log(absolute)
