const Queue = require("./queue");
const Stack = require("./stack");

function reverseString(str) {
    let stack = new Stack();
    let reversed = "";

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    for (let i = 0; i < str.length; i++) {
        reversed += stack.pop();
    }

    return reversed;
}

// I'm sorry, I can't do any of the other ones.

module.exports = {
    reverseString
}