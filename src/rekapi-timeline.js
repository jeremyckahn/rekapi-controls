;(function (global) {
  if (!jQuery || !Kapi) {
    throw 'Rekapi, and jQuery are needed for Rekapi Controls.';
  }

  var CONTAINER_TEMPLATE = [
    '<div class="rekapi-timeline-wrapper">'
      ,'<div class="rekapi-timeline-control-bar">'
      ,'</div>'
      ,'<ul class="rekapi-timeline-actor-headers">'
      ,'</ul>'
      ,'<ul class="rekapi-timeline-actor-timelines">'
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


  function RekapiTimeline (kapi) {
    this.kapi = kapi;
    var wrapper = $(CONTAINER_TEMPLATE);
    wrapper.appendTo(document.body);
    this.wrapper = $(document.body).children().last();
    this.controlBar = this.wrapper.find('.rekapi-timeline-control-bar');
    this.headers = this.wrapper.find('.rekapi-timeline-actor-headers');
    this.timeline = this.wrapper.find('.rekapi-timeline-actor-timelines');
    this.renderControl();

    return this;
  }


  RekapiTimeline.prototype.renderControl = function () {
    fillControls(this);
  };

  global.RekapiTimeline = RekapiTimeline;

} (this));
