'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var _ = require('underscore.string');


var BowerGenerator = module.exports = function BowerGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(BowerGenerator, yeoman.generators.Base);

BowerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'bowerComponentName',
    message: "What's the name of your bower component?"
  },
  {
    name: 'description',
    message: 'Provide a short description for your component!'
  }];

  this.prompt(prompts, function (props) {
    this.bowerComponentName = props.bowerComponentName;
    this.slug = _.slugify(this.bowerComponentName);
    this.description = props.description;
    this.validVariableName = _.capitalize(_.slugify(this.bowerComponentName)).replace('-','');

    cb();
  }.bind(this));
};

BowerGenerator.prototype.app = function app() {
  this.mkdir('test');
  this.mkdir('src');
  this.mkdir('dist');
  var componentName = _.slugify(this.bowerComponentName);
  
  this.template('_bower-component.coffee', 'src/' + componentName + '.coffee');
  this.template('_bower-component-tests.coffee', 'test/' + componentName + '-tests.coffee');
  this.template('_Gruntfile.coffee', 'Gruntfile.coffee');
  this.copy('_package.json', 'package.json');
  this.template('_bower.json', 'bower.json');
};

BowerGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
