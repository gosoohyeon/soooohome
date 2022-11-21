
const fs = require('fs');

const csvFile = fs.readFileSync('./src/assets/ia-csv2.csv').toString();
let json = [];
const csvArr = csvFile.split('\n');
const header = csvArr[0].split(',');

for (let i=1; i<csvArr.length; i++){
  let obj = {};
  const row = csvArr[i].split(',');
  for (let k=0; k<header.length; k++){
    obj[header[k]] = row[k];
  }
  obj['worklist-path']='';
  obj['worklist-note']='';
  json.push(obj)
}
json = JSON.stringify(json);

fs.writeFileSync('./src/assets/ia-json.json',json)