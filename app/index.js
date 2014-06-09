'use strict';

var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('underscore.string');


/**
 * Initialization Function.
 */
var BowerGenerator = module.exports = function Appgenerator(args, options) {
  yeoman.generators.Base.apply(this, arguments);

  // Coffee mode.
  this.coffee = options.coffee;

  // After finishing.
  this.on('end', function () {
    if (!this.options['skip-install']) {
      this.installDependencies();
    }
  });

  this.pkg = require('../package.json');
};

require('util').inherits(BowerGenerator, yeoman.generators.Base);


BowerGenerator.prototype.askFor = function askFor() {
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
    // TODO: This must be optional.
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
};

BowerGenerator.prototype.app = function app() {
  this.mkdir('test');
  this.mkdir('src');
  this.mkdir('examples');
  this.componentName = _.slugify(this.bowerComponentName);

  var strategy;
  if (this.coffee !== true) {
    this.log(chalk.yellow('Only Coffee Script is suported. Fording Coffee script.'));
    this.coffee = true;
  }
  if (this.coffee === true) {
    this.log('Generating CoffeeScript code.');
    strategy = require('./strategy/coffee.js');
  } else {
    this.log('Generating javaScript code.');
    // TODO!
  }

  // Execute extrategy configuration.
  strategy.execute(this);

  this.copy('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
  this.copy('_index.html', 'examples/index.html');
};

BowerGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};