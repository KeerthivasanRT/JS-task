
//Task 1
let nam = prompt("Enter a name", " ");

let age = Number(prompt("Enter an age", 17));  

function vote() 

{

    if (age >= 18) 
        
    {
        alert("Hello " + nam + ", you are eligible to vote");
    }
    
    else 
        {
        alert("Hello " + nam + ", you are not eligible to vote");
    }

    if (confirm("Do you want to check again?")) 
    {
        
        nam = prompt("Enter a name", nam);
        age = Number(prompt("Enter an age", age));
        vote();  
    } 
    else 
        {
        alert("Goodbye!");
    }
}
vote(); 