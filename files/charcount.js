document.getElementById("myButton").onclick = function(){

    const mycheckbox = document.getElementById("mycheckbox");
    const visabtn = document.getElementById("visabtn");
    const masterbtn = document.getElementById("masterbtn");
    const rupaybtn = document.getElementById("rupaybtn");

    if(mycheckbox.checked){
        console.log("You are Subscribed")
        document.getElementById("answer").innerHTML = "You are Subscribed";
        
    }else{
        console.log("You are Not Subscribed")
        document.getElementById("answer").innerHTML = "You are Not Subscribed";
        
    }



    if (visabtn.checked){
        console.log("You are paying with Visa Card")
        document.getElementById("answer2").innerHTML = "You are Visa Card";
    }else if(rupaybtn.checked){
        console.log("You are paying with Rupay Card")    
        document.getElementById("answer2").innerHTML = "You are paying With RupayCard";
    }else if(masterbtn.checked){
        console.log("You are paying with Master Card")  
        document.getElementById("answer2").innerHTML = "You are Paying with mastercard";  
    }else{
        console.log("You Must Select a payment Type")
        document.getElementById("answer2").innerHTML = "You must select a Payment Type";

    }
}

// ------------------Pattren JS-----------------



// let symbol = window.prompt("enter the Symbol : ");
// let rows = window.prompt("enter the Rows : ");
// let columns =  window.prompt("enter the columns : ");





document.getElementById("draw").onclick = function(){
    
    // symbol = Number(a);
    symbol = document.getElementById("symbol").value;
    // console.log("The Selected Symbol is " + symbol);

    rows = Number(rows);
    rows = document.getElementById("rows").value;
    // console.log("the Total rows are " + rows);
    
    columns = Number(columns);
    columns = document.getElementById("columns").value;
    // console.log("the total columns are " + columns);

        
    for(let i =1; i<= rows ; i+=1){
        for(let j=1 ; j<=columns ; j+=1){
           document.getElementById("print").innerHTML+=symbol;
         }
    document.getElementById("print").innerHTML+="<br>"

    }
     

    
   
}

