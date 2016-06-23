'use strict';

angular.module('whoSaidApp.auth', ['whoSaidApp.constants', 'whoSaidApp.util', 'ngCookies', 'ui.router']).config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map
