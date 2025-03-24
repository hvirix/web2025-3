const { program } = require ('commander');
const fs = require ('node:fs');

program
  .option('-i, --input <path>')
  .option('-o, --output <path>')
  .option('-d, --display')

program.parse();

const options = program.opts();
if (!options.input) {
  console.log('Please, specify input file');
  return;
}

if (!fs.existsSync(options.input)) {
  console.log('Cannot find input file');
  return;
}

fs.readFile(options.input, 'utf8', (err, data) => {
  let parsedData = JSON.parse(data);
  const finalData = parsedData
    .map((item) => `${item.exchangedate}:${item.rate}`)
    .join('\n');

  if (options.output){
    fs.writeFile(options.output, finalData, 'utf-8', (err) => {})
  }
  if(options.display){
    console.log(finalData);
  }
})