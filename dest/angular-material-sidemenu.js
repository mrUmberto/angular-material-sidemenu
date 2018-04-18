/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mdSidemenu = __webpack_require__(1);
	
	var _mdSidemenu2 = _interopRequireDefault(_mdSidemenu);
	
	var _mdSidemenuGroup = __webpack_require__(4);
	
	var _mdSidemenuGroup2 = _interopRequireDefault(_mdSidemenuGroup);
	
	var _mdSidemenuContent = __webpack_require__(6);
	
	var _mdSidemenuContent2 = _interopRequireDefault(_mdSidemenuContent);
	
	var _mdSidemenuButton = __webpack_require__(9);
	
	var _mdSidemenuButton2 = _interopRequireDefault(_mdSidemenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(function (angular) {
	
	  angular.module('ngMaterialSidemenu', ['ngMaterial']).directive(_mdSidemenu2.default.name, _mdSidemenu2.default.directive).directive(_mdSidemenuGroup2.default.name, _mdSidemenuGroup2.default.directive).directive(_mdSidemenuContent2.default.name, _mdSidemenuContent2.default.directive).directive(_mdSidemenuButton2.default.name, _mdSidemenuButton2.default.directive);
	})(angular);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(2);
	
	var _template2 = _interopRequireDefault(_template);
	
	var _link = __webpack_require__(3);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      locked: '@?mdLocked'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    link: _link2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenu',
	  directive: directive
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($element, $attributes) {
	
	  var locked = $attributes.locked && 'md-sidemenu-locked';
	
	  return '<div class="md-sidemenu ' + locked + '" ng-transclude></div>';
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($scope, $element, $attributes) {
	
	  $scope.$watch(function () {
	    return $attributes.locked;
	  }, function (locked) {
	    if (locked) {
	      $element[0].classList.add('md-sidemenu-locked');
	    } else {
	      $element[0].classList.remove('md-sidemenu-locked');
	    }
	  });
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _template = __webpack_require__(5);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    replace: true,
	    transclude: true,
	    template: _template2.default
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuGroup',
	  directive: directive
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return '<div class="md-sidemenu-group" flex layout="column" layout-align="start start" ng-transclude></div>';
	};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(7);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(8);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      heading: '@mdHeading',
	      icon: '@?mdIcon',
	      svgIcon: '@?mdSvgIcon',
	      arrow: '@?mdArrow',
	      dyFunc: '&',
	      clickFunc: '&'
	    },
	    replace: true,
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuContent',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuContent',
	  directive: directive
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function ($timeout) {
	
	  this.visible = false;
	
	  this.changeState = function ($event) {
	    var _this = this;
	
	    this.loading = true;
	    if ($event) {
	      $event.stopPropagation();
	    }
	    if (this.dyFunc) {
	      this.dyFunc().then(function () {}).finally(function () {
	        $timeout(function () {
	          _this.loading = false;
	        });
	      });
	    }
	    this.visible = !this.visible;
	  };
	
	  this.runClick = function ($event) {
	    if ($event) {
	      $event.stopPropagation();
	    }
	    if (this.clickFunc) {
	      this.clickFunc();
	    }
	  };
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  return "\n    <div class=\"md-sidemenu-content\" layout=\"column\" ng-class=\"{'md-active': $mdSidemenuContent.visible}\">\n      <div flex class=\"md-button md-sidemenu-toggle\" ng-click=\"$mdSidemenuContent.runClick($event); $mdSidemenuContent.changeState($event);\" ng-if=\"$mdSidemenuContent.heading\" ng-class=\"{ 'md-active': $mdSidemenuContent.visible }\">\n        <div layout=\"row\">\n          <md-icon ng-if=\"$mdSidemenuContent.svgIcon\" md-svg-icon=\"{{ $mdSidemenuContent.svgIcon }}\"></md-icon>\n          <md-icon ng-if=\"$mdSidemenuContent.icon\">{{ $mdSidemenuContent.icon }}</md-icon>\n          <span flex>{{ $mdSidemenuContent.heading }}</span>\n           <md-icon ng-click=\"$mdSidemenuContent.changeState($event);\" ng-if=\"$mdSidemenuContent.arrow\">keyboard_arrow_down</md-icon>\n        </div>\n        <md-progress-linear ng-if=\"$mdSidemenuContent.loading\"></md-progress-linear>\n      </div>\n      <div class=\"md-sidemenu-wrapper\" ng-if=\"$mdSidemenuContent.visible\" md-sidemenu-disable-animate ng-class=\"{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  $mdSidemenuContent.icon }\" layout=\"column\" ng-transclude></div>\n    </div>\n  ";
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _controller = __webpack_require__(10);
	
	var _controller2 = _interopRequireDefault(_controller);
	
	var _template = __webpack_require__(11);
	
	var _template2 = _interopRequireDefault(_template);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var directive = function directive() {
	
	  return {
	    restrict: 'E',
	    scope: {
	      uiSref: '@?',
	      uiSrefActive: '@?',
	      href: '@?',
	      target: '@?'
	    },
	    transclude: true,
	    template: _template2.default,
	    controller: _controller2.default,
	    controllerAs: '$mdSidemenuButton',
	    bindToController: true
	  };
	};
	
	exports.default = {
	  name: 'mdSidemenuButton',
	  directive: directive
	};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	
	  return "\n    <md-button\n      class=\"md-sidemenu-button\"\n      layout=\"column\">\n      <div layout=\"row\" layout-fill layout-align=\"start center\" ng-transclude></div>\n    </md-button>\n  ";
	};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBiZmUxYzJmNzIyMTVkNGRjYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnUvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVDb250ZW50L2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbi90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwibmFtZSIsInJlc3RyaWN0Iiwic2NvcGUiLCJsb2NrZWQiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlIiwibGluayIsIiRlbGVtZW50IiwiJGF0dHJpYnV0ZXMiLCIkc2NvcGUiLCIkd2F0Y2giLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoZWFkaW5nIiwiaWNvbiIsInN2Z0ljb24iLCJhcnJvdyIsImR5RnVuYyIsImNsaWNrRnVuYyIsImNvbnRyb2xsZXIiLCJjb250cm9sbGVyQXMiLCJiaW5kVG9Db250cm9sbGVyIiwiJHRpbWVvdXQiLCJ2aXNpYmxlIiwiY2hhbmdlU3RhdGUiLCIkZXZlbnQiLCJsb2FkaW5nIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbiIsImZpbmFsbHkiLCJydW5DbGljayIsInVpU3JlZiIsInVpU3JlZkFjdGl2ZSIsImhyZWYiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOztBQUFBOztBQUlBLEtBQUksZUFBZSx1QkFBdUI7O0FBSDFDOztBQU9BLEtBQUksb0JBQW9CLHVCQUF1Qjs7QUFOL0M7O0FBVUEsS0FBSSxzQkFBc0IsdUJBQXVCOztBQVRqRDs7QUFhQSxLQUFJLHFCQUFxQix1QkFBdUI7O0FBRWhELFVBQVMsdUJBQXVCLEtBQUssRUFBRSxPQUFPLE9BQU8sSUFBSSxhQUFhLE1BQU0sRUFBRSxTQUFTOztBQWJ2RixFQUFDLFVBQUNBLFNBQVk7O0dBRVpBLFFBQ0dDLE9BQU8sc0JBQXNCLENBQzVCLGVBRURDLFVBQVUscUJBQVdDLE1BQU0scUJBQVdELFdBQ3RDQSxVQUFVLDBCQUFnQkMsTUFBTSwwQkFBZ0JELFdBQ2hEQSxVQUFVLDRCQUFrQkMsTUFBTSw0QkFBa0JELFdBQ3BEQSxVQUFVLDJCQUFpQkMsTUFBTSwyQkFBaUJEO0lBRXBERixTOzs7Ozs7QUNoQkg7O0FBRUEsUUFBTyxlQUFlLFNBQVMsY0FBYztHQUMzQyxPQUFPOzs7QUFIVDs7QUFRQSxLQUFJLGFBQWEsdUJBQXVCOztBQVB4Qzs7QUFXQSxLQUFJLFNBQVMsdUJBQXVCOztBQUVwQyxV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QU8sZUFBZSxTQUFTLGNBQWM7R0FDM0MsT0FBTzs7O0FBSFQ7O0FBUUEsS0FBSSxlQUFlLHVCQUF1Qjs7QUFQMUM7O0FBV0EsS0FBSSxhQUFhLHVCQUF1Qjs7QUFFeEMsVUFBUyx1QkFBdUIsS0FBSyxFQUFFLE9BQU8sT0FBTyxJQUFJLGFBQWEsTUFBTSxFQUFFLFNBQVM7O0FBWHZGLEtBQUlyQixZQUFZLFNBQVpBLFlBQWtCOztHQUVwQixPQUFPO0tBQ0xFLFVBQVU7S0FDVkMsT0FBTztPQUNMK0IsUUFBUTtPQUNSQyxjQUFjO09BQ2RDLE1BQU07T0FDTkMsUUFBUTs7S0FFVi9CLFlBQVk7S0FDWkM7S0FDQWU7S0FDQUMsY0FBYztLQUNkQyxrQkFBa0I7Ozs7QUFpQnRCLFNBQVEsVUFaTztHQUNidkIsTUFBTTtHQUNORDs7Ozs7OztBQ3hCRjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXLEc7Ozs7OztBQ0ExQjs7QUFFQSxRQUFPLGVBQWUsU0FBUyxjQUFjO0dBQzNDLE9BQU87OztBQUdULFNBQVEsVUFOTyxZQUFXOztHQUV4QiIsImZpbGUiOiJhbmd1bGFyLW1hdGVyaWFsLXNpZGVtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzBiZmUxYzJmNzIyMTVkNGRjYTEiLCJpbXBvcnQgbWRTaWRlbWVudSBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudSc7XG5pbXBvcnQgbWRTaWRlbWVudUdyb3VwIGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAnO1xuaW1wb3J0IG1kU2lkZW1lbnVDb250ZW50IGZyb20gJy4vc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudCc7XG5pbXBvcnQgbWRTaWRlbWVudUJ1dHRvbiBmcm9tICcuL3NjcmlwdHMvbWRTaWRlbWVudUJ1dHRvbic7XG5cbigoYW5ndWxhcikgPT4ge1xuXG4gIGFuZ3VsYXJcbiAgICAubW9kdWxlKCduZ01hdGVyaWFsU2lkZW1lbnUnLCBbXG4gICAgICAnbmdNYXRlcmlhbCdcbiAgICBdKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudS5uYW1lLCBtZFNpZGVtZW51LmRpcmVjdGl2ZSlcbiAgICAuZGlyZWN0aXZlKG1kU2lkZW1lbnVHcm91cC5uYW1lLCBtZFNpZGVtZW51R3JvdXAuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUNvbnRlbnQubmFtZSwgbWRTaWRlbWVudUNvbnRlbnQuZGlyZWN0aXZlKVxuICAgIC5kaXJlY3RpdmUobWRTaWRlbWVudUJ1dHRvbi5uYW1lLCBtZFNpZGVtZW51QnV0dG9uLmRpcmVjdGl2ZSk7XG5cbn0pKGFuZ3VsYXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgbGluayBmcm9tICcuL2xpbmsnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgbG9ja2VkOiAnQD9tZExvY2tlZCdcbiAgICB9LFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBsaW5rXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnUnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51L2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgbGV0IGxvY2tlZCA9ICRhdHRyaWJ1dGVzLmxvY2tlZCAmJiAnbWQtc2lkZW1lbnUtbG9ja2VkJztcblxuICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudSAkeyBsb2NrZWQgfVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+YDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS90ZW1wbGF0ZS5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCRzY29wZSwgJGVsZW1lbnQsICRhdHRyaWJ1dGVzKSB7XG5cbiAgJHNjb3BlLiR3YXRjaChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJGF0dHJpYnV0ZXMubG9ja2VkO1xuICB9LCBmdW5jdGlvbihsb2NrZWQpIHtcbiAgICBpZiAobG9ja2VkKSB7XG4gICAgICAkZWxlbWVudFswXS5jbGFzc0xpc3QuYWRkKCdtZC1zaWRlbWVudS1sb2NrZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGVsZW1lbnRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnbWQtc2lkZW1lbnUtbG9ja2VkJyk7XG4gICAgfVxuICB9KTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudS9saW5rLmpzIiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUdyb3VwJyxcbiAgZGlyZWN0aXZlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUdyb3VwL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuICc8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtZ3JvdXBcIiBmbGV4IGxheW91dD1cImNvbHVtblwiIGxheW91dC1hbGlnbj1cInN0YXJ0IHN0YXJ0XCIgbmctdHJhbnNjbHVkZT48L2Rpdj4nO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51R3JvdXAvdGVtcGxhdGUuanMiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgaGVhZGluZzogJ0BtZEhlYWRpbmcnLFxuICAgICAgaWNvbjogJ0A/bWRJY29uJyxcbiAgICAgIHN2Z0ljb246ICdAP21kU3ZnSWNvbicsXG4gICAgICBhcnJvdzogJ0A/bWRBcnJvdycsXG4gICAgICBkeUZ1bmM6ICcmJyxcbiAgICAgIGNsaWNrRnVuYzogJyYnXG4gICAgfSxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGUsXG4gICAgY29udHJvbGxlcixcbiAgICBjb250cm9sbGVyQXM6ICckbWRTaWRlbWVudUNvbnRlbnQnLFxuICAgIGJpbmRUb0NvbnRyb2xsZXI6IHRydWVcbiAgfTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnbWRTaWRlbWVudUNvbnRlbnQnLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51Q29udGVudC9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkdGltZW91dCkge1xuXG4gIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXG4gIHRoaXMuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAoJGV2ZW50KSB7XG4gICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmR5RnVuYykge1xuICAgICAgdGhpcy5keUZ1bmMoKS50aGVuKCgpID0+IHtcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICAkdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcbiAgfTtcblxuICB0aGlzLnJ1bkNsaWNrID0gZnVuY3Rpb24gKCRldmVudCkge1xuICAgIGlmICgkZXZlbnQpIHtcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2xpY2tGdW5jKSB7XG4gICAgICB0aGlzLmNsaWNrRnVuYygpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvY29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibWQtc2lkZW1lbnUtY29udGVudFwiIGxheW91dD1cImNvbHVtblwiIG5nLWNsYXNzPVwieydtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZX1cIj5cbiAgICAgIDxkaXYgZmxleCBjbGFzcz1cIm1kLWJ1dHRvbiBtZC1zaWRlbWVudS10b2dnbGVcIiBuZy1jbGljaz1cIiRtZFNpZGVtZW51Q29udGVudC5ydW5DbGljaygkZXZlbnQpOyAkbWRTaWRlbWVudUNvbnRlbnQuY2hhbmdlU3RhdGUoJGV2ZW50KTtcIiBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5oZWFkaW5nXCIgbmctY2xhc3M9XCJ7ICdtZC1hY3RpdmUnOiAkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZSB9XCI+XG4gICAgICAgIDxkaXYgbGF5b3V0PVwicm93XCI+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuc3ZnSWNvblwiIG1kLXN2Zy1pY29uPVwie3sgJG1kU2lkZW1lbnVDb250ZW50LnN2Z0ljb24gfX1cIj48L21kLWljb24+XG4gICAgICAgICAgPG1kLWljb24gbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuaWNvblwiPnt7ICRtZFNpZGVtZW51Q29udGVudC5pY29uIH19PC9tZC1pY29uPlxuICAgICAgICAgIDxzcGFuIGZsZXg+e3sgJG1kU2lkZW1lbnVDb250ZW50LmhlYWRpbmcgfX08L3NwYW4+XG4gICAgICAgICAgIDxtZC1pY29uIG5nLWNsaWNrPVwiJG1kU2lkZW1lbnVDb250ZW50LmNoYW5nZVN0YXRlKCRldmVudCk7XCIgbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQuYXJyb3dcIj5rZXlib2FyZF9hcnJvd19kb3duPC9tZC1pY29uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1kLXByb2dyZXNzLWxpbmVhciBuZy1pZj1cIiRtZFNpZGVtZW51Q29udGVudC5sb2FkaW5nXCI+PC9tZC1wcm9ncmVzcy1saW5lYXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtZC1zaWRlbWVudS13cmFwcGVyXCIgbmctaWY9XCIkbWRTaWRlbWVudUNvbnRlbnQudmlzaWJsZVwiIG1kLXNpZGVtZW51LWRpc2FibGUtYW5pbWF0ZSBuZy1jbGFzcz1cInsgJ21kLWFjdGl2ZSc6ICRtZFNpZGVtZW51Q29udGVudC52aXNpYmxlLCAnbWQtc2lkZW1lbnUtd3JhcHBlci1pY29ucyc6ICAkbWRTaWRlbWVudUNvbnRlbnQuaWNvbiB9XCIgbGF5b3V0PVwiY29sdW1uXCIgbmctdHJhbnNjbHVkZT48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdHMvbWRTaWRlbWVudUNvbnRlbnQvdGVtcGxhdGUuanMiLCJpbXBvcnQgY29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xuXG5sZXQgZGlyZWN0aXZlID0gKCkgPT4ge1xuXG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICBzY29wZToge1xuICAgICAgdWlTcmVmOiAnQD8nLFxuICAgICAgdWlTcmVmQWN0aXZlOiAnQD8nLFxuICAgICAgaHJlZjogJ0A/JyxcbiAgICAgIHRhcmdldDogJ0A/J1xuICAgIH0sXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZSxcbiAgICBjb250cm9sbGVyLFxuICAgIGNvbnRyb2xsZXJBczogJyRtZFNpZGVtZW51QnV0dG9uJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4gIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ21kU2lkZW1lbnVCdXR0b24nLFxuICBkaXJlY3RpdmVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHRzL21kU2lkZW1lbnVCdXR0b24vY29udHJvbGxlci5qcyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBgXG4gICAgPG1kLWJ1dHRvblxuICAgICAgY2xhc3M9XCJtZC1zaWRlbWVudS1idXR0b25cIlxuICAgICAgbGF5b3V0PVwiY29sdW1uXCI+XG4gICAgICA8ZGl2IGxheW91dD1cInJvd1wiIGxheW91dC1maWxsIGxheW91dC1hbGlnbj1cInN0YXJ0IGNlbnRlclwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+XG4gICAgPC9tZC1idXR0b24+XG4gIGA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0cy9tZFNpZGVtZW51QnV0dG9uL3RlbXBsYXRlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==