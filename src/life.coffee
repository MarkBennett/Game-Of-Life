class World
  constructor: (map) ->
    @cells = []

    if map
      width = Math.sqrt(map.length) - 1
      for y in [0..width]
        for x in [0..width]
          if map[x + (width * y)] == 1
            @cells.push new Cell(x, y)
  iterate: ->
    new_cells = []
    for cell in @cells
      if @neighbours(cell.x, cell.y).length > 1
        new_cells.push cell
    @cells = new_cells
  cells: ->
    @cells
  populate: (x, y) ->
  at: (x, y) ->
    matched = undefined
    for cell in @cells
      if cell.x == x && cell.y == y
        matched = cell
    matched
  neighbours: (x, y) ->
    found = []
    for dy in [-1, 1]
      for dx in [-1, 1]
        resident = @at(x + dx, y + dy)
        found.push resident if resident?
    found

class Cell
  constructor: (x, y) ->
    @x = x
    @y = y

life = {}
life.World = World
exports.life = life
