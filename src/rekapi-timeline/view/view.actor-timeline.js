extend('RekapiTimeline.view.actorTimeline', Backbone.View.extend({

  'events': {

  }

  ,'TEMPLATE': [
    '<div class="'
        + RekapiTimeline.constant.CSS_NS + 'actor-timeline split-right"></div>'
    ].join('')


  ,'SUMMARY_BLOCK_TEMPLATE': [
      '<div class="' + RekapiTimeline.constant.CSS_NS + 'summary-block"></div>'
    ].join()


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.$summaryBlock = $(this.SUMMARY_BLOCK_TEMPLATE);
    this.$el.append(this.$summaryBlock);

    //this.$el.html('Lorem Ipsum');

    return this;
  }


  ,'renderSummaryBlock': function () {
    var src = this.model.get('source');
    var start = src.getStart() / 1000;
    var end = src.getEnd() / 1000;
    var scale = this.model.get('owner').get('scale');
    var drawStart = start * scale * RekapiTimeline.constant.PIXEL_SCALE;
    var drawEnd = (end * scale * RekapiTimeline.constant.PIXEL_SCALE)
        - drawStart;
    this.$summaryBlock.css({
      'margin-left': drawStart
      ,'width': drawEnd
    });

    return this.$summaryBlock;
  }


  ,'render': function () {
    this.renderSummaryBlock();

    return this.$el;
  }

}));
