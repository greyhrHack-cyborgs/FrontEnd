angular.module('greyTHRBizanAppContorllers', [])

.controller('DashCtrl', function($scope) {


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('dashboardLandingCtrl', function($scope) {
     //var vm = this;
      $scope.vm={};
      $scope.vm.options = {};
      $scope.vm.data = {};
    
    $scope.vm.options = {
        
        chart:{
                type: 'lineChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 40,
                    left: 55
                },
                x: function(d){ return d.x; },
                y: function(d){ return d.y; },
                useInteractiveGuideline: true,
                dispatch: {
                    stateChange: function(e){ console.log("stateChange"); },
                    changeState: function(e){ console.log("changeState"); },
                    tooltipShow: function(e){ console.log("tooltipShow"); },
                    tooltipHide: function(e){ console.log("tooltipHide"); }
                },
                xAxis: {
                    axisLabel: 'Time (ms)'
                },
                yAxis: {
                    axisLabel: 'Voltage (v)',
                    tickFormat: function(d){
                        return d3.format('.02f')(d);
                    },
                    axisLabelDistance: -10
                },
                callback: function(chart){
                    console.log("!!! lineChart callback !!!");
                }
            }
  /*chart: {
    type: 'pieChart',
    height: 500,
    x: function(d){return d.key;},
    y: function(d){return d.y;},
    showLabels: true,
    duration: 500,
    labelThreshold: 0.01,
    labelSunbeamLayout: true,
    legend: {
      margin: {
        top: 5,
        right: 35,
        bottom: 5,
        left: 0
      }
    }
  }*/
};
    
    $scope.vm.data = [  
          {
            key: "One",
            y: 5
          },
          {
            key: "Two",
            y: 2
          },
          {
            key: "Three",
            y: 9
          },
          {
            key: "Four",
            y: 7
          },
          {
            key: "Five",
            y: 4
          },
          {
            key: "Six",
            y: 3
          },
          {
            key: "Seven",
            y: .5
          }
        ];
    
    var sin = [],sin2 = [],
                cos = [];

            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 100; i++) {
                sin.push({x: i, y: Math.sin(i/10)});
                sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
                cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
            }
    
    console.log(sin);
    
    $scope.vm.data=[
                {
                    values: sin,      //values - represents the array of {x,y} data points
                    key: 'Sine Wave', //key  - the name of the series.
                    color: '#ff7f0e'  //color - optional: choose your own line color.
                },
                {
                    values: cos,
                    key: 'Cosine Wave',
                    color: '#2ca02c'
                },
                {
                    values: sin2,
                    key: 'Another sine wave',
                    color: '#7777ff',
                    area: true      //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
})
.controller('configureCtrl', function($scope){
});
