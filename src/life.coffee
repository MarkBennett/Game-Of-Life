_ = require("underscore")

class World
  constructor: ->
    @cells = []
  populate: (x, y, cell) ->
    cell = new Cell(x,y) unless cell?
    @cells.push cell
    cell
  at: (x, y) ->
    found
    for cell in @cells
      if cell.x == x and cell.y == y
        found = cell
    found
  iterate: ->
    new_world = new World
    for cell in @cells
      cell.old_neighbour = true
      new_world.populate(cell.x, cell.y, cell)
      for dy in [-1..1]
        for dx in [-1..1]
          unless dx == 0 and dy == 0
            x = cell.x + dx
            y = cell.y + dy
            neighbour = new_world.at(x,y)
            neighbour = new_world.populate(x,y) if neighbour == undefined
            neighbour.addNeighbour()
    @cells = new_world.cells

class Cell
  constructor: (x, y) ->
    @x = x
    @y = y
    @neighbours = 0
  addNeighbour: ->
    @neighbours = @neighbours + 1

life = {}
life.World = World

exports.life = life
