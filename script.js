//function to compute interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value
    var interest = principal * years * rate / 100;
    var d = new Date();
    var Actual_year = Number(d.getFullYear())+Number(years);
    var text = `If you deposit <mark>${principal}</mark> </br>
    at an interest rate of <mark>${rate}%</mark>.</br>
    You will receive an amount of <mark>${interest}</mark>,</br>
    in the year <mark>${Actual_year}</mark>`
    document.getElementById("result").innerHTML = text
    }

//function to display range slider value
function slider_value()
{
   var sliderv = document.getElementById("rate").value;
   document.getElementById("rate1").innerHTML = sliderv+"%";
   return
}
