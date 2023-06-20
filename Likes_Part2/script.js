var likeAmount1 = 9;
var likeAmount2 = 12;
var likeAmount3 = 9;

function increaseLikes1(){
    likeAmount1 = likeAmount1 + 1;
    document.querySelector(".likeAmountLabel1").innerText=likeAmount1;
}
function increaseLikes2(){
    likeAmount2 = likeAmount2 + 1;
    document.querySelector(".likeAmountLabel2").innerText=likeAmount2;
}
function increaseLikes3(){
    likeAmount3 = likeAmount3 + 1;
    document.querySelector(".likeAmountLabel3").innerText=likeAmount3;
}