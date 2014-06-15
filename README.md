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

### Version 0.2.0 ###
1. Add AngularJs components generation.


## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
