let username=prompt("Enter username",);
let password=prompt("Enter password",);
function login(){
    if(username=="libary"&&password=="book123")
        {
        if(confirm("Do you want to borrow a book?"))
            {
            console.log("1 = Fiction");
            console.log("2 = Science");
            console.log("3 = History");
            let p=Number(prompt("enter a book category",1));
            switch(p)
            {
                case 1 :
                    alert("You selected Fiction");
                    break;
                case 2:
                    alert("You selected Science");
                    break;
                case 3:
                    alert("You selected Histroy");
                    break;
                default:
                    alert("Maybe next time! Goodbye!");
                    break;
            }
        }
    }
    else
        {
        alert("Maybe next time! Goodbye!");
    }
}
login();
