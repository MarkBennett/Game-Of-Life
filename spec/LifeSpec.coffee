life = require('../src/life.js').life

describe "Conway's Game of Life", ->
  describe "given a new World, after one iteration", ->
    beforeEach ->
      @world = new life.World()
    it "should exterminate live cells with no live neighbours", ->
      @world.populate(1,1)
      @world.iterate()

      expect(@world.at(1,1)).toBeDead()

    it "should exterminate live cells with one live neighbour", ->
      @world.populate(1,1)
      @world.populate(1,2)
      @world.iterate()

      expect(@world.at(1,1)).toBeDead()

    it "should sustain live cells with two live neighbours", ->
      @world.populate(1,1)
      @world.populate(1,2)
      @world.populate(1,3)
      @world.iterate()

      expect(@world.at(1,2)).toBeAlive()

    it "should sustain live cells with three live neighbours", ->
      @world.populate(1,1)
      @world.populate(2,1)
      @world.populate(1,2)
      @world.populate(1,3)
      @world.iterate()

      expect(@world.at(1,2)).toBeAlive()
    it "should exterminate live cells with more than three live neighbours", ->
      @world.populate(1,1)
      @world.populate(1,0)
      @world.populate(2,1)
      @world.populate(2,2)
      @world.populate(0,1)
      @world.iterate()

      expect(@world.at(1,1)).toBeDead()

    it "should populate dead cells with three live neighbours", ->
      @world.populate(0,0)
      @world.populate(1,0)
      @world.populate(2,0)
      @world.iterate()

      expect(@world.at(1,1)).toBeAlive()
