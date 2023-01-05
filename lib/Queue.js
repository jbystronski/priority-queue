class Queue {
  tail = 0;
  head = 0;
  queue = [];

  enqueue(value) {
    this.queue.push(value);
    this.tail++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const value = this.queue[this.head];
    delete this.queue[this.head];
    this.head++;
    return value;
  }

  isEmpty() {
    return this.head - this.tail === 0;
  }

  getSizeOf() {
    return this.tail - this.head;
  }

  peek() {
    return this.queue[this.head];
  }
}

module.exports = Queue;
