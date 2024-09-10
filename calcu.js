    // calculator function
    let a = 8;
    let b = 3;
    let c = "root"   //power, root

    function calculator(a, b, c) 
    {
    // return a, b;

    if(c == "+"){
    console.log("Sum of a and b is: ", a + b);
    }  

    else if (c == "-") {
        console.log(a - b);
    }
    else if (c == "*") {
        console.log(a * b);
    }
    else if (c == "/") {
        if(b == 0) {
            console.log("You can't divide by 0");
        }
        else {
            console.log(a / b);
        }
        
    
    }

    if(c == "power"){
        let power = (a**b)
            console.log(power);
        } 
     }
    
    {
        if(c == "root") {
    let root =(a**(1/b));
            console.log(root);
        }
    }
    calculator(a, b, c);