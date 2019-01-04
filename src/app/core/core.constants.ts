import * as angular from 'angular';
import * as toastr from 'toastr';

(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .constant('toastr', toastr)
        .constant('toastTimeout', 1500)
        .constant('settings', getSettings())
        .constant('apiUrl', 'https://gateway.marvel.com/v1/public/')
        .constant('apiKey', '060596d5ba9d3fc738a34f714561f578');

    function getSettings() {
        var settings = {
            appErrorPrefix: '[Angular Heroes Error] ',
            appTitle: 'Angular Heroes',
            version: '1.0.0'
        };

        return settings;
    }
})();
