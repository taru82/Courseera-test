(function () {
    "use strict";
    angular.module("public")
        .controller('signUpCtrl', signUpCtrl);
    signUpCtrl.$inject = ['ApiPath', 'MenuService'];
    function signUpCtrl(ApiPath, MenuService)
    {
        var $ctrl = this;
        $ctrl.submit = function () {
            $ctrl.basePath = ApiPath;
            $ctrl.info = MenuService.getItem(regForm.favoriteDish.value).then(function () {
                MenuService.setUser(regForm)
                $ctrl.valid = true;
                $ctrl.wrongDish = false;

            })
                .catch(function (errorResponse) {
                    $ctrl.valid = false;
                    $ctrl.wrongDish = true;
                })



        }

    }
})();