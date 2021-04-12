// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const Node = function (data) {
  this.data = data;
  this.next = null;
};

class Queue {
  constructor(head = 0, tail = 0) {
    this.head = head;
    this.tail = tail;
  }

  get size() {
    return this.tail - this.head;
  }

  enqueue(element) {
    const newNode = new Node(element);

    if (this.head === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    let newNode;
    if (this.head !== 0) {
      newNode = this.head.data;
      this.head = this.head.next;
    }
    return newNode;
  }
}

module.exports = Queue;
