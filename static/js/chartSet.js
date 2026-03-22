// Chart.js 전역 기본값 - 다크 테마 대응
Chart.defaults.color = '#a0a0c8';
Chart.defaults.borderColor = '#2a2a4a';

function makeChart(chartId, type, label, labels, data, backgroundColor, chart = undefined) {
  let chartSet = {
    labels: labels,
    datasets: [{
      label: label,
      data: data,
      backgroundColor: backgroundColor
    }]
  };

  if (chart) {
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
            left: 10,
            right: 5
          }
        },
        plugins: {
          legend: {
            position: type == 'bar' ? "top" : "right",
            labels: {
              color: '#a0a0c8',
              boxWidth: 12,
              padding: 10,
              font: { size: 11 }
            }
          },
          tooltip: {
            backgroundColor: '#1a1a2e',
            titleColor: '#e0e0ff',
            bodyColor: '#a0a0c8',
            borderColor: '#2a2a4a',
            borderWidth: 1
          }
        }
      }
    };

    if (type == 'bar') {
      ctxOpt.options.scales = {
        x: {
          grid: { display: false },
          ticks: { display: true, color: '#a0a0c8' },
          border: { display: false }
        },
        y: {
          beginAtZero: true,
          grid: { color: '#2a2a4a' },
          ticks: { color: '#a0a0c8' }
        }
      };
    }

    chart = new Chart(document.getElementById(chartId), ctxOpt);
    return chart;
  }
}
