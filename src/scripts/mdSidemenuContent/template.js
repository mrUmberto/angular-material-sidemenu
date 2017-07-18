export default function() {
  return `
    <div class="md-sidemenu-content" layout="column" ng-class="{'md-active': $mdSidemenuContent.visible}">
      <md-button class="md-sidemenu-toggle" ng-if="$mdSidemenuContent.heading" ng-click="$mdSidemenuContent.changeState();" ng-class="{ 'md-active': $mdSidemenuContent.visible }">
        <div layout="row">
          <md-icon ng-if="$mdSidemenuContent.svgIcon" md-svg-icon="{{ $mdSidemenuContent.svgIcon }}"></md-icon>
          <md-icon ng-if="$mdSidemenuContent.icon">{{ $mdSidemenuContent.icon }}</md-icon>
          <span flex>{{ $mdSidemenuContent.heading }}</span>
          <md-icon ng-if="$mdSidemenuContent.arrow">keyboard_arrow_down</md-icon>
        </div>
      </md-button>
      <div class="md-sidemenu-wrapper" ng-show="$mdSidemenuContent.visible" md-sidemenu-disable-animate ng-class="{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }" layout="column" ng-transclude></div>
    </div>
  `;

}
