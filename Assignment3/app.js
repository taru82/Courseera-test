(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
// .directive('listItem', ListItem);
//
//
// function ListItem() {
//   var ddo = {
//     templateUrl: 'listItem.html',
//     scope: {
//        items: '<'
//     }
//   };
//
//   return ddo;
// }
MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;

  var promise = MenuCategoriesService.getMenuCategories();

  promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuCategoriesService.getMenuForCategory(shortName);
    promise.then(function (response) {
   menu.descriptions = response.data;
      // for(var x in menu.descriptions){
      var foundFlag = false;
menu.outs = [];
for(var i = 0; i < menu.descriptions.menu_items.length; i++){
  var x = menu.descriptions.menu_items[i].description;
   var y = menu.searchTerm;

          if(x.indexOf(y) != -1)
        {
          menu.outs.push(menu.descriptions.menu_items[i].short_name +'; '+ menu.descriptions.menu_items[i].name+'; '
        + menu.descriptions.menu_items[i].description );
          foundFlag = true;
        }
   }
      if (foundFlag){
        menu.message = menu.outs;
      } else {
        menu.message = ["Item not found."];
      }
    })
    .catch(function (error) {
    })
    menu.removeItem = function(itemIndex) {
      menu.outs.splice(itemIndex, 1);
    }
  };

}



MenuCategoriesService.$inject = ['$http', 'ApiBasePath'];
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };

}

})();
