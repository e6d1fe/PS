const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const commands = input.slice(1).map((command) => command.split(' '));

const results = [];

const stack = [];

for (const command of commands) {
  switch (command[0]) {
    case 'push':
      stack.push(command[1]);
      break;
    case 'pop':
      results.push(stack.length ? stack.pop() : -1);
      break;
    case 'size':
      results.push(stack.length);
      break;
    case 'empty':
      results.push(stack.length ? 0 : 1);
      break;
    case 'top':
      results.push(stack.length ? stack[stack.length - 1] : -1);
      break;
  }
}

console.log(results.join('\n'));
