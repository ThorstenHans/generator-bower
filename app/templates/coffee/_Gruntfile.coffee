# Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    app: 'examples'
    src: 'src'
    dist : 'dist'
    extension: '<%= extension %>'

  grunt.initConfig
    yeoman: yeomanConfig

    coffee:
      build:
        files: [
          expand: true
          cwd: '<%%= yeoman.src %>'
          src: '{,*/}*.coffee'
          dest: '<%%= yeoman.dist %>'
          ext: '.js'
        ]

    watch:
      gruntfile:
        files: ['Gruntfile.js']
      livereload:
        options:
          livereload: '<%%= connect.options.livereload %>'
        files: [
          '<%%= yeoman.app %>/{,**/}*.html',
          '<%%= yeoman.app %>/{,**/}*.css'
        ]

    connect:
      options:
        port: 9000,
        hostname: "localhost",
        livereload: <%= livereloadPort %>
      livereload:
        options:
          open: 'http://localhost:<%%= connect.options.port%>',
          base: '<%%= yeoman.app %>'

    copy:
      dist:
        files: [
          expand: true,
          dot: true,
          cwd: '<%%= yeoman.src %>',
          dest: '<%%= yeoman.dist %>',
          src: [
            '{,**/}*.<%%= yeoman.extension %>'
          ]
        ]

    uglify:
      build:
        src: '<%%=yeoman.dist %>/*.js'
        dest: '<%%=yeoman.dist %>/<%=slug%>.min.js'

    mochaTest:
      test:
        options:
          reporter: 'spec'
          compilers: 'coffee:coffee-script'
        src: ['test/**/*.coffee']

    grunt.registerTask 'default', [
      'mochaTest'
      'coffee:build'
      'copy:dist'
      'uglify:build'
    ]

    grunt.registerTask 'serve', [
      'coffee:build'
      'connect:livereload'
      'watch'
    ]

