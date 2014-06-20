// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,
  localStorage = new Store(SongQueue);

  initialize: function(){
    // _.bindAll(this, 'enqueue', 'dequeue', 'autoPlay');

    this.on('addSong', function() {
      if (this.length === 1) {
       this.autoPlay();
       localStorage['queue'] = 'hey';
      }
    });
    // on songModel.ended()
    this.on('ended', function(song) {
      //remove the song that ended
      this.remove(song);
      //call autoplay if songQueue.length >=1
      if (this.length >=1) {
        this.autoPlay();
      }
    }, this);
    //remove a song if it is dequeued
    this.on('dequeue', function(song){
      this.remove(song);
    },this);
  },

//Play whatever is at songQueue[0]
  autoPlay: function(){
    this.at(0).play();
  }

});
