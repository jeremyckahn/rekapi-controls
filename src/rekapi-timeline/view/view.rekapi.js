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
    var dummyActor = this._makeDummyActor();
    this._destroyDummyActor(dummyActor);
    this._initPanes();
    this.render();
    $(window).trigger('resize.rt');
  }


  ,'_cacheEls': function () {
    this.$actors = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actors');
  }


  ,'_makeDummyActor': function () {
    var dummyActor = new RekapiTimeline.model.actor({
      'source': { 'id': -1 }
    });
    this.model.get('actors').add(dummyActor);
    return dummyActor;
  }


  ,'_destroyDummyActor': function (dummyActor) {
    this.model.get('actors').remove(dummyActor);
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
