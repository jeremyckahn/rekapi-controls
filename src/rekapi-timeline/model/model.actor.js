extend('RekapiTimeline.model.actor', Backbone.Model.extend({

  'initialize': function (opts) {
    this.view = new RekapiTimeline.view.actor({
      'model': this
    });
  }

}));
