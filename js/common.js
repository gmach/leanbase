//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: '/js',
    paths: {
        app: '../app',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        jquery: '../bower_components/jquery/dist/jquery',
        qunit: '../bower_components/qunit/qunit/qunit',
        angular: '../bower_components/angular/angular',
        'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ]
        }
    },
    packages: [

    ]
});

requirejs([
    'jquery',
    'bootstrap'
], function($, _bootstrap){
    // this is where all the site code should begin
    return {};
});
