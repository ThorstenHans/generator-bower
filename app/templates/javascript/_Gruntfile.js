'use strict'

//var semver = require('semver');

module.exports = function (grunt) {

  //mountFolder = (connect, dir) - >
  //connect.static require('path').resolve(dir)

  require('load-grunt-tasks')(grunt);

  var yeomanConfig = {
    app: 'example',
    src: 'src',
    dist: 'dist'
  };

  grunt.initConfig({
    yeoman: yeomanConfig,

    // Watches files for changes and runs tasks based on the changed files
    // Add it to coffee if needed;
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%%= connect.options.livereload %>'
        },
        files: [
          '<%$= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '<%$= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: "localhost",
        livereload: <%= livereloadPort %>
      },
      livereload: {
        options: {
          open: 'http://localhost:<%%= connect.all.options.port%>/examples/',
          base: [
            '.tmp',
            'dist/'
          ]
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%%= yeoman.dist %>/<%=slug%>.min.js' : ['<%%= yeoman.src %>/<%=slug%>.js']
        }
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    }

  });

  grunt.registerTask('default', [
    'mochaTest',
    'uglify'
  ]);

  grunt.registerTask('driven', [
    'connect:livereload',
    'watch'
  ]);

};