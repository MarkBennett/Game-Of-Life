(function() {
  var World;
  World = (function() {
    function World() {}
    World.prototype.iterate = function() {
      return console.log("To Do");
    };
    return World;
  })();
  exports.World = World;
}).call(this);
