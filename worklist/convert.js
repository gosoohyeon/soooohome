
const fs = require('fs');

const csvFile = fs.readFileSync('./src/assets/ia-csv2.csv').toString();
let json = [];
let keys = [];
let list = [];
const csvArr = csvFile.replace('\r','').split('\n');
const header = csvArr[0].split(',');


keys[0]='worklist-status';
for (let k=0; k<header.length; k++){
  keys[1+k] = header[k];
}
keys[keys.length]='worklist-path';
keys[keys.length]='worklist-note';

for (let i=1; i<csvArr.length; i++){
  let obj = {};
  const row = csvArr[i].split(',');

  obj['worklist-status']='';
  for (let k=0; k<header.length; k++){
    obj[header[k]] = row[k];
  }
  obj['worklist-path']='';
  obj['worklist-note']='';
  list.push(obj);
}
json = JSON.stringify({'keys':keys, 'lists':list});
// json = JSON.stringify(list);

fs.writeFileSync('./src/assets/ia-json.json',json)