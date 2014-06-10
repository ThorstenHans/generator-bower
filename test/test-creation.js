/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('bower generator', function () {

  var promt = {
    'bowerComponentName': 'bower mock',
    'description': 'A Mock to test this package.',
    'livereloadPort': 35000
  };

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('bower:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  describe('file generation test', function () {
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',

      'bower.json',
      'package.json',

      'examples/index.html'
    ];
    var coffee_file = [
      'Gruntfile.coffee',
      'src/bower-mock.coffee',
      'test/bower-mock-tests.coffee'
    ];
    var javascript_files = [
      'Gruntfile.js',
      'src/bower-mock.js',
      'test/bower-mock-tests.js'
    ];

    // Mock each test with basic information.
    beforeEach(function () {
      helpers.mockPrompt(this.app, promt);
      this.app.options['skip-install'] = true;
    });

    it('creates expected common files', function (done) {
      // And check for them...
      this.app.run({}, function () {
        assert.file(expected);
        done();
      });
    });

    it('creates expected coffee files', function (done) {
      this.app.options['coffee'] = true;
      // And check for them...
      this.app.run({}, function () {
        assert.file([].concat(expected, coffee_file));
        assert.noFile(javascript_files);
        done();
      });
    });

    it('creates expected javascipt files', function (done) {
      // And check for them...
      this.app.run({}, function () {
        assert.file([].concat(expected, javascript_files));
        assert.noFile(coffee_file);
        done();
      });
    });

  });

  /**
   * Test file contents.
   */
  describe('test file contents', function () {
    // Check package.json and bower.json
    // it('test basic file values', function (done) {
    //   // body...
    //   done();
    // });
  });

});