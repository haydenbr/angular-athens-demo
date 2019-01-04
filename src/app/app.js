import * as angular from 'angular';

(function () {
    'use strict';

    angular
        .module('ngaApp', [
            'ngaApp.core',
            'ngaApp.layout',
            'ngaApp.widgets',
            'ngaApp.characters',
            'ngaApp.comics',
            'ngaApp.quiz'
        ]);
})();
