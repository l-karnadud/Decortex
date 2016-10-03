//var app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider.

        when('/folder', {
            templateUrl: 'folders/folders.template.html',
            controller: 'Folders'
        }).
        when('/contacts', {
            templateUrl: 'contacts/view2.html',
            controller: 'Contacts'
        })./*
        when('/picture/:pictureId', {
            template: '<picture-detail></picture-detail>'
        }).*/
        when('/gallery/:galleryId', {
            template: '<gallery></gallery>'
            
        })
});