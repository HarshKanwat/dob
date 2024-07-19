var div = document.createElement("div")
div.className = "main";


var input = document.createElement("input");
input.setAttribute("type","date");
input.id = "dob";

var button = document.createElement("button");
button.setAttribute("type","button");
button.className = "btn btn-primary";
button.innerHTML = "Display Data";
button.addEventListener("click",date_generator)
div.append(input,button)
document.body.append(div);

var p1 = document.createElement("p");
var p2 = document.createElement("p");
var p3 = document.createElement("p");
var p4 = document.createElement("p");
var p5 = document.createElement("p");
var p6 = document.createElement("p");
var p7 = document.createElement("p");
document.body.append(p1,p2,p3,p4,p5,p6,p7);


function date_generator(){
    var res = document.getElementById("dob").value;
    var inputdate = new Date(res);
    var currentdate = new Date();
    console.log(currentdate,inputdate);
    var millisec = parseInt(currentdate.getTime()-inputdate.getTime());
    console.log(millisec);
    var secdif = Math.floor(millisec/1000);
    console.log(secdif);
    var mindif = Math.floor(secdif/60);
    console.log(mindif);
    var hrdif = Math.floor(mindif/60)
    console.log(hrdif);
    var daydif = Math.floor(hrdif/24);
    console.log(daydif)
    var yeardif = currentdate.getFullYear()-inputdate.getFullYear();
    console.log(yeardif);
    var month = (yeardif*12)+(currentdate.getMonth()-inputdate.getMonth());
    console.log(month);
    p1.innerHTML= 'Years: ' + yeardif;

p2.innerHTML='Months: ' +month;

p3.innerHTML='Days: ' +daydif;

p4.innerHTML='Hours: ' +hrdif;

p5.innerHTML= 'Minutes: ' +mindif;

p6.innerHTML=' Seconds: ' +secdif;

p7.innerHTML='Milliseconds: '+ millisec;


}


