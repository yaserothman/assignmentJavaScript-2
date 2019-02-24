for (let i = 1; i <= 100; i++) {
    console.log(`the square of  ${i} is ${i * i}`);
}

for (let i = 1; i <= 100; i += 2) {
    console.log(`the square of  ${i} is ${i * i}`);
}

for (let i = 2; i <= 100; i += 2) {
    console.log(`the square of  ${i} is ${i * i}`);
}

let total = 10;


for (let i = 10; i <= 100; i += 1) {
    total = i * total;
}

console.log(total);

