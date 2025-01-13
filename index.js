// name------------------------------------------------

let username ;
let age ;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("name").value;
    let a= console.log("Hello " + username);
    age = document.getElementById("age").value;
    age = Number(age);
    age+= 5;
    let b = console.log("Your New age after 5 Years is " + age + " years old");
    document.getElementById("details").innerHTML = "Hello! " + username +
    " your Age After 5 years is  "+ age +"years Old" ;
    // document.getElementById("details").innerHTML =   ;
     
}


// Triangle---------------------------------------
 