extend('RekapiTimeline.view.rekapi', Backbone.View.extend({

  'events': {
  }


  ,'TEMPLATE':
    ['<div class="' + RekapiTimeline.constant.CSS_NS + 'wrapper">'
        ,'<div class="' + RekapiTimeline.constant.CSS_NS + 'control-bar">'
        ,'</div>'
        ,'<ul class="' + RekapiTimeline.constant.CSS_NS + 'actors">'
        ,'</ul>'
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
    this.$actors = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actors');
  }


  ,'_initPanes': function () {
    this.$actors.split();
    this.$el.resizeDockable();
  }


  ,'render': function () {
    this.model.get('actors').each(function (actor) {
      this.$actors.append(actor.view.render());
    }, this);
  }

}));
