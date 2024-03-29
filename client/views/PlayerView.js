// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // this.$el.on('ended', function() {
    //   // Remove the song that ended from the queue
    //   console.log(song.model);

    //   // If there is another song on the queue, play that song....
    // });
  },
//Changed the ended listener to an event, access to the songModel
////on 'ended' call the songModel method .ended()
  events: {
    'ended':function(){
      this.model.ended();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
