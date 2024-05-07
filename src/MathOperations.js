//25.03.2024 Monday

class MathString {
    /**
     * Constructor for creating a MathString object.
     * @param {string} value - The string representing a large number. Must contain only digits.
     */
    constructor(value) {
        if (typeof value !== "string") {
            throw new Error("Value must be a string.");
        }

        if (!/^\d+$/.test(value)) { // Checks that passed string includes only number values
            throw new Error("Value must contain only digits.");
        }
        if (value.length === 0) {
            throw new Error("Value cannot be an empty string.");
        }
        this.value = value;
    }

    /**
     * Compares two string numbers to determine if the first is greater than the second.
     * @param {string} a - The first number as a string.
     * @param {string} b - The second number as a string.
     * @returns {boolean} True if 'a' is greater than 'b', false otherwise.
     */

    isAGreaterThanB(a, b) {
        if (a.length < b.length) { // If the length of 'a' is less than the length of 'b', 'a' cannot be greater than 'b'
            return false;
        } else if (a.length > b.length) { // If the length of 'a' is greater than the length of 'b', 'a' is greater than 'b'
            return true;
        }
        // Compares strings from left to right and compares the numeric values of each character in the strings
        for (let i = 0; i < a.length; i++) {
            if (parseInt(a[i], 10) < parseInt(b[i], 10)) { // If the numeric value of character at index 'i' in 'a' is less than that of 'b', 'a' is not greater than 'b'
                return false;
            } else if (parseInt(a[i], 10) > parseInt(b[i], 10)) { // If the numeric value of character at index 'i' in 'a' is greater than that of 'b', 'a' is greater than 'b'
                return true;
            }
        }

        return false; // If all characters are equal, 'a' is not greater than 'b'
    }


    /**
     * Adds a string-represented number to the current MathString value.
     * @param {string} string - The number to add, as a string.
     * @returns {string} The result of the addition as a string.
     */
    plus(string) {
        let i = this.value.length - 1,
            j = string.length - 1,
            memo = 0,    // A variable that stores 1 or 0 when the sum of numeric values is larger than 10
            result = "";
        // Iterates over the strings from right to left and adds the numeric values of each character in the strings
        while (i >= 0 || j >= 0 || memo > 0) {
            let sum = memo; // The sum is initialized with the value of memo from the last comparison, or with zero if it's the first iteration
            if (i >= 0) {
                sum += parseInt(this.value[i], 10);  // Increment the sum with the numeric value of the character
                i--;
            }
            if (j >= 0) {
                sum += parseInt(string[j], 10); // Increment the sum with the numeric value of the character
                j--;
            }
            result = String(sum % 10) + result; // Place the sum (or modulo of sum) at the beginning of the current result
            memo = Math.floor(sum / 10); // If the sum is greater than 10, memo is set to 1, otherwise memo is 0
        }

        return result;
    }


    /**
     * Subtracts a string-represented number from the current MathString value.
     * @param {string} string - The number to subtract, as a string.
     * @returns {string} The result of the subtraction as a string.
     */
    /**
     * Subtracts the given number from the main number.
     * @param {string} string The number to be subtracted.
     * @returns {string} The result of the subtraction.
     */
    minus(string) {
        const mainValue = this.value;
        // Checks if the main number is greater than the given number
        if (!this.isAGreaterThanB(mainValue, string)) {
            return "Error: the number given is smaller or equal to the main number";
        }

        let i = mainValue.length - 1,
            j = string.length - 1,
            borrow = 0, // A variable that stores the borrowed value to subtract if the numeric value of the main character is lesser than the given character
            result = "";

        // Iterates over the strings from right to left and subtracts the numeric values of each character in the strings
        while (i >= 0) {
            // Subtract the numeric value of the given character (if it exists, if not subtract zero) and the borrowed value from the numeric value of the main character
            let diff = parseInt(mainValue[i], 10) - (j >= 0 ? parseInt(string[j], 10) : 0) - borrow;

            // If the subtraction result is lesser than zero, add 10 to the result and set the value of the borrow to 1
            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0; // If not, set the borrow to 0
            }
            // Place the result of the subtraction at the beginning of the current result
            result = String(diff) + result;
            i--;
            j--;
        }
        // Removes additional leading zeros from the result
        return result.replace(/^0+/, "");
    }


    /**
     * Multiplies the current MathString value by another string-represented number.
     * @param {string} string - The number to multiply by, as a string.
     * @returns {string} The result of the multiplication as a string.
     */
    multiply(string) {
        if (this.value === "0" || string === "0") return "0";
        let result = Array(this.value.length + string.length).fill(0);
        for (let i = this.value.length - 1; i >= 0; i--) {
            for (let j = string.length - 1; j >= 0; j--) {
                const multiply = parseInt(this.value[i], 10) * parseInt(string[j], 10);
                const sum = result[i + j + 1] + multiply;
                result[i + j + 1] = sum % 10;
                result[i + j] += Math.floor(sum / 10);
            }
        }
        return result.join("").replace(/^0+/, "");
    }

    /**
     * Divides the current MathString value by another string-represented number.
     * @param {string} string - The divisor, as a string.
     * @returns {string} The quotient of the division as a string, or an error message for division by zero.
     */
    divide(string) {
        if (string === "0") {
            return "Error: Division by zero.";
        }
        if (!this.isAGreaterThanB(this.value, string)) {
            return "Error: number given is smaller or equal to main";
        }

        let dividend = 0,
            result = "";
        for (let i = 0; i < this.value.length; i++) {
            dividend = dividend * 10 + parseInt(this.value[i], 10);
            let quotient = Math.floor(dividend / parseInt(string, 10));
            result += String(quotient);
            dividend -= quotient * parseInt(string, 10);
        }
        return result.replace(/^0+/, "") || "0";
    }
}

/**
 try {
 let mathString = new MathString("5678");

 console.log(mathString.plus("2333"));
 console.log(mathString.minus("1189"));
 console.log(mathString.multiply("111111111"));
 console.log(mathString.divide("283"));
 } catch (error) {
 console.error("Something goes wrong: ", error.message);
 }
 */