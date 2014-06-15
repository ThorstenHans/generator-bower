var Dummy = function () {

  this.createdumies = function (generator, coffeemode) {

    var folder = 'dummy/javascript/';
    if (coffeemode === true) {
      folder = 'dummy/coffee/';
      generator.copy(folder + '_dummy2.coffee', 'src/dummy2.coffee');
      generator.copy(folder + '_dummy3.coffee', 'src/dummy3.coffee');
    } else {
      generator.copy(folder + '_dummy2.js', 'src/dummy2.js');
      generator.copy(folder + '_dummy3.js', 'src/dummy3.js');
    }

  }

};

module.exports = new Dummy();