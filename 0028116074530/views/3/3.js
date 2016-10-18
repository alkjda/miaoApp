/**
 * Created by hxsd on 2016/9/30.
 */
angular.module("myapp")
    .controller("homeCtrl", function ($scope,$state,$ionicViewSwitcher,dataFactory) {
        // 查询出来要显示在view中的商品数据
        $scope.data = dataFactory.query();
        // 跳转
        $scope.toDetail = function(product){
            $state.go("4",{id:"1001",title:product.title});
            // 将go有动画效果
            $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
        };
        //$scope.tobDetail = function(product){
        //    $state.go("3.shop",{id:"1001",title:product.title});
        //    // 将go有动画效果
        //    $ionicViewSwitcher.nextDirection("forward");    // "forward","back"
        //};
        //$scope.showAlert = function () {
        //    $ionicPopup.alert({
        //        title: '警告',
        //        template: '玩儿本游戏，会消耗流量!<br/>并且一玩本游戏，您就会<b>欲罢不能</b>!',
        //        buttons: [{text:"确定"}]
        //    });
        //     .then(function (res) {
        //     console.log('请慎重考虑，反正我告诉过你了。');
        //    });
        //};
    });
