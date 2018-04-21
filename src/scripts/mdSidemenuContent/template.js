export default function () {
  return `
    <div class="md-sidemenu-content" layout="column" ng-class="{'md-active': $mdSidemenuContent.visible}">
      <div flex class="md-button md-sidemenu-toggle" ng-click="$mdSidemenuContent.runClick($event); $mdSidemenuContent.changeState($event);" ng-if="$mdSidemenuContent.heading" ng-class="{ 'md-active': $mdSidemenuContent.visible }">
        <div layout="row">
          <md-icon ng-if="$mdSidemenuContent.svgIcon" md-svg-icon="{{ $mdSidemenuContent.svgIcon }}"></md-icon>
          <md-icon ng-if="$mdSidemenuContent.icon">{{ $mdSidemenuContent.icon }}</md-icon>
          <span flex>{{ $mdSidemenuContent.heading }}</span>
           <md-icon ng-click="$mdSidemenuContent.changeState($event);" ng-if="$mdSidemenuContent.arrow">keyboard_arrow_down</md-icon>
        </div>
        <md-progress-linear class="loading-progress" ng-if="$mdSidemenuContent.loading"></md-progress-linear>
      </div>
      <div class="md-sidemenu-wrapper" ng-if="$mdSidemenuContent.visible" md-sidemenu-disable-animate ng-class="{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }" layout="column" ng-transclude></div>
    </div>
  `;

}
