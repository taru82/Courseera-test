(function () {
'use strict';

angular.module('MenuApp')
.component('menuApp', {
  templateUrl: 'src/menuapp/templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();
