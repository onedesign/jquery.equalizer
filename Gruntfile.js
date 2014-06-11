module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("equalizer.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.equalizer.js"],
				dest: "dist/jquery.equalizer.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/jquery.equalizer.js"],
				dest: "dist/jquery.equalizer.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Watcher
		watch: {
			scripts: {
				files: ['src/*.js'],
				tasks: ['default'],
				options: {
					reload: true
				}
			}
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask("default", ["concat", "uglify", "watch"]);
	grunt.registerTask("travis", ["jshint"]);

};
