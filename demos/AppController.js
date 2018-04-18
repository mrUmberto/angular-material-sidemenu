var controller = function ($mdSidenav) {

  this.toggleNavigation = function () {
    $mdSidenav('navigation-drawer').toggle();
  };

  this.fc = function (data) {
    console.log(data);
    console.log('promise function is called');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // переведёт промис в состояние fulfilled с результатом "result"
        resolve("result");
      }, 1000);
    });
  };

  this.clickFunc = function (data) {
    console.log(data);
    console.log('click function is called');
  }
};

angular.module('ngMaterialSidemenu').controller('AppController', controller);
