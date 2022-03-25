import Vue from 'vue'

Vue.filter('delimitComma', function (value) {
  return value.toLocaleString();
})