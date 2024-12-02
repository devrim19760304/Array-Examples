//how to use an function with an array which has not any certain 
//size . check example .


function sum() {
    let sum=0;
    for (let i=0; i<arguments.length; i++) {
        sum+=arguments[i];
    }
    return sum;
}

let myArray=[12,23,45,67,13,45,143,87,3,44,42];

let total=sum(...myArray);
console.log(total);



