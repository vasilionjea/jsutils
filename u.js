;(function() {
  var root = this;
  var toString = Object.prototype.toString;

  // The `u` object
  var u = function() { return u; };


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


  // Add custom functions to `u`
  u.mixin = function(obj) {
    this.functions(obj).forEach(function(name) {
      this[name] = obj[name];
    }.bind(this));
  };

  // Export
  root.u = u;
}.call(this));
