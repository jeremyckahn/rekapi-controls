extend('RekapiTimeline.model.actor', Backbone.Model.extend({

  'initialize': function (opts) {
    this.headerView = new RekapiTimeline.view.actorHeader({
      'model': this
    });

    this.timelineView = new RekapiTimeline.view.actorTimeline({
      'model': this
    });
  }

}));