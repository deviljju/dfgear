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
    return chart;
  } else {
    const ctxOpt = {
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
            position: type == 'bar' ? "top" : "right",
          }
        },
      }
    }
    if(type=='bar'){
      ctxOpt.options.scales = {
        x: {
            grid: {
                display: false // x축 그리드 숨기기
            },
            ticks: {
                display: true // x축 값은 표시
            },
            border: {
                display: false // x축 선 숨기기
            }
        },
        y: {
            beginAtZero: true // y축 0부터 시작
        }
    }
    }
    chart = new Chart(document.getElementById(chartId), ctxOpt);
    return chart;
  }
}