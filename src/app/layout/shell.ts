class Shell {}

angular
  .module('ngaApp.layout')
  .component('ngaShell', {
    controller: Shell,
    templateUrl: 'app/layout/shell.html'
  });