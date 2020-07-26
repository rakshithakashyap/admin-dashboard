
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Deposit", "Expense", "payable"],
   datasets: [{
     data: [65,35,20],
     borderWidth:[0, 9 ,8],
     backgroundColor: ["#1bfb27","#36a2eb","purple"],
     hoverBackgroundColor: [ "green","blue", "#d528d5" ],
     hoverBorderColor: "rgba(234, 236, 244, 1)",
   }],
 },
 options: {
   maintainAspectRatio: false,
   tooltips: {
     backgroundColor: "rgb(255,255,255)",
     bodyFontColor: "#858796",
     borderColor: '#dddfeb',
     borderWidth: 2,
     xPadding: 15,
     yPadding: 15,
     displayColors: false,
     caretPadding: 10,
   },
   
   legend: {
     display: false
   },
   cutoutPercentage: 70,
 },
});


//chart-------------------------------2



Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Deposit", "Expense", "payable"],
   datasets: [{
     data: [75,25],
     backgroundColor: ['#1bfb27','purple' ],
     hoverBackgroundColor: ['#099f29','#d528d5'],
     hoverBorderColor: "rgba(234, 236, 244, 1)",
   }],
 },
 options: {
   maintainAspectRatio: false,
   tooltips: {
     backgroundColor: "rgb(255,255,255)",
     bodyFontColor: "#858796",
     borderColor: '#dddfeb',
     borderWidth: 2,
     xPadding: 15,
     yPadding: 15,
     displayColors: false,
     caretPadding: 10,
   },
   legend: {
     display: false
   },
   cutoutPercentage: 80,
 },
});

Chart.pluginService.register({
 beforeDraw: function(chart) {
   var width = chart.chart.width,
       height = chart.chart.height,
       ctx = chart.chart.ctx;

   ctx.restore();
   var fontSize = (height / 114).toFixed(2);
   ctx.font = fontSize + "em sans-serif";
   ctx.textBaseline = "middle";

   var text = "75%",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;

   ctx.fillText(text, textX, textY);
 }
});






//chart-------------------------------3---


Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example


  var ctx = document.getElementById("myPieChart3");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Deposit", "Expense", "payable"],
   datasets: [{
     data: [75,25],
     backgroundColor: ['#1bfb27','purple' ],
     hoverBackgroundColor: ['#099f29','#d528d5'],
     hoverBorderColor: "rgba(234, 236, 244, 1)",
   }],
 },
 options: {
   maintainAspectRatio: false,
   tooltips: {
     backgroundColor: "rgb(255,255,255)",
     bodyFontColor: "#858796",
     borderColor: '#dddfeb',
     borderWidth: 2,
     xPadding: 15,
     yPadding: 15,
     displayColors: false,
     caretPadding: 10,
   },
   legend: {
     display: false
   },
   cutoutPercentage: 80,
 },
});

Chart.pluginService.register({
 beforeDraw: function(chart) {
   var width = chart.chart.width,
       height = chart.chart.height,
       ctx = chart.chart.ctx;

   ctx.restore();
   var fontSize = (height / 114).toFixed(2);
   ctx.font = fontSize + "em sans-serif";
   ctx.textBaseline = "middle";

   var text = "",
       textX = Math.round((width - ctx.measureText(text).width) / 2),
       textY = height / 2;

   ctx.fillText(text, textX, textY);
 }
});

$("#datepicker").datepicker( {
  format: "mm-yyyy",
  startView: "months", 
  minViewMode: "months"
});