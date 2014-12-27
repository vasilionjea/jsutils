;(function() {

  // Number utils
  var _number = {
    /**
     * Pad positive number with a zero if needed.
     * Notice: it doesn't handle negative numbers.
     */
    pad: function(num) {
      return num >= 10 ? num : '0' + num;
    },

    /**
     * Always keep number between `0` and `total`.
     */
    bounds: function(i, total) {
      return Math.min(Math.max(0, i), total);
    },

    /** 
     * Random Hexadecimal
     * source: http://paulirish.com/2009/random-hex-color-code-snippets
     */
    randomHex: function() {
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    },

    /**
     * Returns all numbers between `from` and `to` incremented by the `rate`.
     */
    incrementsOf: function(rate, opts) {
      var increments = [];
      var current = opts.from;

      while (current <= opts.to) {
        increments.push(current);
        current += rate;
      }

      return increments;
    }
  };

  this.u.mixin(_number);

}.call(this));
