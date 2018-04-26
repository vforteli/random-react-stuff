// <binding BeforeBuild='less:production, cssmin:target, ngconstant:production, uglify:app_prod, uglify:dependencies' />
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true, // Create source map
                outputStyle: 'compressed' // Minify output
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: "sass",
                        src: [
                            "**/*.scss"
                        ],
                        dest: "wwwroot/minified/",
                        ext: ".css"
                    }
                ]
            }
        },

        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass:dist']
            }
        }
    });

    grunt.registerTask('default', ['cssmin', 'uglify', 'watch']);
};
