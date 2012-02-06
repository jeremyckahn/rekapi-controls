extend('RekapiTimeline.view.actorTimeline', Backbone.View.extend({

  'events': {

  }

  ,'TEMPLATE': [
    '<div class="'
        + RekapiTimeline.constant.CSS_NS + 'actor-timeline split-right"></div>'
    ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.$summaryBlock = $(this.SUMMARY_BLOCK_TEMPLATE);
    this.summaryView = new RekapiTimeline.view.actorSummary({
      'model': this.model
    });
    this.$el.append(this.summaryView.$el);

    return this;
  }


  ,'render': function () {
    this.summaryView.render();

    return this.$el;
  }

}));
