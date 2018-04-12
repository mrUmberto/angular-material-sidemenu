var controller = function($mdSidenav) {

  this.toggleNavigation = function() {
    $mdSidenav('navigation-drawer').toggle();
  };

  this.fc = function() {
    console.log('promise function is called');
    return Promise.resolve();
  };

  this.clickFunc = function() {
    console.log('click function is called');
  }
};

angular.module('ngMaterialSidemenu').controller('AppController', controller);
