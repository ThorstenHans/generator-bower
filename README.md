# Generator-bower
[![Build Status](https://secure.travis-ci.org/ThorstenHans/generator-bower.png?branch=master)](https://travis-ci.org/ThorstenHans/generator-bower)

A generator for Yeoman, to generate Bower components.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-bower`
- Run: `yo bower`
- Run: `grunt` in order to run tetsts and compile bower component to js

Note: Use --coffee to generate coffe script.
Note: Usse --dummy to create a dummy project with dummy values.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)

## TODO ##

Version 0.1.0
1. Todo more secure tests.
1.1. Test generated content files.
1.2. Its possible to build entire generated component and test if results are ok?
2. bowerInstall -> Development tool, not dist.
3. concat -> Component modularization.
4. cssmin -> When has some Css on component.

Version 0.2.0
1. Add AngularJs components generation.
