/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('bower generator', function () {

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

  it('creates expected files', function (done) {
    // And check for them...
    var expected = [
      // add files you expect to exist here.
      '.jshintrc',
      '.editorconfig',

      'Gruntfile.coffee',
      'bower.json',
      'package.json',

      'src/bower-mock.coffee',
      'test/bower-mock-tests.coffee',

      'examples/index.html'
    ];

    helpers.mockPrompt(this.app, {
      'bowerComponentName': 'bower mock',
      'description': 'A Mock to test this package.',
      'livereloadPort': 35000
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

  // Check package.json and bower.json
  it('test basic file values', function (done) {
    // body...
    done();
  });

});