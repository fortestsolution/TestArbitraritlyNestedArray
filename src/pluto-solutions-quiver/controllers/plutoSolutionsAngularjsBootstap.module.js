(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('plutoSolutionsAngularjsBootstap1.config', [])
      .value('plutoSolutionsAngularjsBootstap1.config', {
          debug: true
      });

  // Modules
  angular.module('plutoSolutionsAngularjsBootstap1.directives', []);
  angular.module('plutoSolutionsAngularjsBootstap1.filters', []);
  angular.module('plutoSolutionsAngularjsBootstap1.services', []);
  angular.module('plutoSolutionsAngularjsBootstap1',
      [
          'plutoSolutionsAngularjsBootstap1.config',
          'plutoSolutionsAngularjsBootstap1.directives',
          'plutoSolutionsAngularjsBootstap1.filters',
          'plutoSolutionsAngularjsBootstap1.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
