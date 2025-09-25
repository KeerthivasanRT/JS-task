//Task 1//
let a='80'

let m1=Number(a);

let grade;
switch(true){
    case m1>89:
        grade='A';
        break;
    case m1>74:
        grade='B';
        break;
    case m1>49:
        grade='C'
        break;
    case m1<50:
        grade='Fail'
        break;

}

console.log(grade);



//Task 2//

let x='1';
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
