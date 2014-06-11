var JavaStrategy = function () {

	var strategyfolder = 'javascript/';

	/**
	 * Execute comands pertinet to cofee script.
	 *
	 * @yo generator: Must contains 'generator.componentName' with current component name.
	 */
	this.execute = function (generator) {
		generator.template(strategyfolder + '_bower-component-tests.js', 'test/' + generator.componentName + '-tests.js');
		generator.template(strategyfolder + '_bower-component.js', 'src/' + generator.componentName + '.js');
		generator.template(strategyfolder + '_Gruntfile.js', 'Gruntfile.js');
	}

};

module.exports = new JavaStrategy();