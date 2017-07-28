(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://taru-courseera7.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
