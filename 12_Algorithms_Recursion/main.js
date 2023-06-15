"use strict";

// Stack Overflow:
function callItself() {
    callItself();
}

callItself();   // RangeError: Maximum call stack size exceeded
