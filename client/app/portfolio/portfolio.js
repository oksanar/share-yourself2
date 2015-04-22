'use strict';
angular.module('myprojApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'app/portfolio/portfolio.html',
                controller: 'PortfolioCtrl'
            })
            .state('portfolio-fileuploads', {
                url: '/portfolio/fileuploads',
                templateUrl: 'app/portfolio/fileuploads.html',
                controller: 'FileUploadCtrl'
            });
    });



