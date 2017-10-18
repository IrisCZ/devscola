var months = [{
  name: "enero",
  days: 31,
  start: "domingo"
}, {
  name: "febrero",
  days: 28,
  start: "miércoles"
}, {
  name: "marzo",
  days: 31,
  start: "miércoles"
}, {
  name: "abril",
  days: 30,
  start: "sábado"
}, {
  name: "mayo",
  days: 31,
  start: "lunes"
}, {
  name: "junio",
  days: 30,
  start: "jueves"
}, {
  name: "julio",
  days: 31,
  start: "sábado"
}, {
  name: "agosto",
  days: 31,
  start: "martes"
}, {
  name: "septiembre",
  days: 30,
  start: "viernes"
}, {
  name: "octubre",
  days: 31,
  start: "domingo"
}, {
  name: "noviembre",
  days: 30,
  start: "miércoles"
}, {
  name: "diciembre",
  days: 31,
  start: "viernes"
}];

var weekDays = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
var currentMonth = new Date().getMonth();
var currentDay = new Date().getDate();

for (var i = 0; i < months.length; i++){
  var monthClass = "";
  if(currentMonth === i){
    monthClass = "activeMonth";
  }
  drawMonth(months[i], monthClass);
}


function drawMonth(month, className){
  var content = "";
  content += "<div class='month "+className+"'>";

  var weekGaps = weekDays.indexOf(month.start);

  content += "<div class = monthName>" + month.name+"<br>" + "</div> ";
  for(var i = 0; i < weekGaps; i++){
    content += "<div class='day'></div>";
  }
  for(var i = 1; i <= month.days; i++){
    var dayClass = "";

    if(currentDay === i && className){
      dayClass = "activeDay";
    }
    content += "<div class='day "+ dayClass +"'>"+i+"</div>";
    if((i + weekGaps) % 7 === 0){
      content += "<br>";
    }
  }
  content += "</div>";
  var container = document.getElementById("container");
  container.innerHTML += content;
}
