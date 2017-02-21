// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // this refers to the song outside of the event listener
    // we are binding that model to the pointer context
    var context = this;
    this.$el.on('ended', function() {
      // event listens change THIS inside of their callback functions to the event
      context.model.ended();
    });
    // binding this as the third parameter to the event listener does not work
      // this inside the event listener changes
  },


  // setSong invoked in AppView when currentSong is changed. this = currentSong
  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
