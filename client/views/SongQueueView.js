// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html("<th>Queue</th>").append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  addSong: function(song){
    this.collection.add(song);

    // If this is the only song in the queue, set it as currentSong
    // if (this.collection.length === 1) {
    //   this.set('currentSong', song);
    // }


    this.render();
  },

  autoPlay: function(){
    //if collection.length === 1 -->autoplay
    if (this.collection.length === 1){
      this.collection.autoPlay();
    }
    //else

  }

});
