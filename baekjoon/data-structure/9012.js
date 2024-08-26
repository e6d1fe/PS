const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const parenthesisStrings = input.slice(1);

function checkVPS(parenthesisString) {
  let stack = 0;

  for (const parenthesis of parenthesisString) {
    if (parenthesis === '(') {
      stack += 1;
    } else if (parenthesis === ')' && stack > 0) {
      stack -= 1;
    } else {
      return false;
    }
  }

  return stack === 0;
}

const result = [];

for (const parenthesisString of parenthesisStrings) {
  result.push(checkVPS(parenthesisString) ? 'YES' : 'NO');
}

console.log(result.join('\n'));
