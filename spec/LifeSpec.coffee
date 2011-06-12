life = require('../src/life.js')

describe "The World", ->
  beforeEach ->
    @world = new life.World
  it "iterates", ->
    @world.iterate()
