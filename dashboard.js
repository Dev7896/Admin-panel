(function ($) {
  'use strict';
  $(function () {
    if ($("#order-chart").length) {
      var areaData = {
        labels: ["10", "", "", "20", "", "", "30", "", "", "40", "", "", "50", "", "", "60", "", "", "70"],
        datasets: [
          {
            data: [200, 480, 700, 600, 620, 350, 380, 350, 850, 600, 650, 350, 590, 350, 620, 500, 990, 780, 650],
            borderColor: [
              '#920000'
            ],
            borderWidth: 2,
            fill: false,
            label: "Orders"
          },
          {
            data: [400, 450, 410, 500, 480, 600, 450, 550, 460, 560, 450, 700, 450, 640, 550, 650, 400, 850, 800],
            borderColor: [
              '#F09397'
            ],
            borderWidth: 2,
            fill: true,
            label: "Downloads"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: true,
              padding: 10,
              fontColor: "#6C7383"
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#eeeeee'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 200,
              min: 200,
              max: 1200,
              padding: 18,
              fontColor: "#6C7383"
            },
            gridLines: {
              display: true,
              color: "#f2f2f2",
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      };
      var revenueChartCanvas = $("#order-chart").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }

    if ($("#sales-chart").length) {
      var SalesChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May"],
          datasets: [{
            label: 'Offline Sales',
            data: [480, 230, 470, 210, 330],
            backgroundColor: '#920000',
            borderWidth: 1,
            borderRadius: 35, // Set the border radius for bars
          },
          {
            label: 'Online Sales',
            data: [400, 340, 550, 480, 170],
            backgroundColor: '#fccece',
            borderWidth: 1,
            borderRadius: 35, // Set the border radius for bars
          }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                color: "#F2F2F2"
              },
              ticks: {
                display: true,
                min: 0,
                max: 560,
                callback: function (value, index, values) {
                  return value + '$';
                },
                autoSkip: true,
                maxTicksLimit: 10,
                fontColor: "#6C7383"
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#6C7383"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 1
            }]
          },
          legend: {
            display: false
          },
          elements: {
            rectangle: {
              borderRadius: 35, // Set the border radius for bars
            },
            point: {
              radius: 0
            }
          }
        },
      });
    }
  });
})(jQuery);
