'use strict';

const Node = require('./node');
const LinkedList = require('./linked-list');

module.exports = class Stack {
  constructor() {
    this.storage = new LinkedList();
  }

  push(value) {
    const node = new Node(value);
    node.next = this.storage.head;
    this.storage.head = node;
  }

  pop() {
    const temp = this.storage.head;
    this.storage.head = this.storage.head.next;
    return temp;
  }

  peek() {
    return this.storage.head;
  }

  isEmpty() {
    if (this.storage.head === null) {
      return true;
    }
    return false;
  }
};

