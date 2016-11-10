module.exports = function (grunt) {
	
	 // Load the Grunt plugins.
	//require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
		cssmin: {
            sitecss: {
                options: {
                    banner: '/* LicenseMgr Minified css file */'
                }, files: {
                    'app/styles/main.min.css': [
                    'app/styles/main.css'
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
                    'app/scripts/main.min.js': [
                     'app/scripts/main.js'
                    ]
                    
                }
            }
        }, 
		
		 uncss: {
		  dist: {
			files: {
			   "app/styles/main.min.css": ['app/*.html']
			}
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
		
		imagemin: {
		  dist: {
			options: {
			  optimizationLevel: 5
			},
			files: [{
				expand: true,
				cwd: "app/images",
				src: ["**/*.{png,jpg,gif}"],
				dest: 'app/images/minify'
			}]
		  }
		},
    });
	
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	
	
    // Register the default tasks.
    grunt.registerTask('default', ['uglify','csslint', 'cssmin', 'uncss', 'jshint', 'imagemin']);
};