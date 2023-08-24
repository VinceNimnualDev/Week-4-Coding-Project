
//Prompt 1. Age Array
console.log('Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.');
const ages = [3, 9, 23, 64, 2, 8, 28, 93]; // ages array
console.log(ages); // print ages array

// Prompt 1a Difference between the last and first element
console.log('Prompt 1:');
console.log('1A: Programmatically subtract the value of the first element in the array from the value in the last element of the array.');
const lastIndex = ages.length - 1; // declares new varable, lastIndex, and stores last element in array ages
const difference = ages[lastIndex] - ages[0]; // declares new variable, difference, and takes last element in the array and minuses by first element in the index
console.log(`Difference is ${difference}`); // Prints results to console

// Prompt 1b Add new age to ages array
console.log('1B: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).');
const newAge = 42; // declares variable, newAge, and set it to 42
ages.push(newAge); // sets the newAge value and pushes it to the age array above
console.log(ages); // prints ages with new last element newAge

//Prompt 1b Calculate the difference using new age
const newLastIndex = ages.length - 1; // declares new variable, newLastIndex, and stores new last element in array ages
const newAgeDifference = ages[newLastIndex] - ages[0]; // declares variable, newAgeDifference, and takes last element minus first elemend in the index
console.log(`New age difference is ${newAgeDifference}`); // Prints new results to console

// Prompt 1c Calculate the average age of the array using a loop
console.log('1C: Use a loop to iterate through the array and calculate the average age.');
let sum = 0; //declares sum at stores it at 0
for (let i = 0; i < ages.length; i++) { // loop commands to go through array ages
    sum += ages[i]; //takes sum of all elements in array ages
}
const averageAge = sum / ages.length; // declares new varaible, averageAge, and finds average using sum of array divdes by all elements of the array ages
console.log(`Average age: ${averageAge}`); // prints aveargeAge to console

// 2. Name Array
console.log('Prompt 2:')
console.log("Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.");
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck','Bob']; // Sets all names in array
console.log(names); // Prints names in array names

// 2a. Use loop to calculate average number of letters per name
console.log("2A: Use a loop to iterate through the array and calculate the average number of letters per name.");
let totalLetters = 0; // delcares new variable, totalLetters, and sets it to 0
for (i = 0; i < names.length; i++) { //loop condition that iterates all elements within array names and increases by 1 each time
    totalLetters += names[i].length // takes the sum of all letters in the the names array
}
const averageLetters = totalLetters / names.length; // declares averageLetters as variable and takes in the total number of letters divided by names in array
console.log(`Average number of letters per name: ${averageLetters}`); // prints out averageLetters to console

// Use loop to concatenate all the names together
console.log("2B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let concatNames = ''; //declares concatNames as variable and sets it to null
for (i = 0; i < names.length; i++) { 
    concatNames += names[i]; // takes names at strings them together
    if (i < names.length - 1) {
        concatNames += ' '; // takes names in array and adds space in between up to the last element
    }

};
console.log (`Concatenated names: ${concatNames}`)

// 3. How do you access the last element of any array?
console.log('Prompt 3:')
console.log("How do you access the last element of any array?");
const array = [1, 2, 3, 4, 5]; 
console.log(array); //prints array
const lastElement = array[array.length - 1]; // declares lastElement variable and stores the last element in index array
console.log(lastElement); //prints lastElement in array array 

// 4. How do you access the first name of an array?
console.log('Prompt 4:')
console.log("How do you access the first element of any array?");
const firstElement = array[0]; // sets firstElement in array
console.log(firstElement); // prints firstElement to console

// 5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('Prompt 5:')
console.log("Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
const nameLengths  = []; // declare nameLengths and create an empty set

for (let i = 0; i < names.length; i++) { //crete a loop that will go through all names in the array and increase by 1
    const nameLength = names[i].length; // clear new variable, nameLength, and store all letters in the names array
    nameLengths.push(nameLength); // add nameLength to the nameLengths array

}
console.log(nameLengths); // print to console all letters in each name of the array 

// 6. 
console.log('Prompt 6:')
console.log('Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.');
let summation = 0; // delcares summation variable and sets to 0
for (let i = 0; i < nameLengths.length; i++ ) { // loops namesLength array and increases by 1 until it terminates
    summation += nameLengths[i]; // adds all letters in name and assigns it to summation
}
console.log('Sum of letters names in array:', summation); // prints to console with sum of summation

// 7. Funcition that takes parameters, word and n, as arguments and returns the word concatenated to itself n number of times.
console.log('Prompt 7: ')
console.log("Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
const repeatWord = (word, n) => { // function repeatWord and parameters, word and n
    let result = ''; //delcares results as variables sets to empty
    for (let i = 0; i < n; i++) { // for loop that will execute until it reachs n times
        result += word; // after each loop the word will be added to the result
    }
    return result; // returns result then terminates
};
console.log(repeatWord("Beetlejuice! ", 3)); // calls function and assigns argument into parameter 

// 8. Function that takes two parameters, firstName and LastName, returns full name
console.log('Prompt 8:');
console.log("Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
const fullName = (firstName, lastName) => { // delcares function and two parameters
    return firstName + ' ' +lastName; // returns firstName and lastName with a space in the middle using concatenation
}
console.log(fullName('Austin','Powers')); // calls function and sends argument to the parameter 

// 9. Function that takes array of numbers and returns true if sume is greater than 100
console.log('Prompt 9:');
console.log("Write a function that takes an array of numers and returns true if the sum of all the numbers in the array is greater than 100.");
const array1 = [28, 39, 48, 12, 22]; // declared array1 assigned array
const isSumGreaterThan100 = array1 => { // function and parameter
    let sum = 0; // declares sum and sets it to 0
    for (let i = 0; i < array1.length; i++) { // for loop goes through array1 array and goes to next element until it terminates
        sum += array1[i]; // goes through array and adds next elemnt in array
    }
    return sum > 100; // Checks if sum is greater than 100 then terminates
}
console.log(isSumGreaterThan100(array1)); // Call function


//10. Function that returns the average of all elements in an array
console.log('Prompt 10: ');
console.log("Write a function that take san array of numbers and returns the average of all the elements in the array.")
const arr = [5, 17, 43, 97, 22, 38, 0, 10]; // array of arr
const calculateAverage = arr => { // function calculateAverage with single parameter arr
    let sum = 0; // declaration of sum variable and setting it to 0
    for (let i = 0; i < arr.length; i++) { // for loop that goes through array index and increases by 1
        sum += arr[i]; // adds each element in the array and assigns it to sum
    }
    const arrayAverage = sum / arr.length; // takes sum and divides by elements in array and assigns to arrayAverage
    return arrayAverage //returns arrayAverage and terminates
};
console.log(calculateAverage(arr)); // Calls function


//11 Function that returns true if first set of array is greater than second array
console.log('Prompt 11:')
console.log("Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
let arr1 = [5, 8, 14, 27, 13, 29]; // array for arr1
let arr2 = [10, 23, 2, 7, 15, 30]; // array for arr2

const isFirstArrGreater = (arr1, arr2) => { // declared function and two parameters
    let sum1 = 0; // declare sum1
    let sum2 = 0; // declare sum2

    for (let i = 0; i < arr1.length; i++) { // for loop to through the whole array
        sum1 += arr1[i]; // after each loop add the next index in arr1
    }

    for (let i = 0; i < arr2.length; i++) { // for loop to through the whole array
        sum2 += arr2[i]; // after each loop add the next index in arr2
    }

    const avg1 = sum1 / arr1.length; // declares avg1 and solves the average for arr1
    const avg2 = sum2 / arr2.length; // declares ave2 and solves the average for arr 2

    return avg1 > avg2; // compares both variables where avg1 must be great than avg2 then terminates

};

console.log(isFirstArrGreater(arr1, arr2)); // Calls function

// 12 Determines if one will buy drink based off of weather and if they have enough money
console.log('Prompt 12:');
console.log("Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
const willBuyDrink = (isHotOutside, moneyInPocket) => { // declaration of function and parameters
    if (isHotOutside && moneyInPocket > 10.50) { // if statement that needs both conditions to be true
        return true; // if true the function terminates
    } else {
        return false; // if previous condition is not fufilled then executes false
    }
};
// three conditions that will test and print to console various conditions
console.log(willBuyDrink(false, 20)); // argument is false and true
console.log(willBuyDrink(true, 15)); // argument is true and true
console.log(willBuyDrink(true, 10)); // argument is true and false

//13 Function that solves a problem
console.log(`Prompt 13:`)
console.log("Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
// Function that determines if a number is even or odd
const evenOrOdd = (number) => { // Declaring the functions name and setting parament number
    if (number % 2 === 0) { // Condition that determines a number in even and will not have a remainder
    console.log(`Your number is even`); // Prints 'Your number is even' if the condition is true
    return true; // returns true if condition is true and terminates function
} else {
    console.log(`Your number is odd`); // Prints 'Your number is odd' if the condition is previous condition is false
    return false; // returns false and terminates
}
};
console.log(evenOrOdd(27)); // calls the function and allows user to type argument
