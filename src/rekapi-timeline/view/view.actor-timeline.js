extend('RekapiTimeline.view.actorTimeline', Backbone.View.extend({

  'events': {

  }

  ,'TEMPLATE': [
    '<li class="' + RekapiTimeline.constant.CSS_NS + 'actor-timeline"></li>'
  ].join('')


  ,'initialize': function (opts) {

    return this;
  }


  ,'render': function () {
    return this.$el;
  }

}));