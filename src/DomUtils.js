

/**
 * Creates a function that delays the execution of the provided function by a specified time.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function debounce(fn, delay) {
    let letTimeout;                        // Variable to control timing

    return function (...args) {
        clearTimeout(letTimeout);        // Clear the delay if it exists, reset the timer
        letTimeout = setTimeout(() => fn(...args), delay); // Bind the timer to a variable to make it possible to reset it,
        // when the function is called,
        // before the end of the time
    };
}


/**
 * Calls the provided function with a delay to prevent too frequent calls.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */
function throttle(fn, delay) {
    let flag = true;      // Flag specified that callback is able to be called

    return (...args) => {     // Callback function with variable number of arguments
        if (flag) {
            fn(...args);    // Call / Invoke callback with arguments
            flag = false;   //  Set the flag to false value, block next  callback invocation
            setTimeout(() => (flag = true), delay); //  Set the flag to true after the specified delay
            // allowing the callback to be invoked again

        }
    };
}

/**
 * Calls the provided function with a delay, but only once if subsequent calls occur before the previous delay completes.
 * @param {Function} fn Function to delay.
 * @param {number} delay Delay in milliseconds.
 * @returns {Function} Delayed function.
 */

// The throttleWithWaitingArguments function controls the frequency of calls to the fn function depending on the specified delay.
// Additionally, it stores arguments that were skipped, allowing them to be used in the next invocation of the function.

function throttleWithWaitingArguments(fn, delay) {
    let flag = false; // Flag indicating whether the function can be called
    let waitingArgs; // Data stored between function calls

    // The timeoutFunction is called after the specified delay,
    // allowing the callback to be invoked again with the waiting arguments.
    const timeoutFunction = () => {
        if (waitingArgs == null) { // If there are no waiting arguments, set the flag to false
            flag = false;
        } else { // If there are waiting arguments, invoke the callback with them
            fn(...waitingArgs);
            waitingArgs = null; // Clear the stored arguments
            setTimeout(timeoutFunction, delay); // Set the delay again
        }
    };

    // Returns a callback function acting as a throttle function
    return (...args) => {
        if (flag) { // If the flag is true, it means the last call of the function wasn't finished (the timer hasn't ended)
            waitingArgs = args; // Stores the passed arguments for later use
            return; // Interrupts the function
        }

        fn(...args); // Calls the function with the passed arguments
        flag = true; // Sets the flag to true to indicate that the function is currently invoking
        setTimeout(timeoutFunction, delay); // Sets the delay to permit the next function call
    };
}



/**
 * Creates a curried version of the provided function.
 * @param {Function} func Function to be curried.
 * @param {number} arity Number of arguments the function expects.
 * @returns {Function} Curried function.
 */
/**
 * Creates a curried version of the provided function.
 * @param {Function} func The function to be curried.
 * @param {number} arity The number of arguments the function expects.
 * @returns {Function} The curried function.
 */
const curry = (func, arity = func.length) => function curried(...args) {
    if (arity === args.length) { // If the number of passed arguments matches the arity value, returns the output of the called function
        return func(...args);
    } else { // If not, collects the next arguments and recursively invokes the function after adding new arguments to the older ones
        let result = (...newArgs) => curried(...args, ...newArgs);
        return result;
    }
};



//Task 6.a: Currying Function Implementation (extended)

/**
 * Creates a curried version of the provided function allowing partial application with placeholders.
 * @param {Function} func The function to be curried.
 * @param {number} arity The number of arguments the function expects.
 * @returns {Function} The curried function.
 */
const curryExt = (func, arity = func.length) => function curried(...args) {
    if (arity === args.length && !args.includes("_")) {
        // If the number of passed arguments matches the arity value and there are no placeholders,
        // returns the output of the called function
    } else { // If not, collects the next arguments, replaces placeholders with arguments,
        // and recursively invokes the function after adding new arguments to the older ones
        return (...newArgs) => {
            const filledArgs = args.map((arg) => arg === "_" ? newArgs.shift() || "_" : arg);
            return curried(...filledArgs, ...newArgs);
        };
    }
};
