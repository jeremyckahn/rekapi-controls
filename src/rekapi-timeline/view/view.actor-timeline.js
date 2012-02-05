extend('RekapiTimeline.view.actorTimeline', Backbone.View.extend({

  'events': {

  }

  ,'TEMPLATE': [
    '<div class="'
        + RekapiTimeline.constant.CSS_NS + 'actor-timeline split-right"></div>'
  ].join('')


  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    //this.$el.html('Lorem Ipsum');

    return this;
  }


  ,'render': function () {
    return this.$el;
  }

}));
