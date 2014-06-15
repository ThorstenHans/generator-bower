# Generator-bower
[![Build Status](https://secure.travis-ci.org/ThorstenHans/generator-bower.png?branch=master)](https://travis-ci.org/ThorstenHans/generator-bower)

A generator for Yeoman, to generate Bower components.

## Usage ##

Install `generator-bower`:

```
npm install -g generator-bower
```

Make a new directory, and `cd` into it:

```
mkdir my-new-project
cd my-new-project
```

Run `yo bower`, optionally passing an component name:

```
yo bower [component-name]
```

Run `grunt` for building and `grunt serve` for preview

## Options ##

### CoffeeScript ###

For generators that output scripts, the --coffee option will output CoffeeScript instead of JavaScript.

For example:

```
yo bower --coffee
```

Will produce your initial code as appname.coffee.

Also, your gruntfile will be produces as coffee script.

### Dummy Component ###

To create an empty component with all features actived, user command dummy, like:

```
yo bower --dummy
```

### Notes ###

1. Usse --dummy to create a dummy project with dummy values.

## TODO ##

### Version 0.1.0 ###

1. subgenerator to add new CSS files to generating project.
2. Todo more secure tests: Test generated content files and possibility to build entire generated component and test if results are ok?
3. bowerInstall: Development tool to help the on who uses our generator to a
4. cssmin: When has some Css on component.

### Version 0.2.0 ###
1. Add AngularJs components generation.


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
