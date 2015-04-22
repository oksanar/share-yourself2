'use strict';

angular.module('myprojApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.awesomeThings = [];

        $http.get('/api/things').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
            socket.syncUpdates('thing', $scope.awesomeThings);
        });

        $scope.addThing = function () {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {name: $scope.newThing});
            $scope.newThing = '';
        };

        $scope.deleteThing = function (thing) {
            $http.delete('/api/things/' + thing._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('thing');
        });

        $scope.getIntroBlocks = function () {
            return transformed;
        };

        var intro_blocks = [
            {
                weight: 1,
                img_src: "assets/images/about.png",
                text: 'What really is the project "Share-YourSelf"',
                link_href: "/about"
            },
            {
                weight: 2,
                img_src: "assets/images/news.png",
                text: 'News of programming, web and tech',
                link_href: "/news"
            },
            {
                weight: 3,
                img_src: "assets/images/portfolio.png",
                text: 'All skills and abilities described there',
                link_href: "/portfolio"
            },
            {
                weight: 4,
                img_src: "assets/images/products.png",
                text: 'There you can choose a ready-made solution',
                link_href: "/products"
            },
            {
                weight: 5,
                img_src: "assets/images/contacts.png",
                text: 'Please contact us to discuss your ideas',
                link_href: "/contacts"
            }

        ];
        var transformed = _.sortByAll(intro_blocks, ['weight']);

    });
