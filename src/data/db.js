// const path = require("path");
// const fs = require("fs");

// const _getAllFilesFromFolder = function (dir) {
//   var filesystem = require("fs");
//   var results = [];

//   filesystem.readdirSync(dir).forEach(function (file) {
//     file = dir + "/" + file;
//     var stat = filesystem.statSync(file);

//     if (stat && stat.isDirectory()) {
//       results = results.concat(_getAllFilesFromFolder(file));
//     } else results.push(file);
//   });

//   return results;
// };

// const getFileNameFromPath = (filePath) => {
//   // Split the file path based on the directory separator
//   const pathArray = filePath.split(/[\\/]/);

//   // Access the last element of the array (file name with extension)
//   const fileNameWithExtension = pathArray[pathArray.length - 1];

//   // Split the file name using the dot (.) as the separator
//   const fileNameArray = fileNameWithExtension.split(".");

//   // Return the first element of the array (file name without extension)
//   return fileNameArray[0];
// };

// const directoryPath = path.resolve(__dirname, "./paragraphs");

// const files = _getAllFilesFromFolder(__dirname + "/paragraphs");

// const paragraphData = {};

// for (let file of files) {
//   let content = fs.readFileSync(file);
//   let key = getFileNameFromPath(file);
//   paragraphData[key] = JSON.parse(content);
// }

// const getPageParagraphs = (product, page) => {
//   return paragraphData[product][page];
// };

// export {getPageParagraphs}