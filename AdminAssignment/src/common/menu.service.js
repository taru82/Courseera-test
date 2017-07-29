(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
        var service = this;
        var userInfo = null;

        function getCategories() {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        function getMenuItems(category) {
            var config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
                return response.data;
            });
        };
        function getItem(short_name) {
            return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
                response.data;
            })
        }

// add user
        function setUser (regForm) {
            userInfo = {
                'firstName': regForm.firstName.value,
                'lastName': regForm.lastName.value,
                'email': regForm.email.value,
                'phone': regForm.phone.value,
                'favoriteDish': regForm.favoriteDish.value
            };
        }

        //get user
        function getUser() {
            return userInfo;
        }

        return {
            getMenuItems: getMenuItems,
            getCategories: getCategories,
            setUser:setUser,
            getUser: getUser,
            getItem: getItem


        }
    }



})();
