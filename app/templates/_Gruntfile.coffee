# Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict'

mountFolder = (connect, dir) ->
    connect.static require('path').resolve(dir)

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  yeomanConfig =
    src: 'src'
    dist : './'

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

    connect:
      all:
        options:
          port: 9000,
          hostname: "localhost",
          middleware: (connect, options) ->
            return [
              # Serve the project folder
              connect.static(options.base)
            ]
    open:
      all:
        path: 'http://localhost:<%%= connect.all.options.port%>/examples/'
    watch:
      coffee:
        files: ['src/*.coffee'],
        tasks: ['coffee:build']

    grunt.registerTask 'default', [
      'mochaTest'
      'coffee:build'
      'uglify:build'
    ]

    grunt.registerTask 'server', [
      'coffee:build'
      'connect',
      'open'
      'watch'
    ]

