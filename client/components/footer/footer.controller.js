/**
 * Created by Oksana on 2015-02-16.
 */

'use strict';

angular.module('myprojApp')
    .controller('FooterCtrl', function ($scope) {
        $scope.year = new Date().getFullYear();
    });
