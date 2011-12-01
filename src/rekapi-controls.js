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


  function computeTimelineWidth (kapi, $container) {
    return kapi.canvas_width() - $container.find('.rekapi-controls').width();
  }

  function RekapiControls (kapi) {
    var self
        ,$canvas
        ,$container
        ,$play
        ,$pause
        ,$stop
        ,$timeline;

    self = this;
    this.kapi = kapi;
    $canvas = $(kapi.canvas);
    $container = $(CONTROL_TEMPLATE);
    $canvas.after($container);

    // Update the reference to the element in the DOM
    $container = $canvas.next();
    this.$container = $container;
    $play =     $container.find('.rekapi-controls-play');
    $pause =    $container.find('.rekapi-controls-pause');
    $stop =     $container.find('.rekapi-controls-stop');
    $timeline = $container.find('.rekapi-controls-timeline');
    $timeline.slider();
    $container.width(kapi.canvas_width());
    this.updatePlayState();
    $timeline.width(computeTimelineWidth(kapi, $container));

    $play.on('click', function (evt) {
      evt.preventDefault();
      kapi.play();
    });

    $pause.on('click', function (evt) {
      evt.preventDefault();
      kapi.pause();
    });

    $stop.on('click', function (evt) {
      evt.preventDefault();
      kapi.stop(true);
    });

    kapi.bind('onPlayStateChange', function () {
      self.updatePlayState();
    });

    kapi.bind('onFrameRender', function () {
      self.updateScrubber();
    });

    return kapi;
  };


  RekapiControls.prototype.updatePlayState = function () {
    var kapi
        ,$play
        ,$pause

    kapi = this.kapi;
    $play = this.$container.find('.rekapi-controls-play');
    $pause = this.$container.find('.rekapi-controls-pause');

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
  };


  RekapiControls.prototype.updateScrubber = function () {
    
  };

  global.RekapiControls = RekapiControls;
} (this));
