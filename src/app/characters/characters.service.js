(function () {
    'use strict';

    angular
        .module('ngaApp.characters')
        .service('characterService', characterService);

    characterService.$inject = ['$http', '$filter', 'apiUrl']
    function characterService($http, $filter, apiUrl) {
        var service = {
            getCharacters: getCharacters,
            getCharacterDetailsUrl: getCharacterDetailsUrl
        };

        return service;

        function getCharacters(term) {
            return $http({
							url: apiUrl + 'characters',
							method: 'GET',
							params: { nameStartsWith: term }
						});
        }

        function getCharacterDetailsUrl(character) {
            var detail = $filter('filter')(character.urls, {type: 'detail'});
            return detail.length > 0 ? detail[0].url : 'http://marvel.com';
        }
    }
})();
