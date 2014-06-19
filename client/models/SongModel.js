// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  //triggering events here will trigger events on the collection!
  play: function(){
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },
  ended: function() {
    this.trigger('ended', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  }

});
