var a=1000;
function Withdraw(){
    var x=document.getElementById("number").value;
    a=a-Number(x);
    if(Number(a)<500){
        document.getElementById("amount").innerHTML="Amount less than 500";
    }
    else{
        document.getElementById("amount").innerHTML=a;
    }
}
function Deposit(){
    var y=document.getElementById("number").value;
    a=a+Number(y);
    document.getElementById("amount").innerHTML=a;
}