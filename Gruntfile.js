/*
 * grunt-html-test
 * https://github.com/helloyou2012/grunt-html-test
 *
 * Copyright (c) 2014 学霸
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
	 pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        'Gruntfile.js',
        'node_modules/grunt-contrib-jshint/tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
		  
        jshintrc: 'node_modules/grunt-contrib-jshint/node_modules/jshint/node_modules/exit/.jshintrc'
      }
    },
	
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    html_test: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      },
      custom_options: {
        options: {
          separator: ': ',
          punctuation: ' !!!'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/testing', 'test/fixtures/123']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
 grunt.loadTasks('node_modules/grunt-contrib-jshint/tasks');

 
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'nodeunit', ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test','cssmin']);

};
