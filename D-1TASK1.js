//task 1//
let a='49'

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
