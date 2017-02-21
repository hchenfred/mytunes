// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add ended dequeue', function() {
      this.render();
    }, this);
  },

  render: function() {
    // clear out past queue view
    this.$el.empty();
    // loops through collection and passes each to renderSong
    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },

  renderSong: function(song) {
    var songView = new SongQueueEntryView({model: song});
    this.$el.append(songView.render());
  } 

});
