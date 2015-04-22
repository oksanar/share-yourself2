'use strict';

angular.module('myprojApp')
    .controller('ProductsCtrl', ['$scope', '$modal', 'Auth', 'products', 'socket', function ($scope, $modal, Auth, products, socket) {
        $scope.title = 'Products';

        $scope.isAdmin = Auth.isAdmin;

        $scope.add = function () {
            // window.location = "/products/add";

            var modalInstance = $modal.open({
                templateUrl: 'app/products/cu/cu.html',
                controller: 'ProductsCreateCtrl',
                resolve: {
                    form: function () {
                        return $scope.form;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                $scope.products.push(data);
                //getAllProducts();
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        }
        $scope.edit = function (id) {
            // window.location = "/products/add";

            var modalInstance = $modal.open({
                templateUrl: 'app/products/cu/cu.html',
                controller: 'ProductsEditCtrl',
                resolve: {
                    form: function () {
                        return $scope.form;
                    },
                    products_id: function () {
                        return id;
                    }
                }
            });
            modalInstance.result.then(function (data) {
                getAllProducts();
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });

        }

        $scope.remove = function (id) {
            products.remove(id).success(function (data) {
                console.log(data);
                getAllProducts();
            });
        }
        function getAllProducts() {
            products.getAll().success(function (data) {
                console.log(data);
                $scope.products = data;
            });
        }

        getAllProducts();


    }])
    .controller('ProductsEditCtrl', ['$scope', '$modalInstance', 'products_id', 'Auth', 'products', 'socket', function ($scope, $modalInstance, products_id, Auth, products, socket) {
        $scope.title = 'Products Edit';

        $scope.isAdmin = Auth.isAdmin;
        var products_id = $scope.products_id = products_id;
        $scope.init = function () {
            products.getOne(products_id).success(function (data) {
                $scope.form = data;
            });

        };
        $scope.save = function () {
            products.update(products_id, angular.copy($scope.form)).success(function (data) {
                console.log(data);
                $modalInstance.close(data);
            });
        }


    }])
    .controller('ProductsCreateCtrl', ['$scope', '$modalInstance', 'Auth', 'products', 'socket', function ($scope, $modalInstance, Auth, products, socket) {
        $scope.title = 'Products Create';

        $scope.isAdmin = Auth.isAdmin;


        $scope.init = function () {
            $scope.form = {
                title: "",
                body: ""
            };
        }
        $scope.save = function () {
            products.create(angular.copy($scope.form)).success(function (data) {
                console.log(data);
                $modalInstance.close(data);

            });


        }

    }]);
