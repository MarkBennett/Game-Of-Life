(function() {
  var Cell, World, life;
  World = (function() {
    function World(map) {
      var width, x, y;
      this.cells = [];
      if (map) {
        width = Math.sqrt(map.length) - 1;
        for (y = 0; 0 <= width ? y <= width : y >= width; 0 <= width ? y++ : y--) {
          for (x = 0; 0 <= width ? x <= width : x >= width; 0 <= width ? x++ : x--) {
            if (map[x + (width * y)] === 1) {
              this.cells.push(new Cell(x, y));
            }
          }
        }
      }
    }
    World.prototype.iterate = function() {
      var cell, new_cells, _i, _len, _ref;
      new_cells = [];
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (this.neighbours(cell.x, cell.y).length > 1) {
          new_cells.push(cell);
        }
      }
      return this.cells = new_cells;
    };
    World.prototype.cells = function() {
      return this.cells;
    };
    World.prototype.populate = function(x, y) {};
    World.prototype.at = function(x, y) {
      var cell, matched, _i, _len, _ref;
      matched = void 0;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.x === x && cell.y === y) {
          matched = cell;
        }
      }
      return matched;
    };
    World.prototype.neighbours = function(x, y) {
      var dx, dy, found, resident, _i, _j, _len, _len2, _ref, _ref2;
      found = [];
      _ref = [-1, 1];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        dy = _ref[_i];
        _ref2 = [-1, 1];
        for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
          dx = _ref2[_j];
          resident = this.at(x + dx, y + dy);
          if (resident != null) {
            found.push(resident);
          }
        }
      }
      return found;
    };
    return World;
  })();
  Cell = (function() {
    function Cell(x, y) {
      this.x = x;
      this.y = y;
    }
    return Cell;
  })();
  life = {};
  life.World = World;
  exports.life = life;
}).call(this);
