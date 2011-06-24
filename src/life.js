(function() {
  var Cell, World, life;
  life = {};
  World = (function() {
    function World() {
      this.cells = [];
    }
    World.prototype.populate = function(x, y) {
      var cell;
      cell = new Cell(x, y, true);
      this.cells.push(cell);
      return cell;
    };
    World.prototype.at = function(x, y) {
      var cell, found, _i, _len, _ref;
      found = void 0;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.x === x && cell.y === y) {
          found = cell;
          break;
        }
      }
      if (found == null) {
        found = new Cell(x, y, false);
        this.cells.push(found);
      }
      return found;
    };
    World.prototype.iterate = function() {
      this.proliferate();
      return this.cull();
    };
    World.prototype.proliferate = function() {
      var cell, neighbour, _i, _j, _len, _len2, _ref, _ref2, _results;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        cell.num_live_neighbours = 0;
      }
      _ref2 = this.cells;
      _results = [];
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        cell = _ref2[_j];
        _results.push((function() {
          var _k, _len3, _ref3, _results2;
          _ref3 = this.neighbours(cell.x, cell.y);
          _results2 = [];
          for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
            neighbour = _ref3[_k];
            _results2.push(neighbour.num_live_neighbours = neighbour.num_live_neighbours + 1);
          }
          return _results2;
        }).call(this));
      }
      return _results;
    };
    World.prototype.neighbours = function(x, y) {
      var dx, dy, found, nx, ny, _ref, _ref2;
      found = [];
      for (dy = _ref = -1; _ref <= 1 ? dy <= 1 : dy >= 1; _ref <= 1 ? dy++ : dy--) {
        for (dx = _ref2 = -1; _ref2 <= 1 ? dx <= 1 : dx >= 1; _ref2 <= 1 ? dx++ : dx--) {
          if (dx === 0 && dy === 0) {
            continue;
          }
          nx = x + dx;
          ny = y + dy;
          found.push(this.at(nx, ny));
        }
      }
      return found;
    };
    World.prototype.cull = function(x, y) {
      var cell, new_cells, _i, _len, _ref;
      new_cells = [];
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if ((cell.alive != null) && cell.num_live_neighbours > 1 && cell.num_live_neighbours <= 3) {
          new_cells.push(cell);
        }
        if (!cell.alive && cell.num_live_neighbours === 3) {
          cell.alive = true;
          new_cells.push(cell);
        }
      }
      return this.cells = new_cells;
    };
    return World;
  })();
  Cell = (function() {
    function Cell(x, y, alive) {
      var _ref;
      _ref = [x, y, alive], this.x = _ref[0], this.y = _ref[1], this.alive = _ref[2];
      this.num_live_neighbours = 0;
    }
    return Cell;
  })();
  life.World = World;
  exports.life = life;
}).call(this);
