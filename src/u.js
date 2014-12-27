;(function() {
  "use strict";

  var root = this;
  var toString = Object.prototype.toString;

  // The `u` object
  var u = {};

  u.getType = function(obj) {
    return toString.call(obj).slice(8, -1);
  };

  // Type checker functions: `u.isObject(obj)`, `u.isArray(obj)`, etc.
  ['Object', 'Array', 'Function', 'String', 'Number', 'Date'].forEach(function(type) {
    var self = this;

    this['is' + type] = function(obj) {
      return self.getType(obj) === type;
    };
  }.bind(u));

  u.functions = function(obj) {
    return Object.keys(obj).filter(function(key) {
      return this.isFunction(obj[key]);
    }.bind(this));
  };

  // Export NodeJS & Browser
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = u;
    }

    exports = u;
  } else {
    root.u = u;
  }
}.call(this));