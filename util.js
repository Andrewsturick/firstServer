'use strict';
var md5 = require('md5');
var request = require('request');


module.exports = {
  square: function (n){
    return n*n;
  },


  cubed: function(n){
    return n*n*n;
  },

  add: function (requestArray){
    var counter = 0;
    for (var i=0; i<requestArray.length; i++){
      counter = counter+ parseInt(requestArray[i]);
    }
    return counter;
  },

  gravatar: function(address){
    var key = md5(address);
    return 'http://www.gravatar.com/avatar/' + key;
  },

  stringCounter: function(string){
      var str = decodeURIComponent(string);

      this.chars =str.length;
      this.words =str.split(" ").length;
      this.avgLength = (str.length)/(string.split(" ").length);
      this.spaces = str.split(" ").length -1;



      return ( 'letters: ' + (this.chars-this.spaces) + '\n'
           + 'spaces: ' + this.spaces + '\n'
          + 'words: ' + this.words )
  },










}
