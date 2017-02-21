// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // change ln 11 and ln 12 to enqueue/dequeue
  template: _.template('<div class="song"> \
                          </div> \
                          <span class="title"><%- title %></span> \
                          <span class="artist">(<%- artist %>)</span> \
                          <div class="url">Find at: <%- url %></div> \
                        </div>'),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});
