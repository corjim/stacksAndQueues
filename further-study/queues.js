//  use a LinkedList class internally to manage your stack or your queue:

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToEnd(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    removeFromStart() {
        if (!this.head) throw new Error("Can't dequeue from an empty queue.");
        const removedVal = this.head.val;
        this.head = this.head.next;
        if (!this.head) this.tail = null; // If the list is now empty
        this.length--;
        return removedVal;
    }

    peek() {
        if (!this.head) throw new Error("Queue is empty.");
        return this.head.val;
    }

    isEmpty() {
        return this.length === 0;
    }
}

class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    // enqueue(val) add new value to end of the queue.
    enqueue(val) {
        this.list.addToEnd(val);
    }

    // dequeue() remove the node from the start of the queue and return its value. 
    dequeue() {
        return this.list.removeFromStart();
    }

    // peek() return the value of the first node in the queue. 
    peek() {
        return this.list.peek();
    }

    // isEmpty() return true if the queue is empty, otherwise false.
    isEmpty() {
        return this.list.isEmpty();
    }
}


module.exports = { Queue };