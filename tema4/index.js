const addNumber = (...arguments) => {
    return arguments.reduce((sum, numbers) => sum + numbers, 0);
}

console.log(addNumber(1, 2));
console.log(addNumber(2, 4, 6));
console.log(addNumber(15, 20, 25, 30, 35));