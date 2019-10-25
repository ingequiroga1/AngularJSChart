(function(){
 'use strict';

 	angular
 		.module('AppPan')
 		.directive('dirPan', DirPan);

 	//DirPan.$inject = [];
 	function DirPan(){
 		debugger;
 		return{

 			link:{
 					var ctx = document.getElementById("myAreaChart");
					var myLineChart = new Chart(ctx, {
					  type: 'line',
					  data: {
					    labels: ["Oct 1", "Oct 2", "Oct 3", "Oct 4", "Oct 5", "Oct 6", "Oct 7", "Oct 8", "Oct 9", "Oct 10", "Oct 11", "Oct 12", "Oct 13"],
					    datasets: [{
					      label: "Sessions",
					      lineTension: 0.3,
					      backgroundColor: "rgba(2,117,216,0.2)",
					      borderColor: "rgba(2,117,216,1)",
					      pointRadius: 5,
					      pointBackgroundColor: "rgba(2,117,216,1)",
					      pointBorderColor: "rgba(255,255,255,0.8)",
					      pointHoverRadius: 5,
					      pointHoverBackgroundColor: "rgba(2,117,216,1)",
					      pointHitRadius: 50,
					      pointBorderWidth: 2,
					      data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
					    }],
					  },
					  options: {
					    scales: {
					      xAxes: [{
					        time: {
					          unit: 'date'
					        },
					        gridLines: {
					          display: false
					        },
					        ticks: {
					          maxTicksLimit: 7
					        }
					      }],
					      yAxes: [{
					        ticks: {
					          min: 0,
					          max: 40000,
					          maxTicksLimit: 5
					        },
					        gridLines: {
					          color: "rgba(0, 0, 0, .125)",
					        }
					      }],
					    },
					    legend: {
					      display: false
					    }
					  }
					});
 				  },	
 		    template: '<canvas id="myAreaChart" width="100%" height="30"></canvas>'
 			}	
 	}
})();