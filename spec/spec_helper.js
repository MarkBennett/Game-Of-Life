require('coffee-script');

beforeEach(function() {
  this.addMatchers({
    toBeAlive: function() {
      return this.actual !== undefined;
    }
  });
});
