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
    var wrapper = $(CONTAINER_TEMPLATE);
    wrapper.appendTo(document.body);
  }

  global.RekapiTimeline = RekapiTimeline;

} (this));
