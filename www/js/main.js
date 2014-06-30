//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    baseUrl: 'js',
    paths: {
        angular: '/bower_components/angular/angular',
        'angular-ui-router': '/bower_components/angular-ui-router/release/angular-ui-router',
        bootstrap: '/bower_components/bootstrap/dist/js/bootstrap',
        handlebars: '/bower_components/handlebars/handlebars',
        jquery: '/bower_components/jquery/dist/jquery',
        qunit: '/bower_components/qunit/qunit/qunit'
    },
    shim: {
        bootstrap: {
            deps: [
                'jquery'
            ]
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    },
    packages: [

    ]
});

define(function (require) {
    var $ = require('jquery'),
        candidates = require('./model/candidate'),
        prescreen = require('./model/prescreen'),
        skilltests = require('./model/skilltests'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());
    });
});;
