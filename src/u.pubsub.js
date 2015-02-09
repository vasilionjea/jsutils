;(function(root) {
  "use strict";

  var _pubsub = {
    on: function(name, callback) {
      if(!this._callbacks) {
        this._callbacks = {};
      }

      if(!this._callbacks[name]) {
        this._callbacks[name] = [];
      }

      this._callbacks[name].push(callback);
      return this;
    },

    trigger: function() {
      var args = Array.prototype.slice.call(arguments);
      var name = args.shift();

      if(!this._callbacks || !this._callbacks[name]) {
        return;
      }

      this._callbacks[name].forEach(function(callback) {
        callback.apply(this, args);
      });

      return this;
    },

    off: function(name, callback) {
      var calls = this._callbacks;
      if(!calls) return;
      if(!arguments.length) this._callbacks = {};

      (name && callback && calls[name]) && calls[name].forEach(function(cb, i) {
        if(cb === callback) {
          calls[name].splice(i, 1);
        }
      });

      (name && !callback && calls[name]) && delete calls[name];

      return this;
    }
  };

  // Export NodeJS & Browser
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _pubsub;
    }
    
    exports = _pubsub;
  } else {
    root.u.pubsub = _pubsub;
  }
}(this));
