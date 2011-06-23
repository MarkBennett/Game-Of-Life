(function() {
  var Cell, World, life;
  life = {};
  World = (function() {
    function World() {
      this.cells = [];
    }
    World.prototype.populate = function(x, y, alive) {
      var cell;
      if (alive == null) {
        alive = true;
      }
      cell = new Cell(x, y);
      this.cells.push(new Cell(x, y));
      return cell;
    };
    World.prototype.at = function(x, y) {
      var found;
      found = this.cells.filter(function(elem) {
        return elem.x === x && elem.y === y;
      });
      return found[0];
    };
    World.prototype.iterate = function() {
      var cell, cur_cell, dx, dy, new_world, x, y, _i, _j, _k, _l, _len, _len2, _len3, _len4, _ref, _ref2, _ref3, _ref4;
      new_world = new World;
      _ref = this.cells;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cell = _ref[_i];
        cell.num_neighbours = 0;
        new_world.cells.push(cell);
      }
      _ref2 = new_world.cells;
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        cell = _ref2[_j];
        _ref3 = [-1, 1];
        for (_k = 0, _len3 = _ref3.length; _k < _len3; _k++) {
          dy = _ref3[_k];
          _ref4 = [-1, 1];
          for (_l = 0, _len4 = _ref4.length; _l < _len4; _l++) {
            dx = _ref4[_l];
            if (dx === 0 && dy === 0) {
              continue;
            }
            x = cell.x + dx;
            y = cell.y + dy;
            cur_cell = new_world.at(x, y);
            if (cur_cell == null) {
              cur_cell = new_world.populate(x, y, false);
              cur_cell.num_neighbours = 0;
            }
            cur_cell.num_neighbours = cur_cell.num_neighbours + 1;
          }
        }
      }
      return new_world.cells = new_world.cells.filter(function(cell) {
        return cell.num_neighbours > 1;
      });
    };
    return World;
  })();
  Cell = (function() {
    function Cell(x, y, alive) {
      var _ref;
      _ref = [x, y, alive], this.x = _ref[0], this.y = _ref[1], this.alive = _ref[2];
    }
    return Cell;
  })();
  life.World = World;
  exports.life = life;
}).call(this);
