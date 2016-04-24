angular.module('app', ['ngRoute', 'schemaForm'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
    });

angular.module('app').config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {

    schemaFormDecoratorsProvider.defineAddOn(
        'bootstrapDecorator',         // Name of the decorator you want to add to.
        'awesome',                    // Form type that should render this add-on
        'templates/my/addon.html',    // Template name in $templateCache
        sfBuilderProvider.stdBuilders // List of builder functions to apply.
    );

});

angular.module('app').config(function(schemaFormDecoratorsProvider, sfBuilderProvider) {
    var base = 'views/decorators/';
    schemaFormDecoratorsProvider.defineDecorator('awesomeDecorator', {
        textarea: {template: base + 'textarea.html', builder: sfBuilderProvider.stdBuilders},
        button: {template: base + 'submit.html', builder: sfBuilderProvider.stdBuilders},
        text: {template: base + 'text.html', builder: sfBuilderProvider.stdBuilders},
        aman: {template: base + 'aman.html', builder: sfBuilderProvider.stdBuilders},

        // The default is special, if the builder can't find a match it uses the default template.
        'default': {template: base + 'default.html', builder: sfBuilderProvider.stdBuilders}
    }, []);
});

angular.module('app').config(['schemaFormDecoratorsProvider', function(decoratorsProvider){
    decoratorsProvider.addMapping('bootstrapDecorator', 'string', '/views/decorators/ckeditor.html');
}]);