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

  if (!jQuery || !Kapi) {
    throw 'Rekapi, ans jQuery are needed for Rekapi Controls.';
  }

  gk = global.Kapi;
  $ = jQuery;


  function computeTimelineWidth (kapi, $controls) {
    return kapi.canvas_width() - $controls.find('.rekapi-controls').width();
  }

  function RekapiControls (kapi) {
    var self
        ,$canvas
        ,$controls
        ,$play
        ,$pause
        ,$stop
        ,$timeline;

    self = this;
    this.kapi = kapi;
    $canvas = $(kapi.canvas);
    $controls = $(CONTROL_TEMPLATE);
    $canvas.after($controls);

    // Update the reference to the element in the DOM
    $controls = $canvas.next();
    kapi._$controls = $controls;
    $play =     $controls.find('.rekapi-controls-play');
    $pause =    $controls.find('.rekapi-controls-pause');
    $stop =     $controls.find('.rekapi-controls-stop');
    $timeline = $controls.find('.rekapi-controls-timeline');
    $timeline.slider();
    $controls.width(kapi.canvas_width());
    this.controlsUpdatePlayState();
    $timeline.width(computeTimelineWidth(kapi, $controls));

    $play.on('click', function (evt) {
      
      self.controlsUpdatePlayState();
      
      evt.preventDefault();
      kapi
        .play();

    });

    $pause.on('click', function (evt) {
      
      self.controlsUpdatePlayState();
      
      evt.preventDefault();
      kapi
        .pause();

    });

    $stop.on('click', function (evt) {
      
      self.controlsUpdatePlayState();
      
      evt.preventDefault();
      kapi
        .stop(true);

    });

    return kapi;
  };


  RekapiControls.prototype.controlsUpdatePlayState = function () {
    var kapi
        ,$play
        ,$pause

    kapi = this.kapi;
    $play = kapi._$controls.find('.rekapi-controls-play');
    $pause = kapi._$controls.find('.rekapi-controls-pause');

    if (kapi.isPlaying()) {
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

    return kapi;
  }

  global.RekapiControls = RekapiControls;
} (this));
