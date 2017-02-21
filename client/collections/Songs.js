// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  server: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    var context = this;
    $.ajax(this.server + '?order=-createdAt', {
      contentType: 'application/json',
      type: 'GET',
      success: function(data) {
        for (var i = 0; i < data.results.length; i++) {
          var newData = new SongModel(data.results[i]);
          if (!context.get(newData)) {
            context.add(newData);
          }
        }
      },
      // function within success is a callback and invoked as a free function invocation
        // must bind this as the Songs prior
      error: function(data) {
        console.log('Sorry data was unavailable');
      }
    });
  },

});