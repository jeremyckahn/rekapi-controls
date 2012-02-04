extend('RekapiTimeline.view.rekapiTickmarks', Backbone.View.extend({

  'TEMPLATE': [
      '<div class="' + RekapiTimeline.constant.CSS_NS
          + 'tickmarks split-right"></div>'
    ].join('')

  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.owner = opts.owner;
    this.owner.$el.prepend(this.render());

  }

  ,'render': function () {
    return this.$el;
  }

}));
