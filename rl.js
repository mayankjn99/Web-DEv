const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query) {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    try {
        const name = await question('Please enter your name: ');
        console.log(`Hello, ${name}!`);

        const numbersInput = await question('Enter a list of numbers separated by commas: ');
        const numbers = numbersInput.split(',').map(Number).sort((a, b) => a - b);

        console.log('Sorted Array:', numbers);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        rl.close();
    }
}

main();
