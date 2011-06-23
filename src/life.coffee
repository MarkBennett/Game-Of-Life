life = {}

class World
  constructor: ->
    @cells = []
  populate: (x,y, alive = true) ->
    cell = new Cell(x,y)
    @cells.push(new Cell(x,y))
    cell
  at: (x, y) ->
    found = @cells.filter (elem) ->
      return elem.x == x && elem.y == y
    found[0]
  iterate: ->
    new_world = new World
    for cell in @cells
      cell.num_neighbours = 0
      new_world.cells.push(cell)
    for cell in new_world.cells
      for dy in [-1,1]
        for dx in [-1, 1]
          if dx == 0 and dy == 0
            continue
          x = cell.x + dx
          y = cell.y + dy
          cur_cell = new_world.at(x,y)
          unless cur_cell?
            cur_cell = new_world.populate(x,y, false)
            cur_cell.num_neighbours = 0
          cur_cell.num_neighbours = cur_cell.num_neighbours + 1
     new_world.cells = new_world.cells.filter (cell) ->
      return cell.num_neighbours > 1

class Cell
  constructor: (x,y, alive) ->
    [@x, @y, @alive] = [x, y, alive]

life.World = World
exports.life = life
