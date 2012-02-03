extend('RekapiTimeline.view.actor', Backbone.View.extend({

 'events': {

  }

  ,'TEMPLATE': [
    '<li class="' + RekapiTimeline.constant.CSS_NS + 'actors"></li>'
  ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.headerView = new RekapiTimeline.view.actorHeader({
      'model': this.model
    });
    this.timelineView = new RekapiTimeline.view.actorTimeline({
      'model': this.model
    });

    return this;
  }

  ,'render': function () {
    this.$el
      .append(this.headerView.render())
      .append(this.timelineView.render());

    return this.$el;
  }

}));
