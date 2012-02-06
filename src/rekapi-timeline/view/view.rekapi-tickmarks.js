extend('RekapiTimeline.view.rekapiTickmarks', Backbone.View.extend({

  'TEMPLATE': [
    '<div class="' + RekapiTimeline.constant.CSS_NS + 'tickmarks split-right">'
      ,'<ul></ul>'
    ,'</div>'
    ].join('')


  ,'TICK_TEMPLATE': [
      '<li class="' + RekapiTimeline.constant.CSS_NS + 'tickmark"></li>'
    ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.$list = this.$el.find('ul');
    this.owner = opts.owner;
    this.owner.$el.prepend(this.$el);
    this.tickGranularity = opts.tickGranularity || .5;
  }

  ,'render': function () {
    this.$list.empty();
    var animationLength = this.model.get('source').animationLength();
    // Not sure if the math below is right?
    var steps = Math.ceil((animationLength / 1000) / this.tickGranularity) + 1;
    var tickPoints = _.range(
        0, steps * this.tickGranularity, this.tickGranularity);

    _.each(tickPoints, function (tick) {
      var renderedTick = $(this.TICK_TEMPLATE);
      renderedTick
        .css('margin-right',
              this.model.get('scale') * RekapiTimeline.constant.PIXEL_SCALE)
        .html(tick);
      this.$list.append(renderedTick);
    }, this);

    return this.$el;
  }

}));
