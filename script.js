//function to compute interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value
    var interest = principal * years * rate / 100;
    var d = new Date();
    var Actual_year = d.getFullYear();
    document.getElementById("result").innerHTML = 
    `If you deposit ${principal},\n
    at an interest rate of ${rate}%.\n
    You will receive an amount of ${interest},\n
    in the year ${Actual_year}`
}

//function to display range slider value
function slider_value()
{
   var sliderv = document.getElementById("rate").value;
   document.getElementById("rate1").innerHTML = sliderv+"%";
   return
}