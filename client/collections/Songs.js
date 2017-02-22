// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  server: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    this.fetch({
      url: this.server + '?order=-createdAt',
      succes: this.fetchSuccess,
    });
  },

  parse: function(data) {
    return data.results;
  }
});