let items = [250,645,300,900,50];

let i = 0;
for(let val of items){
    console.log(`val at index ${i} = ${val}`);
    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}


///////////////////////////////////////////////////////////////////////////////////////////////////

let foodItem = ["potato", "apple" ,"chips"];

foodItem.push("fries");  // to add item in th last 

foodItem.pop();  // pop deletes th elast iterm and returns 

// tostring it is used to conver an array in string 
// splice and slice are also array operations 
