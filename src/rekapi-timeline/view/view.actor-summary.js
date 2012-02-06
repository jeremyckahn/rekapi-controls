extend('RekapiTimeline.view.actorSummary', Backbone.View.extend({

  'events': {

  }


  ,'TEMPLATE': [
      '<div class="' + RekapiTimeline.constant.CSS_NS + 'summary-block"></div>'
    ].join()


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);

    return this;
  }


  ,'render': function () {
    var src = this.model.get('source');
    var start = src.getStart() / 1000;
    var end = src.getEnd() / 1000;
    var scale = this.model.get('owner').get('scale');
    var drawStart = start * scale * RekapiTimeline.constant.PIXEL_SCALE;
    var drawEnd =
        (end * scale * RekapiTimeline.constant.PIXEL_SCALE) - drawStart;
    this.$el.css({
      'margin-left': drawStart
      ,'width': drawEnd
    });

    return this.$el;
  }

}));
