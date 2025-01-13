// --------------------------------------------------------
// ------Hypotenuse of TriAngle--------

let a;
let b;
let c;
 
document.getElementById("hypto").onclick = function(){
    
    a = Number(a);
    a = document.getElementById("sideA").value;
    console.log("Lenght of Side A is " + a);

    b = Number(b);
    b = document.getElementById("sideB").value;
    console.log("Lenght of Side B is " + b);
    
    c = Number(c);
    c = (Math.pow(a,2) + Math.pow(b,2));
    let hypo = Math.sqrt(c);
    console.log("The Hypotenuse of the Triangle is " + hypo );
    document.getElementById("answer").innerHTML = "The Hypotenuse of The Triange is " + hypo ;
    
 
}