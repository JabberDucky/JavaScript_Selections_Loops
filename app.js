// Exercise 1 Section
console.log("Exercise 1:\n==========\n");
for (let i = 1; i <= 100; i++){
if (i % 2 !== 0){
    console.log(i);
}
else{
    continue;
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <=100; i++){
if (i % 3 == 0 && i % 5 == 0){
    console.log("FIZZBUZZ");
}
else if (i % 3 == 0){
    console.log("FIZZ");
}
else if (i % 5 == 0){
    console.log("BUZZ");
}
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n")
console.log("WHILE LOOP:")
let number = 1;

while(number <= 100){
    if (number % 2 !== 0){
        console.log(number);
}
number++;
}

let i = 1;
console.log("DO WHILE LOOP:")
do {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FIZZBUZZ");
    }
    else if (i % 3 == 0){
        console.log("FIZZ");
    }
    else if (i % 5 == 0){
        console.log("BUZZ");
    }
    i++;

} while(i <= 100);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n")
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for(let i = 0; i >= n; i++){
    if (i == value){
    console.log("Found Value!");
    found = true;
    break;
    }
}
if (found == false){
    console.log("Did not find the value.")
}