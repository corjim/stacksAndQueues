// Deque implementation using a doubly-linked list
class Deque {
    constructor() {
        this.head = null; // Points to the front of the deque
        this.tail = null; // Points to the rear of the deque
        this.length = 0;  // Tracks the size of the deque
    }

    // pushFront(val): Add a new value to the front of the deque 
    pushFront(val) {
        const newNode = new Node(val);

        if (!this.head) { // Deque is empty
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
    }

    //pushBack(val): Add a new value to the rear of the deque
    pushBack(val) {
        const newNode = new Node(val);

        if (!this.tail) { // Deque is empty
            this.head = this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    // popFront(): Remove and return the value at the front of the deque 
    popFront() {
        if (this.isEmpty()) throw new Error("Deque is empty.");

        const removedVal = this.head.val;

        if (this.head === this.tail) { // Only one node exists
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return removedVal;
    }

    // popBack(): Remove and return the value at the rear of the deque
    popBack() {
        if (this.isEmpty()) throw new Error("Deque is empty.");

        const removedVal = this.tail.val;

        if (this.head === this.tail) { // Only one node exists
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedVal;
    }

    // peekFront(): Return the value at the front without removing it 
    peekFront() {
        if (this.isEmpty()) throw new Error("Deque is empty.");
        return this.head.val;
    }

    // peekBack(): Return the value at the rear without removing it
    peekBack() {
        if (this.isEmpty()) throw new Error("Deque is empty.");
        return this.tail.val;
    }

    // isEmpty(): Check if the deque is empty
    isEmpty() {
        return this.length === 0;
    }

    // size(): Return the number of elements in the deque 
    size() {
        return this.length;
    }
}
