;(function (global) {
  if (!jQuery || !Kapi) {
    throw 'Rekapi, and jQuery are needed for Rekapi Controls.';
  }

  var CSS_NS = 'rekapi-timeline-'
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
      actorHeader.appendTo(controls.headers)
    });
  }


  function makeControlBarDraggable (controls) {
    controls.controlBar.on('mousedown', function () {
      controls.controlBar.addClass(CSS_NS + 'dragging');
    });

    controls.controlBar.on('mouseup', function () {
      controls.controlBar.removeClass(CSS_NS + 'dragging');
    });
  }


  var RekapiTimelineView = Backbone.View.extend({

    'events': {
      'mousedown .rekapi-timeline-control-bar': 'mouseDownControlBar'
      ,'mouseup .rekapi-timeline-control-bar': 'mouseUpControlBar'
    }


    ,'initialize': function (opts) {
      this.kapi = kapi;
      var wrapper = $(CONTAINER_TEMPLATE);
      wrapper.appendTo(document.body);
      this.$el = $(document.body).children().last();
      this.controlBar = this.$el.find('.' + CSS_NS + 'control-bar');
      this.headers = this.$el.find('.' + CSS_NS + 'actor-headers');
      this.timeline = this.$el.find('.' + CSS_NS + 'actor-timelines');
      //makeControlBarDraggable(this);
      this.renderControls();
    }


    ,'mouseDownControlBar': function (evt) {
      this.controlBar.addClass(CSS_NS + 'dragging');
    }


    ,'mouseUpControlBar': function (evt) {
      this.controlBar.removeClass(CSS_NS + 'dragging');
    }


    ,'renderControls': function () {
      fillControls(this);
    }
  });


  global.RekapiTimeline = function (opts) {
    return new RekapiTimelineView(opts);
  };

} (this));
