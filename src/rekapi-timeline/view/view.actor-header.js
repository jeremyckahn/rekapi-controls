extend('RekapiTimeline.view.actorHeader', Backbone.View.extend({

  'events': {
    'click': 'onClick'
  }


  ,'TEMPLATE': [
      '<div class="'
          + RekapiTimeline.constant.CSS_NS + 'actor-header split-left"></div>'
    ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.$el.html('Actor ' + this.model.get('source').id);

    return this;
  }


  ,'onClick': function (evt) {

  }


  ,'render': function () {
    return this.$el;
  }

}));
