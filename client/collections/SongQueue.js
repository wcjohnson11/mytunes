// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    _.bindAll(this, 'enqueue', 'dequeue');
  },

  enqueue: function(data){},

  dequeue: function(){}

});
