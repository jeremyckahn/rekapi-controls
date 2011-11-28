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
    $canvas.after($controls);

    // Update the reference to the element in the DOM
    $controls = $canvas.next();
    this._$controls = $controls;
    $play =     $controls.find('.rekapi-controls-play');
    $pause =    $controls.find('.rekapi-controls-pause');
    $stop =     $controls.find('.rekapi-controls-stop');
    $timeline = $controls.find('.rekapi-controls-timeline');
    $timeline.slider();
    $controls.width(this.canvas_width());
    this.controlsUpdatePlayState();
    $timeline.width(computeTimelineWidth(this, $controls));

    $play.on('click', function (evt) {
      evt.preventDefault();
      self
        .play()
        .controlsUpdatePlayState();
    });

    $pause.on('click', function (evt) {
      evt.preventDefault();
      self
        .pause()
        .controlsUpdatePlayState();
    });

    $stop.on('click', function (evt) {
      evt.preventDefault();
      self
        .stop(true)
        .controlsUpdatePlayState();
    });

    return this;
  };


  gk.prototype.controlsUpdatePlayState = function () {
    var $play
        ,$pause

    $play = this._$controls.find('.rekapi-controls-play');
    $pause = this._$controls.find('.rekapi-controls-pause');

    if (this.isPlaying()) {
      $play.css({
        'display': 'none'
      });

      $pause.css({
        'display': 'block'
      });
    } else {
      $play.css({
        'display': 'block'
      });

      $pause.css({
        'display': 'none'
      });
    }

    return this;
  };
} (this));
