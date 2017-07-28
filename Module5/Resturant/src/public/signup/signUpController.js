(function () {
    "use strict";

    angular.module('public')
        .controller('signUpController', signUpController);
//Sign up controller
    signUpController.$inject = ['ApiPath', 'MenuService'];
    function signUpController(ApiPath, MenuService)
    {
        var $ctrl = this;
        $ctrl.submit = function () {
            $ctrl.basePath = ApiPath;

            MenuService.getItem(regForm.favoriteDish.value).then(function () {
                MenuService.setUser(regForm);
                $ctrl.valid = true;
                $ctrl.wrongDish = false;
            })
                .catch(function (errorResponse){
                    $ctrl.valid = false;
                    $ctrl.wrongDish = true;
                })
        }
    }
})();
