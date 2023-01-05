const Queue = require("./Queue");

class PriorityQueue {
  queue = {};
  head = 0;

  constructor(maxPriority = 0) {
    this.maxPriority = Math.max(maxPriority, 0);
  }

  enqueue(value, priority = 0) {
    priority = Math.min(Math.max(priority, 0), this.maxPriority);
    this.head = Math.max(priority, this.head);

    if (!Object.hasOwn(this.queue, priority))
      this.queue[priority] = new Queue();
    this.queue[priority].enqueue(value);

    return this;
  }

  dequeue() {
    if (!this.queue[this.head].isEmpty())
      return this.queue[this.head].dequeue();

    if (this.head === 0) return undefined;

    this.head -= 1;

    return this.dequeue();
  }

  peek() {
    return this.queue[this.head].peek();
  }

  clear() {
    this.queue = {};
  }
}

module.exports = PriorityQueue;
