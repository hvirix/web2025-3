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

