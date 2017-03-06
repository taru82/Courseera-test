(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemDetailController', ItemDetailController);

    // 'item' is injected through state's resolve

    ItemDetailController.$inject = ['item'];
    function ItemDetailController(item) {
        var itemDetail = this;
        itemDetail.name = item.name;
        itemDetail.shortName = item.short_name;
        itemDetail.specialInstructions = item.special_instructions;
        itemDetail.url = item.url;

    }









})();
