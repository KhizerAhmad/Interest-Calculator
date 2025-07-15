function compute(){
    var principal=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest= principal*rate*years/100;
    var amount=parseInt(principal)+parseFloat(interest);
    var result=document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(years);

    if(principal==="" || parseFloat(principal)<=0){
        alert("Please Enter a Positive Number(+ve)");
        document.getElementById("principal").focus();
    }
    else{
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",<br> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "<br> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",<br> in the year " + "<mark>" + year + "</mark>" + "<br>";
    }
}
function reset(){
    document.getElementById("principal").value="";
    document.getElementById("rate").value=10.25;
    document.getElementById("years").value="";
    document.getElementById("rate_val").innerHTML=10.25;
    document.getElementById("result").innerText="";
}
function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval;
}