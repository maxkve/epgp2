"use strict";

angular.module("epgpApp").directive("memberCard", function() {
  return {
    restrict: "E",
    replace: false,
    transclude: false,
    scope: {
      user: "="
    },
    templateUrl: "public/components/layout/memberCard.directive.html",
    controller: function($scope) {}
  };
});
