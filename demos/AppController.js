var controller = function($mdSidenav) {

  this.toggleNavigation = function() {
    $mdSidenav('navigation-drawer').toggle();
  };

  this.fc = function(data) {
    console.log(data);
    console.log('promise function is called');
    return Promise.resolve();
  };

  this.clickFunc = function(data) {
    console.log(data);
    console.log('click function is called');
  }
};

angular.module('ngMaterialSidemenu').controller('AppController', controller);
