// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    _.bindAll(this, 'enqueue', 'dequeue', 'autoPlay');

    this.on('autoPlay', function() {
      if (this.length === 1) {
       this.autoPlay();
      }
    });
  },

  enqueue: function(song){
    this.add(song);
  },

  dequeue: function(){},
  autoPlay: function(){
    this.at(0).play();
  }

});
