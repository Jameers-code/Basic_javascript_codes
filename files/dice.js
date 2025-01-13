// let a =Math.floor((Math.random()*6)+1)
// let b =Math.floor((Math.random()*6)+1)
// let c =Math.floor((Math.random()*6)+1)
// console.log(a)
// console.log(c)
// console.log(b)


document.getElementById("roll").onclick = function(){
    let a =Math.floor((Math.random()*6)+1)
    let b =Math.floor((Math.random()*6)+1)
    let c =Math.floor((Math.random()*6)+1)

    document.getElementById("label1").innerHTML = a;
    document.getElementById("label2").innerHTML = b;
    document.getElementById("label3").innerHTML = c;
}