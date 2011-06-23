life = require('../src/life').life

describe "the world", ->
  beforeEach ->
    @world = new life.World

  describe "after an iteration", ->
    it "should expire any live cell with fewer than two live neighbours", ->
      @world.populate(1,1)
      @world.populate(4,4)
      @world.populate(3,4)
      @world.iterate()

      expect(@world.at(1,1)).toBeUndefined();
      expect(@world.at(4,4)).toBeUndefined();
      expect(@world.at(3,4)).toBeUndefined();

    it "should sustain any live cell with two or three live neighbours", ->
      @world.populate(1,1)    # cell with two neighbours
      @world.populate(1,2)
      @world.populate(2,1)
      @world.iterate()

      expect(@world.at(1,1)).toBeAlive()

    it "should expire any live cell with more than three live neighbours dies", ->
      pending()
    it "should populate any dead cell exactly three live neighbours with a new live cell", ->
      pending()
