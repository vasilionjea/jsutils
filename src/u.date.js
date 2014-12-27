;(function() {
  "use strict";

  var root = this;
  
  // Date utils
  var _date = {
    getMonthName: function(date) {
      return [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ][(date || new Date()).getMonth()];
    },

    getDayName: function(date) {
     return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ][(date || new Date()).getDay()];
    }
  };

  // Export NodeJS & Browser
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _date;
    }
        
    exports = _date;
  } else {
    root.u.date = _date;
  }

}.call(this));
