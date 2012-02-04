extend('RekapiTimeline.view.rekapi', Backbone.View.extend({

  'events': {
  }


  ,'TEMPLATE':
    ['<div class="' + RekapiTimeline.constant.CSS_NS + 'wrapper">'
        ,'<ul class="' + RekapiTimeline.constant.CSS_NS + 'actors">'
        ,'</ul>'
      ,'</div>'
    ].join('')


  ,'initialize': function (opts) {
    var $wrapper = $(this.TEMPLATE);
    $wrapper.appendTo(document.body);
    this.$el = $(document.body).children(':last');
    this._cacheEls();
    this._setupHelperViews();
    this._initPanes();
    this.render();
    $(window).trigger('resize.rt');
  }


  ,'_cacheEls': function () {
    this.$actors = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actors');
  }


  ,'_setupHelperViews': function () {
    this.controlBarView = new RekapiTimeline.view.controlBar({
      'owner': this
    });
  }


  ,'_initPanes': function () {
    this.$actors.split();
    this.$el.resizeDockable();
  }


  ,'render': function () {
    this.controlBarView.render();
    this.model.get('actors').each(function (actor) {
      this.$actors.append(actor.view.render());
    }, this);
  }

}));
