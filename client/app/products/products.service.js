'use strict';

angular.module('myprojApp')
    .factory('products', ['CRUD', function (CRUD) {
        // Service logic
        //



        // Public API here
        var config = {
            'entity_type':'products'
        };
        var entity = CRUD.configure(config);

        return entity;

    }]);