requirejs.config({
    baseUrl: 'js',
    paths: {
        angular: '/bower_components/angular/angular',
        'angular-ui-router': '/bower_components/angular-ui-router/release/angular-ui-router',
        bootstrap: '/bower_components/bootstrap/js',
        handlebars: '/bower_components/handlebars/handlebars',
        jquery: '/bower_components/jquery/dist/jquery',
        qunit: '/bower_components/qunit/qunit/qunit'
    },
    shim: {
        'bootstrap/affix':      { deps: ['jquery'], exports: '$.fn.affix' },
        'bootstrap/alert':      { deps: ['jquery'], exports: '$.fn.alert' },
        'bootstrap/button':     { deps: ['jquery'], exports: '$.fn.button' },
        'bootstrap/carousel':   { deps: ['jquery'], exports: '$.fn.carousel' },
        'bootstrap/collapse':   { deps: ['jquery', 'bootstrap/transition'], exports: '$.fn.collapse' },
        'bootstrap/dropdown':   { deps: ['jquery'], exports: '$.fn.dropdown' },
        'bootstrap/modal':      { deps: ['jquery'], exports: '$.fn.modal' },
        'bootstrap/popover':    { deps: ['jquery', 'bootstrap/tooltip'], exports: '$.fn.popover' },
        'bootstrap/scrollspy':  { deps: ['jquery'], exports: '$.fn.scrollspy' },
        'bootstrap/tab':        { deps: ['jquery'], exports: '$.fn.tab'        },
        'bootstrap/tooltip':    { deps: ['jquery'], exports: '$.fn.tooltip' },
        'bootstrap/transition': { deps: ['jquery'], exports: '$.fn.transition' },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    },
    packages: [

    ]
});

define(function (require) {
    var $ = require('jquery'),
        Handlebars = require('handlebars'),
        candidates = require('./model/candidate'),
        prescreen = require('./model/prescreen'),
        skilltests = require('./model/skilltests');
    $.fn.popover = require('bootstrap/popover');

    $(function () {
        $('a[rel="tooltip"], [data-toggle="tooltip"]').tooltip();
        $('[data-toggle="popover"]').popover();
    });

    Handlebars.registerHelper('list', function(items, options) {
        var out = "<ul>";

        for(var i=0, l=items.length; i<l; i++) {
            out = out + "<li>" + options.fn(items[i]) + "</li>";
        }

        return out + "</ul>";
    });

    var source   = $("#tmp").html();
    var template = Handlebars.compile(source);


    var context = {
        people: [
            {firstName: "Yehuda", lastName: "Katz"},
            {firstName: "Carl", lastName: "Lerche"},
            {firstName: "Alan", lastName: "Johnson"}
        ]
    };

    var html    = template(context);
    console.log(html);
    $("#main").html(html);

    var source2   = $("#some-template").html();
    var template2 = Handlebars.compile(source2);
    var data = { users: [
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
    ]};
    $("#main2").html(template2(data));


});;
