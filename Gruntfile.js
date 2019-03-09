module.exports = function(grunt){

grunt.initConfig({
       
	   //// point to json package file that changes when you install npm grunt plugin components
	   pkg: grunt.file.readJSON('package.json'),

		/**
		* Task
		**/

		//task: {

  concat: {
    js: {
	  src: ['js/1.js', 'js/2.js', 'js/animation.js'],
	  dest: 'build/js/animation.js',
	},
	  
	 css: {
	  src: ['css/1.css', 'css/2.css', 'css/style.css'],
	  dest: 'build/css/style.css',
	}, 
	  
	  html: {
	  src: ['index.html'],
	  dest: 'build/index.html',
	}, 
	  
  	},	
	////concat
	
    /////js hint
	jshint: {
    foohint: {
      src: ['js/1.js', 'js/2.js', 'js/animation.js'],
	  dest: 'build/js/animation.js',
    },
    },
	/////js hint
	
	///////////auto prefixer//
	autoprefixer: {
		distributionAutoPrefixer: {
	  options: {
		 safe: true,
		  browsers: ['iOS 7', 'last 10 Chrome versions', 'Firefox > 20', 'last 3 versions', 'ie 8', 'ie 9']
       },
		  
	    files: {
	  		'build/css/style_auto.css': 'build/css/style.css'
  	   }
	  
      }
  },
  ///////////auto prefixer//

	
  ///////////////UGLIFY//////////////
   uglify: {
    options: {
      mangle: false
    },
    uglifyAllJsFiles: {
      files: {
        'build/js/scripts.min.js': ['build/js/animation.js']
		  //'build/js/greensock.min.js': ['js/greensock.js']
      }
    }
  },
   ///////////////UGLIFY//////////////
	
	
   //////////////////  COPY FILES AND FOLDERS ////////////////
	
	
	
	//////////////////  COPY FILES AND FOLDERS ////////////////
		copy: {
	  mainImageCopy: {
		expand: true,
		src: 'images/*',
		dest: 'build/',
	  },
	
	  mainJsCopy: {
		expand: true,
		src: 'lib/*',
		dest: 'build/',
	  },
	},
	//////////////////  COPY FILES AND FOLDERS ////////////////
	
	
	
	
	////watch
	watch: {
		
		
	js: {
		files: ['js/**/*.js'],
		tasks: ['concat:js'],
	  },

	css: {
		files: ['css/**/*.css'],
		tasks: ['concat:css'],
	  },
		
	html: {
		files: ['**/*.html'],
		tasks: ['concat:html'],
	  },
	
	////js hint watch
	foohint: {
		files: ['js/**/*.js'],
		tasks: ['jshint']
	 },
	////js hint watch
		
	///////////auto prefixer//
	distributionAutoPrefixer: {
		files: ['css/**/*.css'],
		tasks: ['autoprefixer']
	 },
	 ///////////auto prefixer//
	
	///////////uglify js files//
	uglifyAllJsFiles: {
		files: ['js/**/*.js'],
		tasks: ['uglify']
	 },
	///////////uglify js files//
	
	
		
	//////////////////  COPY FILES AND FOLDERS ////////////////
	mainImageCopy: {
		files: ['images/*'],
		tasks: ['copy']
	 },
	mainJsCopy: {
		files: ['lib/*'],
		tasks: ['copy']
	 },
		
	//////////////////  COPY FILES AND FOLDERS ////////////////	
		
		
		
		
	},	
	////watch
	
	

});
	
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-tinyimg:100:256');
	grunt.loadNpmTasks('grunt-contrib-copy-force');
	grunt.loadNpmTasks('grunt-contrib-watch');
	//grunt.registerTask('default', ['concat', 'jshint', 'watch']);
	grunt.registerTask('default', ['concat', 'jshint', 'autoprefixer', 'uglify', 'copy', 'watch']);
	
	/*
    /////register plugins and tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.registerTask('default', ['task']);
	grunt.registerTask('default', ['concat','sass', 'watch', 'autoprefixer', 'jshint', 'uglify']);
	*/
}