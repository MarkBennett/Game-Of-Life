(function() {
  var Cell, World, life, _;
  _ = require("underscore");
  World = (function() {
    function World() {
      this.cells = [];
    }
    World.prototype.populate = function(x, y, cell) {
      if (cell == null) {
        cell = new Cell(x, y);
      }
      this.cells.push(cell);
      return cell;
    };
    World.prototype.at = function(x, y) {
      found;      var cell, found, _i, _len, _ref;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        if (cell.x === x && cell.y === y) {
          found = cell;
        }
      }
      return found;
    };
    World.prototype.iterate = function() {
      var cell, dx, dy, neighbour, new_world, x, y, _i, _len, _ref, _ref2, _ref3;
      new_world = new World;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        cell.old_neighbour = true;
        new_world.populate(cell.x, cell.y, cell);
        for (dy = _ref2 = -1; _ref2 <= 1 ? dy <= 1 : dy >= 1; _ref2 <= 1 ? dy++ : dy--) {
          for (dx = _ref3 = -1; _ref3 <= 1 ? dx <= 1 : dx >= 1; _ref3 <= 1 ? dx++ : dx--) {
            if (!(dx === 0 && dy === 0)) {
              x = cell.x + dx;
              y = cell.y + dy;
              neighbour = new_world.at(x, y);
              if (neighbour === void 0) {
                neighbour = new_world.populate(x, y);
              }
              neighbour.addNeighbour();
            }
          }
        }
      }
      return this.cells = new_world.cells;
    };
    return World;
  })();
  Cell = (function() {
    function Cell(x, y) {
      this.x = x;
      this.y = y;
      this.neighbours = 0;
    }
    Cell.prototype.addNeighbour = function() {
      return this.neighbours = this.neighbours + 1;
    };
    return Cell;
  })();
  life = {};
  life.World = World;
  exports.life = life;
}).call(this);
