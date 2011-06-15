World = require("../src/life").life.World

beforeEach ->
  @addMatchers {
    toBeEmpty: ->
      return this.actual.length == 0
  }

describe "World", ->
  describe "#iterate", ->
    beforeEach ->
      @world = new World
      
    it "should terminate any cells with less than two neighbours", ->
      @world.populate(0,0)
      @world.populate(2,2)
      @world.populate(1,2)
      @world.iterate()

      expect(@world.cells).toBeEmpty()

    it "should sustain any cells with two neighbours", ->
      @world.populate(0,0)
      @world.populate(1,1)
      @world.populate(2,2)
      @world.iterate()

      expect(@world.cells.length).toEqual(1)

    it "should sustain any cells with three neighbours"
    it "should terminate any cells with more than three neighbours"
    it "should spawn new cells at locations with three neighbours"
