life = {}

class World
  constructor: ->
    @cells = []
  populate: (x,y) ->
    cell = new Cell(x,y,true)
    @cells.push cell
    cell
  at: (x, y) ->
    found = undefined
    for cell in @cells
      if cell.x == x and cell.y == y
        found = cell
        break
    unless found?
      found = new Cell(x,y,false)
      @cells.push found
    found
  iterate: ->
    @proliferate()
    @cull()
  proliferate: ->
    cell.num_live_neighbours = 0 for cell in @cells
    for cell in @cells
      for neighbour in @neighbours(cell.x, cell.y)
        neighbour.num_live_neighbours = neighbour.num_live_neighbours + 1
  neighbours: (x,y) ->
    found = []
    for dy in [-1..1]
      for dx in [-1..1]
        continue if dx == 0 and dy == 0
        nx = x + dx
        ny = y + dy
        found.push(@at(nx, ny))
    found
  cull: (x,y) ->
    new_cells = []
    for cell in @cells
      if cell.alive? and cell.num_live_neighbours > 1 and cell.num_live_neighbours <= 3
        new_cells.push cell
      if not cell.alive and cell.num_live_neighbours == 3
        cell.alive = true
        new_cells.push cell
    @cells = new_cells

class Cell
  constructor: (x, y, alive) ->
    [@x, @y, @alive] = [x, y, alive]
    @num_live_neighbours = 0

life.World = World

exports.life = life
