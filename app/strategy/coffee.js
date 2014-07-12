var CoffeeStrategy = function () {

	var strategyfolder = 'coffee/';

	/**
	 * Execute comands pertinet to cofee script.
	 *
	 * @yo generator: Must contains 'generator.componentName' with current component name.
	 */
	this.execute = function (generator) {
		generator.template(strategyfolder + '_bower-component-tests.coffee', 'test/' + generator.componentName + '-tests.coffee');
		generator.template(strategyfolder + '_bower-component.coffee', 'src/' + generator.componentName + '.coffee');
		generator.template(strategyfolder + '_Gruntfile.coffee', 'Gruntfile.coffee');
	}

};

module.exports = new CoffeeStrategy();