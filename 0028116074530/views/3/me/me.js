/**
 * Created by ASus on 2016/10/3.
 */
angular.module("myapp")
    .controller("popupCtrl", function ($scope, $ionicPopup,$ionicModal) {
        $scope.showAlert = function () {
            $scope.data.password=null;
            $scope.data.text=null;
            $scope.data.checkbox=null;
            $ionicPopup.alert({
                title: '提示',
                template: '你的账号以登陆成功',
                buttons: [{text:"确定"}]
            });
        };

        $ionicModal.fromTemplateUrl('views/3/3.html', {
            scope: $scope,       // 作用域使用父作用域
                        animation: 'slide-in-up'
//            animation: 'slide-in-left'
//                        animation: 'slide-in-right'
//                        animation: 'scale-in'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        // 创建新联系人
        $scope.createContact = function(u) {
            $scope.contacts.push({ name: u.username,email: u.email});
            $scope.modal.hide();    // 隐藏
        };

        // 离开时清除model
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

        // 在隐藏modal时执行一些动作
        $scope.$on('modal.hidden', function() {
            // 在这里执行一些操作
        });

        // 在移除modal时执行一些动作
        $scope.$on('modal.removed', function() {
            // 在这里执行一些操作
        });
        $scope.zhuce = function () {
            $scope.data.email=null;
            $scope.data.passwor=null;
            $scope.data.tex=null;
            $scope.data.name=null;
            $scope.data.hao=null;
            $scope.data.yes=null;
            $ionicPopup.alert({
                title: '提示',
                template: '恭喜！你的账号注册成功 <br> 快去登录吧！',
                buttons: [{text:"确定"}]
            });
            $scope.modal.hide();
        };
    });

