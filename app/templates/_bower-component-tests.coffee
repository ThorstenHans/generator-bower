chai = require 'chai'
sinon = require 'sinon'

{<%= validVariableName %>} = require '../src/<%= slug %>'

chai.should()

describe '<%= slug %>', ->
  it 'should do something', ->
    true.should.equal true