const Stack = require('../lib/stack');

describe('stack.js', () => {
  test('#constructor', () => {
    const testStack = new Stack();
    expect(testStack.storage.head).toBeNull();
  });

  test('#push', () => {
    const testStack = new Stack();
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);
    expect(testStack.storage.head.value).toEqual(7);
    expect(testStack.storage.head.next.value).toEqual(6);
    expect(testStack.storage.head.next.next.value).toEqual(5);
  });

  test('#pop', () => {
    const testStack = new Stack();
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);
    const pop1 = testStack.pop();
    expect(pop1.value).toEqual(7);
    const pop2 = testStack.pop();
    expect(pop2.value).toEqual(6);
    const pop3 = testStack.pop();
    expect(pop3.value).toEqual(5);
  });

  test('#peek', () => {
    const testStack = new Stack();
    testStack.push(5);
    const peek1 = testStack.peek();
    expect(peek1.value).toEqual(5);
    testStack.push(6);
    const peek2 = testStack.peek();
    expect(peek2.value).toEqual(6);
    testStack.push(7);
    const peek3 = testStack.peek();
    expect(peek3.value).toEqual(7);
  });
  test('#isempty', () => {
    const testStack = new Stack();
    const test = testStack.isEmpty();
    expect(test).toEqual(true);
    testStack.push(5);
    testStack.push(6);
    testStack.push(7);
    const test2 = testStack.isEmpty();
    expect(test2).toEqual(false);
  });
});
