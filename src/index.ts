export const Reverse = (input: string) =>
  `${input
    .replace(/[^0-9a-z]/gi, '')
    .split('')
    .reverse()
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join('')}`;

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Write your string: ', (answer: any) => {
  let start = process.hrtime();

  let ans = Reverse(answer);

  let stop = process.hrtime(start);

  console.log(ans);

  let processed = {
    input: answer,
    output: ans,
    duration: ((stop[0] * 1e9 + stop[1]) / 1e9).toString(),
  };

  fs.writeFile('processed.json', JSON.stringify(processed), (err: any) => {
    if (err) {
      throw err;
    }
    console.log('JSON data is saved.');
  });
  rl.close();
});
