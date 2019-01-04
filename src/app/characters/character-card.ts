import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.characters')
        .component('ngaCharacterCard', {
            controller: CharacterCard,
            controllerAs: 'vm',
            bindings: {
                character: '<',
                onSelect: '&'
            },
            templateUrl: 'app/characters/character-card.html'
        });

    CharacterCard.$inject = ['imageService', 'characterService'];
    function CharacterCard(imageService, characterService) {
        var vm = this;
        vm.getCharacterImage = getCharacterImage;
        vm.getCharacterLink = getCharacterLink;
        vm.showCharacter = showCharacter;

        function getCharacterImage() {
            return vm.character && imageService.getImage('landscape_incredible', vm.character.thumbnail);
        }

        function getCharacterLink() {
            return vm.character && characterService.getCharacterDetailsUrl(vm.character);
        }

        function showCharacter() {
            vm.onSelect({character: vm.character});
        }
    }
})();
