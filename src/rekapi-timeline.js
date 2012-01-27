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
    controls.controlBar.on('click', function () {
      controls.controlBar.addClass(CSS_NS + 'dragging');
    });
  }


  function RekapiTimeline (kapi) {
    this.kapi = kapi;
    var wrapper = $(CONTAINER_TEMPLATE);
    wrapper.appendTo(document.body);
    this.wrapper = $(document.body).children().last();
    this.controlBar = this.wrapper.find('.' + CSS_NS + 'control-bar');
    this.headers = this.wrapper.find('.' + CSS_NS + 'actor-headers');
    this.timeline = this.wrapper.find('.' + CSS_NS + 'actor-timelines');
    this.renderControl();

    return this;
  }


  RekapiTimeline.prototype.renderControl = function () {
    fillControls(this);
  };

  global.RekapiTimeline = RekapiTimeline;

} (this));
