'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('underscore.string');


var BowerGenerator = yeoman.generators.Base.extend({
  /**
   * Initialization Function.
   */
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Bower Components generator!'));
    this.log(chalk.blue.bgRed.bold('Lets Rock!!!'));

    var prompts = [{
      name: 'bowerComponentName',
      message: "What's the name of your bower component?"
    }, {
      name: 'description',
      message: 'Provide a short description for your component!'
    }, {
      name: 'livereloadPort',
      message: 'Which port do you wish to use for livereloading?'
    }];

    this.prompt(prompts, function (props) {
      this.bowerComponentName = props.bowerComponentName;
      this.slug = _.slugify(this.bowerComponentName);
      this.description = props.description;
      // TODO: See about it!!
      this.livereloadPort = props.livereloadPort;
      this.validVariableName = _.capitalize(_.slugify(this.bowerComponentName)).replace('-', '');

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('test');
    this.mkdir('src');
    this.mkdir('examples');
    this.componentName = _.slugify(this.bowerComponentName);

    this.template('_bower-component.coffee', 'src/' + this.componentName + '.coffee');
    this.template('_bower-component-tests.coffee', 'test/' + this.componentName + '-tests.coffee');
    this.template('_Gruntfile.coffee', 'Gruntfile.coffee');
    this.copy('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.copy('_index.html', 'examples/index.html');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }

});

module.exports = BowerGenerator;