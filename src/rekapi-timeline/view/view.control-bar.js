extend('RekapiTimeline.view.controlBar', Backbone.View.extend({

  'TEMPLATE':
    ['<div class="' + RekapiTimeline.constant.CSS_NS + 'control-bar">'
      ,'</div>'
    ].join('')

  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.owner = opts.owner;
    this.tickmarksView = new RekapiTimeline.view.rekapiTickmarks({
      'owner': this
    });
    this.owner.$el.prepend(this.render());
  }

  ,'render': function () {
    this.tickmarksView.render();
    return this.$el;
  }

}));
