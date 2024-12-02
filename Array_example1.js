// short function 
const x=function(x,y) {return x**y};
console.log(x(2,3));

// arrow function 
const t=(x,y)=>{return x*y};
console.log(t(1,34));
// argument object
var add =(...args) => {
    var total=0;
    var lenArgs=args.length;
    for ( var i=0;i<lenArgs; i++) {
        total+=args[i];
    }
    return total;
}

console.log(add(1,2,3,3,4,3,4));

//from array to function 
function myfunc() {
    let sum=0;
    let arrayLen=arguments.length;
    for (let i=0; i<arrayLen; i++) {
        sum+=arguments[i];
    }
    return sum;
}

//a sample array 
let myArray=[12,44,54,24,45,12,21,8,89,12];

let result=myfunc(...myArray);
console.log(result);




