(function () {
    'use strict';

    angular
        .module('ngaApp.comics')
        .service('comicService', comicService);
    
    /* @ngInject */
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