require("coffee-script");

beforeEach(function () {
  this.addMatchers({
    toBeDead: function() {
      return this.actual.alive === false;
    },
    toBeAlive: function() {
      return this.actual.alive === true;
    }
  });
});
