function myfunc() {
    let sum=0;
    for (let i=0;i<arguments.length;i++) {
        sum+=arguments[i];
    }
    return sum;
}

let tar=myfunc(1,3,4,3,53);
console.log(tar);
