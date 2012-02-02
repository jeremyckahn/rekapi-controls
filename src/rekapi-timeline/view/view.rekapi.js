extend('RekapiTimeline.view.rekapi', Backbone.View.extend({

  'events': {
  }


  ,'TEMPLATE':
    ['<div class="' + RekapiTimeline.constant.CSS_NS + 'wrapper">'
        ,'<div class="' + RekapiTimeline.constant.CSS_NS + 'control-bar">'
        ,'</div>'
        ,'<div class="' 
            + RekapiTimeline.constant.CSS_NS + 'headers-and-timelines">'
          ,'<ul class="' + RekapiTimeline.constant.CSS_NS + 'actor-headers">'
            // Temporary el, used to size the header correctly when it is
            // initialized
            ,'<li class="' 
                + RekapiTimeline.constant.CSS_NS + 'actor-header"></li>'
          ,'</ul>'
          ,'<ul class="' + RekapiTimeline.constant.CSS_NS + 'actor-timelines">'
          ,'</ul>'
        ,'</div'
      ,'</div>'
    ].join('')


  ,'initialize': function (opts) {
    var $wrapper = $(this.TEMPLATE);
    $wrapper.appendTo(document.body);
    this.$el = $(document.body).children(':last');
    this._cacheEls();
    this._initPanes();
    this.render();
    $(window).trigger('resize.rt');
  }


  ,'_cacheEls': function () {
    this.$controlBar = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'control-bar');
    this.$headers = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actor-headers');
    this.$timeline = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actor-timelines');
    this.$headersAndTimeline =
        this.$el.find(
          '.' + RekapiTimeline.constant.CSS_NS + 'headers-and-timelines');
  }


  ,'_initPanes': function () {
    this.$headersAndTimeline.split();
    this.$el.resizeDockable();
  }


  ,'renderHeader': function () {
    this.$headers.children().remove();
    this.model.get('actors').each(function (actor) {
      this.$headers.append(actor.headerView.render());
    }, this);
  }


  ,'renderTimeline': function () {
    this.$timeline.children().remove();
    this.model.get('actors').each(function (actor) {
      this.$timeline.append(actor.timelineView.render());
    }, this);
  }


  ,'render': function () {
    this.renderHeader();
    this.renderTimeline();
  }

}));