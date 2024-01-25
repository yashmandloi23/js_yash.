// to find avg of all the elementy of the array 

let marks = [85,97,44,37,76,60];

let avg;
let sum = 0;
for(let arr of marks){
    // console.log(marks);
    sum += arr;
}

avg = sum/marks.length;

console.log(avg);