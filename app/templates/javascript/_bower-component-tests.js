/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');
var <%= validVariableName %> = require('../src/<%= slug %>');

describe('<%= slug %>', function () {
	it('elvis rock!', function () {
		
		assert(<%= validVariableName %>.tellMe() === 'Tell me how to keep you, satisfied!');

	});
});
