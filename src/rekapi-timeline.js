;(function (global) {
  if (!jQuery || !Kapi) {
    throw 'Rekapi, and jQuery are needed for Rekapi Controls.';
  }

  var CSS_NS = 'rt-'
    ,CONTAINER_TEMPLATE =
      ['<div class="' + CSS_NS + 'wrapper">'
        ,'<div class="' + CSS_NS + 'control-bar">'
        ,'</div>'
        ,'<ul class="' + CSS_NS + 'actor-headers">'
        ,'</ul>'
        ,'<ul class="' + CSS_NS + 'actor-timelines">'
        ,'</ul>'
      ,'</div>'
    ].join('');

  var $ = jQuery;


  function fillControls (controls) {
    fillHeader(controls);
  }


  function fillHeader (controls) {
    var actors = controls.kapi.getAllActors();
    _.each(actors, function (actor, actorId) {
      var actorHeader = $(document.createElement('li'), {
        'id': actorId
      });

      actorHeader.html('Actor ' + actor.id);
      actorHeader.appendTo(controls.$headers)
    });
  }


  function initResizablePanes (controls) {
    controls.$el.resizable({
      'handles': 'n' // n is for "North"
    });
  }


  var RekapiTimelineView = Backbone.View.extend({

    'events': {
    }


    ,'initialize': function (opts) {
      this.kapi = kapi;
      var $wrapper = $(CONTAINER_TEMPLATE);
      $wrapper.appendTo(document.body);
      this.$el = $(document.body).children().last();
      this.$controlBar = this.$el.find('.' + CSS_NS + 'control-bar');
      this.$headers = this.$el.find('.' + CSS_NS + 'actor-headers');
      this.$timeline = this.$el.find('.' + CSS_NS + 'actor-timelines');
      this.renderControls();
      this.fitToWindow();
      this.bindToWindow();

      initResizablePanes(this);
    }


    ,'bindToWindow': function () {
      $(window).on('resize', _.bind(this.fitToWindow, this));
    }


    ,'renderControls': function () {
      fillControls(this);
    }


    ,'fitToWindow': function () {
      this.$el
        .css({
          'top': $(window).height() - this.$el.height()
          ,'width': '' // Force the stylesheet rule - auto.
        });
    }

  });


  global.RekapiTimeline = function (opts) {
    return new RekapiTimelineView(opts);
  };

} (this));
