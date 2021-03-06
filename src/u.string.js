;(function() {
  "use strict";

  var root = this;

  // String utils
  var _string = {
    /**
     * Strip HTML tags
     */
    stripTags: function(str) {
      return str.replace(/<[^>]+>/gi, '');
    },

    /**
     * String repeat
     */
    repeat: function(str, times) {
      return new Array(Math.abs(times || 1) + 1).join(str);
    },

    /**
     * String format
     */
    format: function(str, data) {
      return str.replace(/\$\{(\w+)\}/gi, function(match, parensMatch) {
        if (data[parensMatch] !== undefined) {
          return typeof data[parensMatch] === 'function' ? data[parensMatch]() : data[parensMatch];
        }

        return match;
      });
    }
  };

  // Export NodeJS & Browser
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _string;
    }
    
    exports = _string;
  } else {
    root.u.string = _string;
  }

}.call(this));
