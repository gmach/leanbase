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
});