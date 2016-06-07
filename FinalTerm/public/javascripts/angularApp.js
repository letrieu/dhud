'use strict';
var app = angular.module('bAuction', ['ui.router', 'ngMessages']);

app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url : '/home',
			templateUrl : '/home.html',
			controller : 'MainCtrl',
			
		})
		.state('404', {
			url : '/404',
			templateUrl : '/404.html',
			controller : 'ErrorCtrl',
			
		})
		.state('account', {
			url : '/account',
			templateUrl : '/account.html',
			controller : 'AccountCtrl',
			
		})
		.state('contact', {
			url : '/contact',
			templateUrl : '/contact.html',
			controller : 'ContactCtrl',
			
		})
		.state('editprofile', {
			url : '/editprofile',
			templateUrl : '/editprofile.html',
			controller : 'EditProfileCtrl',
			
		})
		.state('product-detail', {
			url : '/product-detail/{id}',
			templateUrl : '/product-detail.html',
			controller : 'ProductDetailCtrl',
			
		})
		.state('product', {
			url : '/product',
			templateUrl : '/product.html',
			controller : 'ProductCtrl',
			
		})
		.state('profile', {
			url : '/profile',
			templateUrl : '/profile.html',
			controller : 'ProfileCtrl',
			
		});

		$urlRouterProvider.otherwise('home');
	}]);

/*--------------------------------------CONTROLLER--------------------------------------*/
app.controller('MainCtrl', function($scope, $http){
  $scope.allProduct = [];

  $http.get('/api/producttypes').success(function(data) {
    for (var i = 0; i < data.length; i++) {
      var item = {};
      item.type = data[i];
      
      $scope.allProduct.push(item);

      $http.get('/api/product/type', {params: {type: item.type.id}}).success(function(data){
        console.log('get products for type: ' + data[0].producttype);

        for (var j = 0; j < $scope.allProduct.length; j++) {
          console.log($scope.allProduct[j].type.id);
          
          if ($scope.allProduct[j].type.id == data[0].producttype) {
            $scope.allProduct[j].products = [];
            
            angular.copy(data, $scope.allProduct[j].products);

            console.log('type: ' + data[0].producttype + ' is ok');
            console.log($scope.allProduct[j].products);

            break;
          }
        }
      });
    }
  });
});

app.controller('ErrorCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('ContactCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('EditProfileCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('ProductDetailCtrl', [
'$scope',
'$http',
'$stateParams',
'auth',
function($scope, $http, $stateParams, auth){
  $scope.isLoggedIn = auth.isLoggedIn;

  $http.get('/api/product/' + $stateParams.id).success(function(data){
      $scope.product = data;
      console.log("success");
    });
  $http.get('/api/getproductimages/'+ $stateParams.id).success(function(data){
      $scope.images = data;
      console.log("success");
  });

}]);

app.controller('ProductCtrl',function ($scope, $http){
  $http.get('/api/products').success(function(data){
      $scope.products = data;
      console.log("success");
    });

});

app.controller('ProfileCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);

app.controller('AccountCtrl', [
  '$scope',
  function($scope){
    $scope.submit = function() {
      console.log('submitting', $scope.signup.username, $scope.signup.password);
    };
}]);

/*--------------------------------------DIRECTIVE--------------------------------------*/
app.directive("w3TestDirective1", function() {
  $(document).ready(function() {
    $('#comment_form').submit(function() {
      $(this).ajaxSubmit({
        error: function(xhr) {
          status('Error: ' + xhr.status);
        },
        success: function(response) {
          alert(response.responseDesc);
        }
      });
      //Very important line, it disable the page refresh.
      return false;
    });
  });
});

app.directive("w3TestDirective1", function() {
  $('#pass').keyup(function(e) {
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    if (false == enoughRegex.test($(this).val())) {
      $('#passstrength').html('More Characters');
    } else if (strongRegex.test($(this).val())) {
      $('#passstrength').className = 'ok';
      $('#passstrength').html('Strong!');
    } else if (mediumRegex.test($(this).val())) {
      $('#passstrength').className = 'alert';
      $('#passstrength').html('Medium!');
    } else {
      $('#passstrength').className = 'error';
      $('#passstrength').html('Weak!');
    }
    return true;
  });
});

app.directive('usernameValidator', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.username = function(modelValue, viewValue) {
        if (!viewValue) {
          return $q.when(true);
        }
        var deferred = $q.defer();
        $timeout(function() {
          // Faking actual server-side validity check with $http.
          // Let's pretend our service is so popular all short username are already taken
          if (viewValue && viewValue.length < 5) {
            deferred.reject();
          }

          deferred.resolve();
        }, 2000);
        return deferred.promise;
      };
    }
  };
});

/*--------------------------------------SERVICE--------------------------------------*/
app.factory('auth', ['$http', '$window', function($http, $window){
   var auth = {};

    auth.saveToken = function (token){
      $window.localStorage['baymax-token'] = token;
    };

    auth.getToken = function (){
      return $window.localStorage['baymax-token'];
    };

    auth.isLoggedIn = function(){
      var token = auth.getToken();

      if(token){
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.exp > Date.now() / 1000;
      } else {
        return false;
      }
    };

    auth.currentUser = function(){
      if(auth.isLoggedIn()){
        var token = auth.getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));

        return payload.username;
      }
    };

    auth.register = function(user){
      return $http.post('/register', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    auth.logIn = function(user){
      return $http.post('/login', user).success(function(data){
        auth.saveToken(data.token);
      });
    };

    auth.logOut = function(){
      $window.localStorage.removeItem('baymax-token');
    };

  return auth;
}]);