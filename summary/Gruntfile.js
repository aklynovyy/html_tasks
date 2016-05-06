'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/*/*.js', 'js/main.js'],
                dest: 'js/all.js',
            },
        },

        uglify: {
            // prod: {
            //     options: {
            //         sourceMap: false,
            //     },
            //     files: {
            //         'js/all.min.js': ['js/all.js'],
            //     },
            // },
            dev: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'js/sourcemap.map',
                },
                files: {
                    'js/all.min.js': ['js/all.js', 'js/main.js'],
                },
            },
        },

        compass: {
            dev: {
                options: {
                    config: './config.rb',
                    environment: 'production',
                    // basePath: '/',
                    sassDir: 'sass/',
                    cssDir: 'css/',
                    imagesDir: 'img/',
                    sourcemap: true,
                    force: true,
                },
            },
        },

        watch: {
            font: {
                files: ['img/font-images/*.svg'],
                tasks: ['webfont', 'beep'],
                options: {
                    event: ['changed', 'added', 'deleted'],
                    livereload: true,
                },
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['compass:dev', 'beep'],
                options: {
                    livereload: true,
                    spawn: false,
                },
            },
            html: {
                files: ['*.html'],
                options: {
                    event: ['changed', 'added', 'deleted', 'beep'],
                    livereload: true,
                    spawn: false,
                },
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat', 'uglify:dev', 'beep'],
                options: {
                    event: ['changed', 'added', 'deleted'],
                    livereload: true,
                    spawn: false,
                },
            },
        },

        webfont: {
            icons: {
                src: 'img/font-icons/*.svg',
                dest: 'fonts',
                destCss: 'sass/components',
                options: {
                    htmlDemo: true,
                    engine: 'node',
                    hashes: false,
                    stylesheet: 'scss',
                    relativeFontPath: '../fonts',
                    fontFilename: 'font-icon',
                    templateOptions: {
                        baseClass: 'icon',
                        classPrefix: 'icon-',
                        mixinPrefix: 'make-icon-',
                    },
                },
            },
        },
    });

    grunt.registerTask('default', [
        'concat',
        // 'uglify:dev',
        'compass',
        'webfont',
        'watch',
        'beep',
    ]);
};
