extend('RekapiTimeline.view.controlBar', Backbone.View.extend({

  'TEMPLATE':
    ['<div class="' + RekapiTimeline.constant.CSS_NS + 'control-bar">'
      ,'</div>'
    ].join('')

  ,'initialize': function (opts) {
    this.$el = $(this.TEMPLATE);
    this.owner = opts.owner;

    this.owner.$el.prepend(this.render());
  }

  ,'render': function () {
    return this.$el;
  }

}));
