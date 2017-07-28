(function () {
    "use strict";
    angular.module("public")
        .controller('myInfoController', myInfoController);

    myInfoController.$inject = ['ApiPath', 'MenuService'];
    function myInfoController(ApiPath, MenuService)
    {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        $ctrl.info = MenuService.getUser();


        if ($ctrl.info === null){
            $ctrl.notSigned = true;
        }

        else {
            $ctrl.notSigned = false;
            $ctrl.userInfo = {
            firstName:   $ctrl.info.firstName,
                lastName: $ctrl.info.lastName,
                email: $ctrl.info.email,
                phone: $ctrl.info.phone,
                favoriteDish: $ctrl.info.favoriteDish
          };
            console.log('Value of get user', $ctrl.info.firstName)
        }
    }
})();