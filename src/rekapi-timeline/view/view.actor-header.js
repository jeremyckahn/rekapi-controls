extend('RekapiTimeline.view.actorHeader', Backbone.View.extend({

  'events': {
    'click': 'onClick'
  }


  ,'TEMPLATE': [
      '<div class="'
          + RekapiTimeline.constant.CSS_NS + 'actor-header split-left">',
        ,'<h2 class="' + RekapiTimeline.constant.CSS_NS + 'actor-id"></h2>'
      ,'</div>'
    ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this._cacheEls();
    this.$actorId.html('Actor ' + this.model.get('source').id);

    return this;
  }


  ,'_cacheEls': function () {
    this.$actorId = this.$el.find(
        '.' + RekapiTimeline.constant.CSS_NS + 'actor-id');
  }


  ,'onClick': function (evt) {

  }


  ,'render': function () {
    return this.$el;
  }

}));
