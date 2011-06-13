life = require('../src/life.js')

describe "Conway's Game of Life", ->
  describe "the world", ->
    beforeEach ->
      @world = new life.World
    it "should allow us to add cells to a specific location", ->
      cell = @world.addCell(1,3)

      expect(@world.at(1,3)).toEqual(cell)

    describe "after one iteration", ->
      it "should be empty if it was empty", ->
        @world.iterate()

        expect(@world.cells.length).toEqual(0)

      it "should kill all cells with fewer than two live neighbours, as if caused by under-population", ->
        @world.addCell(0,0)

        @world.iterate()
        
        expect(@world.cells.length).toEqual(0)

      it "should sustain all cells with two or three neighbours", ->
        cell = @world.addCell(1,1)
        @world.addCell(0,0)
        @world.addCell(2,2)

        @world.iterate()

        expect(@world.at(1,1)).toEqual(cell)
