life = require('../src/life').life

beforeEach ->
  matchers =
    toBeEmpty: ->
      @actual.length == 0
  @addMatchers matchers

describe "World", ->
  describe "after an iteration", ->
    beforeEach ->
      @world = new life.World()

    it "should be barren if there are no cells", ->
      @world.iterate()

      expect(@world.cells).toBeEmpty()

    it "should kill any cell with fewer than two neighbours", ->
      map = [
        1, 0, 0
        0, 0, 0
        0, 1, 1
      ]
      @world = new life.World(map)
      @world.iterate()

      expect(@world.cells).toBeEmpty()

    it "should preserve cells with two neighbours", ->
      map = [
        1, 0, 0
        0, 1, 0
        0, 0, 1
      ]
      @world = new life.World(map)
      console.log(@world.cells)
      @world.iterate()

      expect(@world.at(1,1)).toBeDefined()
