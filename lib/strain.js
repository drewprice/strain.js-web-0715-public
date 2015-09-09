'use strict';

var strain = {
  keep: function (array, condition) {
    var kept = [];

    array.forEach(function (element) {
      if (condition(element)) kept.push(element);

    })

    return kept;
  },

  discard: function (array, condition) {
    var kept = [];

    array.forEach(function (element) {
      if (!condition(element)) kept.push(element);

    })

    return kept;
  }
};
