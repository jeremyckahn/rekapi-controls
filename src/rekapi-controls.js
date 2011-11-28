;(function (global) {
  var gk,
      $
      CONTROL_TEMPLATE = [
        '<div class="rekapi-controls-wrapper">'
          ,'<div class="rekapi-controls">'
            ,'<a class="rekapi-controls-button rekapi-controls-play ui-corner-all" href="#">'
              ,'<span class="ui-icon ui-icon-play"></span>'
            ,'</a>'
            ,'<a class="rekapi-controls-button rekapi-controls-pause ui-corner-all" href="#">'
              ,'<span class="ui-icon ui-icon-pause"></span>'
            ,'</a>'
            ,'<div class="rekapi-controls-timeline"></div>'
            ,'<a class="rekapi-controls-button rekapi-controls-stop ui-corner-all" href="#">'
              ,'<span class="ui-icon ui-icon-stop"></span>'
            ,'</a>'
          ,'</div>'
        ,'</div>'
      ].join('');

  if (!jQuery || !Kapi || !Mustache) {
    throw 'Rekapi, jQuery, and Mustache are needed for Rekapi Controls.';
  }

  gk = global.Kapi;
  $ = jQuery;


  function computeTimelineWidth (kapi, $controls) {
    return kapi.canvas_width() - $controls.find('.rekapi-controls').width();
  }

  gk.prototype.controlsCreate = function () {
    var self
        ,$canvas
        ,$controls
        ,$play
        ,$pause
        ,$stop
        ,$timeline;

    self = this;
    $canvas = $(this.canvas);
    $controls = $(Mustache.to_html(CONTROL_TEMPLATE));
    $play =     $controls.find('.rekapi-controls-play');
    $pause =    $controls.find('.rekapi-controls-pause');
    $stop =     $controls.find('.rekapi-controls-stop');
    $timeline = $controls.find('.rekapi-controls-timeline');
    $timeline.slider();
    $canvas.after($controls);
    $controls.width(this.canvas_width());
    $timeline.width(computeTimelineWidth(this, $controls));

    $play.on('click', function (evt) {
      evt.preventDefault();
      self.play();
    });

    $pause.on('click', function (evt) {
      evt.preventDefault();
      self.pause();
    });

    $stop.on('click', function (evt) {
      self.stop(true);
    });

    return this;
  };
} (this));
