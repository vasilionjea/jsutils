;(function() {
  "use strict";

  var root = this;
  var slice = Array.prototype.slice;
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


  // Return all functions of an object
  u.functions = function(obj) {
    return Object.keys(obj).filter(function(key) {
      return this.isFunction(obj[key]);
    }.bind(this));
  };


  /**
   * Copies properties from source(s) over to the target object.
   * - extend(target, source [source, source...N]);
   */
  u.extend = function() {
    var args = slice.call(arguments);
    var target = args.shift();
    var i = 0, len = args.length;

    for(i; i < len; i += 1) {
      Object.keys(args[i]).forEach(function(key) {
        if(!target[key]) {
          target[key] = args[i][key];
        }
      });
    }

    return target;
  }


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
