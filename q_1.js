// to print all the even numbers from 1 to 100
let even = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
        even++
    }
}
console.log("total number of even number from 1 to 100 are ", even);