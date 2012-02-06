extend('RekapiTimeline.view.keyframeProperty', Backbone.View.extend({

  'TEMPLATE': [
    ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
  }

  ,'render': function () {
    return this.$el;
  }

}));

