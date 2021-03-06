module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), // the package file to use

        qunit: {
            all: ['tests/*.html']
        },


        bower: {
            target: {
                rjsConfig: 'www/js/common.js'
            }
        },


        // grunt-express will serve the files from the folders listed in `bases`
        // on specified `port` and `hostname`
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "localhost",
                    bases: ['www'], // Replace with the directory you want the files served from
                    // Make sure you don't use `.` or `..` in the path as Express
                    // is likely to return 403 Forbidden responses if you do
                    // http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
                    livereload: true
                }
            }
        },

        // grunt-watch will monitor the projects files
        watch: {
            all: {
                // Replace with whatever file you want to trigger the update from
                // Either as a String for a single entry
                // or an Array of String for multiple entries
                // You can use globing patterns like `css/**/*.css`
                // See https://github.com/gruntjs/grunt-contrib-watch#files
                files: ['www/*.*', 'tests/*.js', 'tests/*.html', 'src/*.js'],
                /*
                tasks: ['qunit']
                */
                options: {
                    livereload: true
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        }


    });
// load up your plugins
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-open');

    grunt.registerTask('default', ['qunit']);
    grunt.registerTask('server',[
        'express',
        'open',
        'watch'
    ]);
    // A very basic default task.
    grunt.registerTask('fuck', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
};