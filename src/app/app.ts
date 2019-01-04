import * as angular from 'angular';

import './vendor';
import './app-imports';

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
