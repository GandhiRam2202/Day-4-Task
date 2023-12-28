// 1.Do the below programs in anonymous function & IIFE


// A.Print odd numbers in an array using Anonymous function


let inputArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

let printOddNumbers = function(inputArray)
 {
    let arr=[];
    for (let ind = 0; ind < inputArray.length; ind++) {
        if (inputArray[ind] % 2 !== 0) {
            arr.push(inputArray[ind]);
        }
    }
    return arr;
};

console.log("Anonymous Output Odd: ",printOddNumbers(inputArray));


// A.Print odd numbers in an array using IIFE function


let odd=(function(inputArray) {
    let arr=[];
    for (let ind = 0; ind < inputArray.length; ind++) {
        if (inputArray[ind] % 2 !== 0) {
            arr.push(inputArray[ind]);
        }
    }
    return arr;
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);

console.log("IIFE Output Odd: ",odd)


// B.Convert all the strings to title caps in a string array using Anonymous function


let stringArray = ["parthiihtrap", "ramar", "amma", "appa", "deed", "apple"];

let titleCaps = function(arr) {
    for (let ind = 0; ind < arr.length; ind++) {
        arr[ind] = arr[ind].replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    return arr;
};

console.log("Anonymous Output Title Cap: ",titleCaps(stringArray));


// B.Convert all the strings to title caps in a string array using IIFE function


let intCap=(function(arr) {
    for (let ind = 0; ind < arr.length; ind++) {
        arr[ind] = arr[ind].replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
        
    }
    return arr;
})(["parthiihtrap", "ramar", "amma", "appa", "deed", "apple"]);

console.log("IIFE Output Title Cap: ",intCap);


// C.Sum of all numbers in an array using Anonymous function


let number = [1, 2, 3, 4, 5];

let sum = function(arr) {
    let result = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        result += arr[ind];
    }
    return result;
};

console.log("Anonymous Output Sum : ",sum(number));


// C.Sum of all numbers in an array using IIFE function


let sum1 = (function(arr) {
    let result = 0;
    for (let ind = 0; ind < arr.length; ind++) {
        result += arr[ind];
    }
    return result;
})([1, 2, 3, 4, 5]);

console.log("IIFE Output Sum : ",sum1);


// D.Return all the prime numbers in an array using Anonymous function


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimes = function(arr) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > 1) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(num);
            }
        }
    }
    return primes;
};


console.log("Anonymous Output Prime Number : ",findPrimes(numbers));


// D.Return all the prime numbers in an array using IIFE function


let primeNumbers1 = (function(arr) {
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > 1) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(num); j++) {
                if (num % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(num);
            }
        }
    }
    return primes;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("IIFE Output Prime Number : ",primeNumbers1);


// E.Return all the palindromes in an array using Anonymous function


let words = ["parthiihtrap", "ramar", "amma", "appa", "deed", "apple"];

let getPalindromes = function(arr) {
    let palindromeWords = [];
    
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];
    
        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
        const reversedStr = cleanedStr.split('').reverse().join('');
        
        if (cleanedStr === reversedStr) {
            palindromeWords.push(str);
        }
    }
    
    return palindromeWords;
};


console.log("Anonymous Output Plaindromes : ",getPalindromes(words));


// E.Return all the palindromes in an array using IIFE function


let palindromeWords1 = (function(arr) {
    let palindromes = [];
    
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i];

        const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        const reversedStr = cleanedStr.split('').reverse().join('');
        
        if (cleanedStr === reversedStr) {
            palindromes.push(str);
        }
    }
    
    return palindromes;
})(["parthiihtrap", "ramar", "amma", "appa", "deed", "apple"]);


console.log("IIFE Output Plaindromes : ",palindromeWords1);


// F.Return median of two sorted arrays of the same size using Anonymous function


let findMedianSortedArrays = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });
    const len = mergedArray.length;
    const middle = Math.floor(len / 2);
    if (len % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        return mergedArray[middle];
    }
};

let arr1 = [1,3,5];
let arr2 = [2,4,6];

let median = findMedianSortedArrays(arr1, arr2);
console.log("Anonymous Output Median : ", median);


// F.Return median of two sorted arrays of the same size using IIFE function


let median1 = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort(function(a, b) {
        return a - b; 
    });
    const length = mergedArray.length;
    const middle = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        return mergedArray[middle];
    }
})([1,2,3,4,5,6,7,8,9,10], [1,2,3,4,5,6,7,8,9,10]);

console.log("IIFE Output Median : ", median1);


// G.Remove duplicates from an array using Anonymous function


const origArray = [1,2,3,1,2,3,4,2,5,6,1];

const removeDuplicates = function (arr) {
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;
};

console.log("Anonymous Output Remove Duplicate: ",removeDuplicates(origArray));


// G.Remove duplicates from an array using IIFE function


const uniqueArray = (function(arr) {
    const uniqueArray = [];

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (!uniqueArray.includes(item)) {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
})([1,2,3,1,2,3,4,2,5,6,1]);


// H.Rotate an array by k times using Anonymous Function


console.log("IIFE Output Remove Duplicate : ",uniqueArray);

const rotateArray = function (arr, k) {
    const n = arr.length;
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));
    return rotatedArray;
};

const originalArray = [1, 2, 3, 4, 5];
const k = 2;

console.log("Original Array:", originalArray);
console.log("Anonymous Output Rotate Array : ",rotateArray(originalArray, k));


// H.Rotate an array by k times using IIFE function


const rotatedArray = (function (arr, k) {
    const n = arr.length;
    
    const rotatedArray = arr.slice(n - k).concat(arr.slice(0, n - k));

    return rotatedArray;
})([1, 2, 3, 4, 5], 9);

console.log("IIFE Output Rotated Array: ", rotatedArray);


