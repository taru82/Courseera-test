
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {

      items: ['MenuAppService', function (MenuAppService) {
        return MenuAppService.getAllCategories().then(function (response) {
           return response.data;

        })
      }]
    }
  })
      .state('itemDetail', {
          url: '/itemDetail/{itemId}',
          templateUrl: 'src/menuapp/templates/item-detail.template.html',
          controller: 'ItemDetailController as itemDetail',
            resolve: {
              item: ['$stateParams','MenuAppService',
                  function ( $stateParams,MenuAppService) {
                  return MenuAppService.getMenuForCategory()
                       .then(function (items) {
                               return items.data[$stateParams.itemId];
                           }
                   );

              }

              ]}
      });
}

})();
