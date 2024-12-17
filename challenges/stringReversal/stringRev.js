// Node class for the linked list stack
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Stack class implemented using a linked list
class Stack {
    constructor() {
        this.top = null; // The top node in the stack
        this.size = 0;
    }

    // Push a value onto the stack
    push(val) {
        const newNode = new Node(val);
        newNode.next = this.top; // Link the new node to the current top
        this.top = newNode; // Set the new node as the top
        this.size++;
    }

    // Pop a value from the stack
    pop() {
        if (this.top === null) throw new Error("Stack is empty!");
        const poppedValue = this.top.value;
        this.top = this.top.next; // Move the top to the next node
        this.size--;
        return poppedValue;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }
}

// Function to reverse a string using the Stack
function reverseString(input) {
    const stack = new Stack();
    let reversed = "";

    // Push each character of the string onto the stack
    for (let i = 0; i < input.length; i++) {
        stack.push(input[i]);
    }

    // Pop each character from the stack to form the reversed string
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }

    return reversed;
}

