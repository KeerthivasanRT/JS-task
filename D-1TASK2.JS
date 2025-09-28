//Task 2//

let x='4';
let n=Number(x)
if (n%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

let day=7;
let dayn;

switch(true){
    case day>0&&day<6:
        dayn="Weekday";
        break;

    case day>5&&day<8:
        dayn="weekend";
        break;
}
console.log(dayn);