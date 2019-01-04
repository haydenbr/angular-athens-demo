import * as angular from 'angular';

(function () {
    'use strict';

    angular
        .module('ngaApp.comics')
        .service('comicService', comicService);


    comicService.$inject = ['$http', 'apiUrl'];
    function comicService($http, apiUrl) {
        var service = {
            getComics: getComics
        };

        return service;

        function getComics(characterId) {
					return $http({
						url: apiUrl + 'characters/' + characterId + '/comics',
						method: 'GET',
						headers: {  }
					});
        }
    }
})();
