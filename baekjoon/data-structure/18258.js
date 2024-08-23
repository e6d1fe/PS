const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('\n');
const commands = input.slice(1).map((command) => command.split(' '));

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length += 1;
  }

  pop() {
    if (this.head) {
      const popped = this.head.data;
      this.head = this.head.next;
      this.length -= 1;
      return popped;
    }
    return -1;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.head ? 0 : 1;
  }

  front() {
    if (this.head) {
      return this.head.data;
    }
    return -1;
  }

  back() {
    if (this.head) {
      return this.tail.data;
    }
    return -1;
  }
}

const queue = new Queue();

let answer = '';

for (const command of commands) {
  if (command.length === 1) {
    const result = queue[command[0]]();
    if (result !== undefined) answer += result + '\n';
  } else {
    const result = queue[command[0]](command[1]);
    if (result !== undefined) answer += result + '\n';
  }
}

console.log(answer);
