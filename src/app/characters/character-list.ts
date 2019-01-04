import * as angular from 'angular';

(function () {

    'use strict';

    angular
        .module('ngaApp.characters')
        .component('ngaCharacterList', {
            controller: CharacterList,
            controllerAs: 'vm',
            templateUrl: 'app/characters/character-list.html'
        });

    CharacterList.$inject = ['$mdSidenav', 'characterService'];
    function CharacterList($mdSidenav, characterService) {
        var vm = this;
        vm.characters = [];
        vm.search = search;
        vm.isVisible = false;
        vm.selectCharacter = selectCharacter;
        vm.selectedCharacter = null;
        vm.showProgress = false;

        function charactersGetComplete(characters) {
            vm.characters = characters;
            console.log(vm.characters);
            return vm.characters;
        }

        function search(name) {
            if (name) {
                vm.isVisible = false;
                vm.showProgress = true;

                characterService.getCharacters(name).then(charactersGetComplete).finally(function() { vm.showProgress = false; });
            } else {
                vm.showProgress = false;
                vm.characters = [];
            }
        }

        function selectCharacter(character) {
            vm.selectedCharacter = character;
            $mdSidenav('sidebar').toggle();
        }
    }
})();
