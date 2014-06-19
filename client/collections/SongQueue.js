// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,

  initialize: function(){
    // _.bindAll(this, 'enqueue', 'dequeue', 'autoPlay');

    this.on('addSong', function() {
      if (this.length === 1) {
       this.autoPlay();
      }
    });

    this.on('ended', function(song) {
      this.remove(song);
      if (this.length >=1) {
        this.autoPlay();
      }
    }, this);

    this.on('dequeue', function(song){
      this.remove(song);
    },this);
  },


  autoPlay: function(){
    this.at(0).play();
  }

});
