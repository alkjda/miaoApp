/**
 * Created by hxsd on 2016/9/29.
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state("one",{
        url:"/one",
        templateUrl:"views/one/one.html"
    }).state("two",{
        url:"/two",
        templateUrl:"views/two/two.html",
        controller:"formCtrl"
    }).state("3",{
        url:"/3",
        abstract:true,
        templateUrl:"views/3/3.html",
        controller:"homeCtrl"
    }).state("3.shang",{
        url:"/shang",
        views:{"tab-shang":{
            templateUrl:"views/3/shang/shang.html"
        }}
    }).state("4", {
        url: "/4?:id:title", // 路由传参
        templateUrl: "views/3/4.html",
        controller: "detailCtrl"
    }).state("3.shop",{
        url:"/shop",
        views:{"tab-shop":{
            templateUrl:"views/3/shop/shop.html",
            //controller:"deteilCtrl"
        }}
    }).state("3.me",{
        url:"/me",
        views:{"tab-me":{
            templateUrl:"views/3/me/me.html",
            controller:"popupCtrl"
        }}
    }).state("me2",{
        url:"/me2",
        templateUrl:"views/3/me/me2.html"
    });
    $urlRouterProvider.otherwise("/two");
});


//    .state("3",{
//    url:"/3",
//    templateUrl:"views/3/3.html",
//    controller:"homeCtrl"
//});
//$stateProvider.state("4", {
//    url: "/4?:id:title", // 路由传参
//    templateUrl: "views/3/4.html",
//    controller: "detailCtrl"
//});


//
myapp.factory("dataFactory", function ($http) {
    var data = {productList: []};   // 一定要保存到对象中，不要直接保存到一个数组变量中
    $http.get("data.json").success(function (_data, status, headers, config) {
        data.productList = _data;
    });
    return {
        query: function () {
            return data;   // 返回数据
        } // end query
    };
});

//myapp.factory("productFactory", function ($http, $q) {
//    return {
//        query: function () {
//            var deferred = $q.defer(); // 声明延后执行，表示要去监控后面的执行
//            $http.get("data.json")
//                .success(function (data, status, headers, config) {
//                    deferred.resolve(data);  // 声明执行成功，即http请求数据成功，可以返回数据了
//                })
//                .error(function (data, status, headers, config) {
//                    deferred.reject(data);   // 声明执行失败，即服务器返回错误
//                });
//            return deferred.promise;   // 返回承诺，这里并不是最终数据，而是访问最终数据的API
//        } // end query
//    };
//});