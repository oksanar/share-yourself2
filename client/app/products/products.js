'use strict';

angular.module('myprojApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('products', {
                url: '/products',
                templateUrl: 'app/products/products.html',
                controller: 'ProductsCtrl'
            })
            .state('productsCreate', {
                url: '/products/add',
                templateUrl: 'app/products/cu/cu.html',
                controller: 'ProductsCreateCtrl'
            })
            .state('productsEdit', {
                url: '/products/edit/:id',
                templateUrl: 'app/products/cu/cu.html',
                controller: 'ProductsEditCtrl'
            });
    });



angular.module('controllerAsExample', [])
    .controller('SettingsController1', SettingsController1);

function SettingsController1() {
    this.name = "John Smith";
    this.contacts = [
        {type: 'phone', value: '408 555 1212'},
        {type: 'email', value: 'john.smith@example.org'} ];
}

SettingsController1.prototype.greet = function() {
    alert(this.name);
};

SettingsController1.prototype.addContact = function() {
    this.contacts.push({type: 'email', value: 'yourname@example.org'});
};

SettingsController1.prototype.removeContact = function(contactToRemove) {
    var index = this.contacts.indexOf(contactToRemove);
    this.contacts.splice(index, 1);
};

SettingsController1.prototype.clearContact = function(contact) {
    contact.type = 'phone';
    contact.value = '';
};

