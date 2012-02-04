extend('RekapiTimeline.view.rekapiTickmarks', Backbone.View.extend({

  'TEMPLATE': [
      '<div class="' + RekapiTimeline.constant.CSS_NS + 'tickmarks"></div>'
    ].join('')

  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);

  }

  ,'render': function () {
    return this.$el;
  }

}));
