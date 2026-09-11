let numbers = [10, 50, 30, 80, 20];

let largest = numbers[0];

for (let n of numbers) {
    if (n > largest) 
        largest = n;
}

console.log("Largest:", largest);