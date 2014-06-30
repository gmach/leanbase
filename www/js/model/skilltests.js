"use strict";
//Module pattern http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// Basically like class encapsulation . it improves speed when you pass jQuery in as $ since if you dont then referencing $
// inside the closure will use up time tying to walk up the scope to find where its defined.
define(['jquery'], function ($) {

    function Question(q, answers) {
        this.q = q;
        this.answersArray = answers;
    }

    var q1 = new Question('When reserved words are used as keys in object literals they must be ______?',
        [{'Prefixed with the @ operator' : false},
            {'This is not possible in javascript' : false},
            {'quoted':true},
            {'escaped':false}
        ]
    )

    var q2 = new Question('Which of the following inserts a new value into an array?',
        [{'Array.push(arr, x);' : false},
            {'arr + [arr.length] = x;' : false},
            {'arr[arr.length - 1] = x;':true},
            {'arr.end(); arr.value = x;':false},
            {'arr.length + arr = x;':false}
        ]
    )
    var q3 = new Question('What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [{'TypeError : Cannot convert to boolean' : false},
            {'NaN NaN' : false},
            {'false true':false},
            {'false false':true}
        ]
    )

    var q4 = new Question('Which are the different ways to affect the "this" reference in a function?',
        [{'Only by invoking through the .call() or .apply() method.' : false},
            {'Only by invoking a function with the "new" keyword' : false},
            {'Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.':true},
            {'Direct attribution, e.g. this = x;':false}
        ]
    )

    var q1j = new Question('Java - When reserved words are used as keys in object literals they must be ______?',
        [{'Prefixed with the @ operator' : false},
            {'This is not possible in javascript' : false},
            {'quoted':true},
            {'escaped':false}
        ]
    )

    var q2j = new Question('Java - Which of the following inserts a new value into an array?',
        [{'Array.push(arr, x);' : false},
            {'arr + [arr.length] = x;' : false},
            {'arr[arr.length - 1] = x;':true},
            {'arr.end(); arr.value = x;':false},
            {'arr.length + arr = x;':false}
        ]
    )
    var q3j = new Question('Java - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [{'TypeError : Cannot convert to boolean' : false},
            {'NaN NaN' : false},
            {'false true':false},
            {'false false':true}
        ]
    )

    var q4j = new Question('Java - Which are the different ways to affect the "this" reference in a function?',
        [{'Only by invoking through the .call() or .apply() method.' : false},
            {'Only by invoking a function with the "new" keyword' : false},
            {'Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.':true},
            {'Direct attribution, e.g. this = x;':false}
        ]
    )

    var q1h = new Question('HTML - When reserved words are used as keys in object literals they must be ______?',
        [{'Prefixed with the @ operator' : false},
            {'This is not possible in javascript' : false},
            {'quoted':true},
            {'escaped':false}
        ]
    )

    var q2h = new Question('HTML - Which of the following inserts a new value into an array?',
        [{'Array.push(arr, x);' : false},
            {'arr + [arr.length] = x;' : false},
            {'arr[arr.length - 1] = x;':true},
            {'arr.end(); arr.value = x;':false},
            {'arr.length + arr = x;':false}
        ]
    )
    var q3h = new Question('HTML - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [{'TypeError : Cannot convert to boolean' : false},
            {'NaN NaN' : false},
            {'false true':false},
            {'false false':true}
        ]
    )

    var q4h = new Question('HTML - Which are the different ways to affect the "this" reference in a function?',
        [{'Only by invoking through the .call() or .apply() method.' : false},
            {'Only by invoking a function with the "new" keyword' : false},
            {'Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.':true},
            {'Direct attribution, e.g. this = x;':false}
        ]
    )

    var q1c = new Question('CSS - When reserved words are used as keys in object literals they must be ______?',
        [{'Prefixed with the @ operator' : false},
            {'This is not possible in javascript' : false},
            {'quoted':true},
            {'escaped':false}
        ]
    )

    var q2c = new Question('CSS - Which of the following inserts a new value into an array?',
        [{'Array.push(arr, x);' : false},
            {'arr + [arr.length] = x;' : false},
            {'arr[arr.length - 1] = x;':true},
            {'arr.end(); arr.value = x;':false},
            {'arr.length + arr = x;':false}
        ]
    )
    var q3c = new Question('CSS - What will happen in the console after executing this code? if ("foo") { console.log("foo" === false); console.log("foo" === true); }',
        [{'TypeError : Cannot convert to boolean' : false},
            {'NaN NaN' : false},
            {'false true':false},
            {'false false':true}
        ]
    )

    var q4c = new Question('CSS - Which are the different ways to affect the "this" reference in a function?',
        [{'Only by invoking through the .call() or .apply() method.' : false},
            {'Only by invoking a function with the "new" keyword' : false},
            {'Invoking a function with the "new" keyword, invoking through the .call() method, invoking through the .apply() method.':true},
            {'Direct attribution, e.g. this = x;':false}
        ]
    )

    var questions = {'JavaScript' : [q1, q2, q3, q4],
        'Java' : [q1j, q2j, q3j, q4j],
        'HTML' : [q1h, q2h, q3h, q4h],
        'CSS' : [q1c, q2c, q3c, q4c]
    }


    return questions;

});
