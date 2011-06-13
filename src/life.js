(function() {
  var Cell, World;
  World = (function() {
    function World() {
      this.max_x = 10;
      this.max_y = 10;
      this.cells = [];
    }
    World.prototype.iterate = function() {
      var cell, neighbours, new_cells, _i, _len, _ref;
      new_cells = [];
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        neighbours = this.neighbours(cell.x, cell.y);
        if (neighbours.length > 1) {
          new_cells.push(cell);
        }
      }
      return this.cells = new_cells;
    };
    World.prototype.neighbours = function(x, y) {
      var dx, dy, neighbours, resident, _ref, _ref2;
      neighbours = [];
      for (dy = _ref = -1; _ref <= 1 ? dy <= 1 : dy >= 1; _ref <= 1 ? dy++ : dy--) {
        for (dx = _ref2 = -1; _ref2 <= 1 ? dx <= 1 : dx >= 1; _ref2 <= 1 ? dx++ : dx--) {
          resident = this.at(x + dx, y + dy);
          if (resident != null) {
            neighbours.push(resident);
          }
        }
      }
      return neighbours;
    };
    World.prototype.addCell = function(x, y) {
      var cell;
      cell = new Cell(x, y);
      this.cells.push(cell);
      return cell;
    };
    World.prototype.at = function(x, y) {
      var cell, resident, _i, _len, _ref;
      resident = void 0;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.at(x, y)) {
          resident = cell;
        }
      }
      return resident;
    };
    return World;
  })();
  Cell = (function() {
    function Cell(x, y) {
      this.x = x;
      this.y = y;
    }
    Cell.prototype.at = function(x, y) {
      return this.x === x && this.y === y;
    };
    return Cell;
  })();
  exports.World = World;
}).call(this);
