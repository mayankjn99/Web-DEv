// Import the readline module
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);

    // rl.question('Enter a list of numbers separated by commas: ', (input) => {
    // // Split the input string by commas to create an array of strings
    //     let numbers = input.split(',');

    //     // Convert the array of strings to an array of numbers
    //     numbers = numbers.map(Number);

    //     // Sort the array of numbers
    //     numbers.sort((a, b) => a - b);

    //     // Output the sorted array
    //     console.log('Sorted Array:', numbers);

    //     // Close the readline interface
        rl.close();
    // });
});

new Promise((resolve, reject) => {
    console.log("Initial");
    resolve();
})
.then(() => {
    throw new Error("Something failed along the way");
    return "First then";
})
.catch(() => {
    console.log("Do that");
})
.finally(() => {
    console.log("Do this no matter what happened before");
});