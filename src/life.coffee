class World
  constructor: ->
    @max_x = 10
    @max_y = 10
    @cells = []
  iterate: ->
    new_cells = []
    for cell in @cells
      neighbours = @neighbours(cell.x, cell.y)
      if neighbours.length > 1
        new_cells.push cell
    @cells = new_cells
  neighbours: (x,y) -> 
    neighbours = []
    for dy in [-1..1]
      for dx in [-1..1]
        resident = @at(x+dx, y+dy)
        neighbours.push(resident) if resident?
    neighbours
  addCell: (x, y) ->
    cell = new Cell(x, y)
    @cells.push cell
    cell
  at: (x, y) ->
    resident = undefined
    for cell in @cells
      resident = cell if cell.at(x,y)
    resident

class Cell
  constructor: (x,y) ->
    @x = x
    @y = y
  at: (x, y) ->
    (@x == x && @y == y)

exports.World = World
