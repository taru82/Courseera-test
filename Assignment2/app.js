(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListService.getItems();

  itemAdder.addItem = function (itemIndex) {
    ShoppingListService.addItem(itemIndex);
  };

}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getboughtItems();
}
// SERVICE CALL

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [{name: "nailPolish", quantity: "12"},
  {name: "Blush", quantity: "21"},
  {name: "necklace", quantity: "10"},
  {name: "rings", quantity: "22"},
  {name: "bangels", quantity: "48"}
];

var boughtItems = [];

  service.addItem = function (itemIdex) {
 var item=  items.splice(itemIdex, 1);
 boughtItems.push(item);
};

  // service.removeItem = function (itemIdex) {
  //   items.splice(itemIdex, 1);
  // };
  service.getboughtItems = function () {
    return boughtItems;
  };
  service.getItems = function () {
    return items;
  };
}

})();
