function makeChart(chartId,type,label,labels,data,backgroundColor,chart=undefined){
  let chartSet = {
    labels:labels,
    datasets:[{
      label:label,
      data:data,
      backgroundColor:backgroundColor
    }]
  }
  
  if(chart) {
    chart.data = chartSet;
    chart.update();
  } else {
    chart = new Chart(document.getElementById(chartId), {
      type: type,
      data: chartSet,
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left :10,
            right:5
          }
        },
        plugins:{
          legend:{
            position:"right",
          }
        },
      }
    });
  }
}