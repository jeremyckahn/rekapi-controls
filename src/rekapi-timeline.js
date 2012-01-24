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

  function RekapiTimeline (kapi) {
    this.kapi = kapi;
    this.wrapper = $(CONTAINER_TEMPLATE);
    this.wrapper.appendTo(document.body);
    this.render();

    return this;
  }


  RekapiTimeline.prototype.render = function () {

  };

  global.RekapiTimeline = RekapiTimeline;

} (this));
