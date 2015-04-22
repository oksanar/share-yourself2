'use strict';

angular.module('myprojApp')
    .service('CRUD', ['$http', function ($http) {

        var _that = this;

        _that.configure = function (entity_config) {
           return  setCrud(entity_config);
        };


        function setCrud(entity) {

            var crud = {
                getAll: function () {
                    console.log("entity.entity_type", entity.entity_type);
                    return $http({
                        "method": "GET",
                        'url': '/api/' + entity.entity_type,
                        responseType: entity.responseType || "json"
                    });
                },
                getOne: function (id) {
                    return $http({
                        "method": "GET",
                        'url': '/api/' + entity.entity_type + '/' + id,
                        responseType: entity.responseType || "json"
                    });
                },
                create: function (data) {
                    return $http({
                        "method": "POST",
                        'url': '/api/' + entity.entity_type,
                        'data': data,
                        responseType: entity.responseType || "json"
                    });
                },
                update: function (id, data) {
                    return $http({
                        "method": "PUT",
                        'url': '/api/' + entity.entity_type + '/' + id,
                        'data': data,
                        responseType: entity.responseType || "json"
                    });
                },
                remove: function (id) {
                    return $http({
                        "method": "DELETE",
                        'url': '/api/' + entity.entity_type + '/' + id,
                        responseType: entity.responseType || "json"
                    });
                }

            };

            return crud;
        }


    }]);
