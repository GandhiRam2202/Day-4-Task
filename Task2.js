// 2.Do the below programs in arrow functions.


// A.Print odd numbers in an array

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array=[];
const printOddNumbers = arr => {
    for (let ind = 0; ind < arr.length; ind++) {
        const num = arr[ind];
        if (num % 2 !== 0) {
           array.push(arr[ind])
        }
    }
    return array;
};

console.log("Odd Numbers From Araay : ",printOddNumbers(myArray));


// B.Convert all the strings to title caps in a string array


const stringArray = ["hello world", "good morning", "happy new year"];

const titleCase = stringArray.map(str => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
});

console.log("Converted Title Case : ",titleCase);


// C.Sum of all numbers in an array


const numbersArray = [1, 2, 3, 4, 5];

const sum = (() => {
    let result = 0;
    for (let num of numbersArray) {
        result += num;
    }
    return result;
})();

console.log("Sum of all Numbers in Array : ",sum);


// D.Return all the prime numbers in an array


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const primeNumbersArray = (() => {
    const result = [];
    for (let num of numberArray) {
        if (isPrime(num)) {
            result.push(num);
        }
    }
    return result;
})();

console.log("Prime Numbers : ",primeNumbersArray);


// E.Return all the palindromes in an array


const wordsArray = ["parthiihtrap", "ramar", "amma", "appa", "deed", "apple"];
const isPalindrome = str => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};



const palindromeArray = (() => {
    const result = [];
    for (let word of wordsArray) {
        if (isPalindrome(word)) {
            result.push(word);
        }
    }
    return result;
})();

console.log("Palindrome Array : ", palindromeArray);
