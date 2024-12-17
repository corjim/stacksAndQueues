class Queue {
    constructor() {
        this.data = [];
    }

    // Add an element to the end of the queue
    enqueue(val) {
        this.data.push(val);
    }

    // Remove and return the first element of the queue
    dequeue() {
        return this.data.shift();
    }

    // Return the size of the queue
    size() {
        return this.data.length;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size() === 0;
    }
}

function josephusProblem(n, k) {
    const queue = new Queue();

    // Initialize the queue with people 1 to n
    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    while (queue.size() > 1) {
        // Skip the first (k-1) people by moving them to the back of the queue
        for (let i = 1; i < k; i++) {
            queue.enqueue(queue.dequeue());
        }

    }

    // The last remaining person
    return queue.dequeue();
}
