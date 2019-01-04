import * as angular from 'angular';

(function () {
    'use strict';

    angular
        .module('ngaApp.core')
        .service('httpInterceptor', httpInterceptor);

    httpInterceptor.$inject = ['apiUrl', 'apiKey'];
    function httpInterceptor(apiUrl, apiKey) {
        var service = {
            request: request,
            response: response
        };

        return service;

        function isApiCall(url) {
            return url.indexOf(apiUrl) !== -1;
        }

        function request(config) {
            if (isApiCall(config.url)) {
                if (!config.params) {
                    config.params = {};
                }
                config.params.apikey = apiKey;
            }

            return config;
        }

        function response(response) {
            if (isApiCall(response.config.url)) {
                return response.data.data.results;
            }

            return response;
        }
    }
})();
