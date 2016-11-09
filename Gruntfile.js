module.exports = function (grunt) {
	
	 // Load the Grunt plugins.
    require('matchdep')
        .filterDev('grunt-*')
        .forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
		cssmin: {
            sitecss: {
                options: {
                    banner: '/* LicenseMgr Minified css file */'
                }, files: {
                    'minify/styles/main.min.css': [
                    'minify/styles/custom.css'
                    ]
                    
                }
            }
        }, 
		uglify: {
            options: {
                report: 'min',
                compress: true,
                mangle: true
            },
            'ng-app-min': {
                files: {
                    'minify/scripts/main.min.js': [
                     'app/scripts/main.js'
                    ]
                    
                }
            }
        }, 
		 uncss: {
            dist: {
                src: ['app/index.html'],
                dest: 'minify/styles/custom.css',
            }
        },
		
		jshint: {
			all: [
        'Gruntfile.js',
        'app/main.js'
		]},
		
		csslint: {
			strict: {
				options: {
				import: 2
				},
			src: ['app/styles/main.css']
			}
		},
    });
	
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-uncss');
	
    // Register the default tasks.
    grunt.registerTask('default', ['uglify','csslint','uncss', 'cssmin', 'jshint']);
};