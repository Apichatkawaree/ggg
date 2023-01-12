document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt (num1)+parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;

});
document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt (num1)-parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;

});
document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt (num1)*parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;

});
document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt (num1)/parseInt(num2);
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum;

});
document.getElementById("calculator").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt (num1)/parseInt(num2)/100 * parseInt(num2)/100;
    document.getElementById("result").innerHTML = "แสดงผลรวม :" + sum.toFixed(2);

});

function myalert(sum){
    alert("Hell Prayut"+sum)
}

const img = document.createElement("img");

img.src = "img/c.jpg";
img.style.width="200px";

document.getElementById("mydiv").appendChild(img)