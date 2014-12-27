;(function() {
  "use strict";
  
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

  this.u.mixin(_date);

}.call(this));
