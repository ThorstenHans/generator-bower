# Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    src: 'src'
    dist : 'dist'
  grunt.initConfig
    yeoman: yeomanConfig

    
    coffee:
      dist:
        files: [
          expand: true
          cwd: '<%%= yeoman.src %>'
          src: '{,*/}*.coffee'
          dest: '<%%= yeoman.dist %>'
          ext: '.js'
        ]
    uglify:
      build:
        src: '<%%=yeoman.dist %>/<%=slug%>.js'
        dest: '<%%=yeoman.dist %>/<%=slug%>.min.js'
    mochaTest:
      test: 
        options: 
          reporter: 'spec'
          compilers: 'coffee:coffee-script'
        src: ['test/**/*.coffee']

    grunt.registerTask 'default', [
      'mochaTest'
      'coffee'
      'uglify'
    ]