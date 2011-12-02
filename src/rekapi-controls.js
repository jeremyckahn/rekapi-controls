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


  function percentStringToNumber (percentString) {
    return +(percentString.match(/.*(?=%)/)[0]);
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
    $timeline.slider({
      'step': 0.1
    });
    this.$timeline = $timeline;
    this.$timelineHandle = $timeline.find('.ui-slider-handle');
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

    kapi.bind('onStop', function () {
      self.resetScrubber();
    });

    kapi.bind('onFrameRender', function () {
      self.updateScrubber();
    });

    $timeline.bind('slide', function (evt, ui) {
      kapi.pause();
      self.syncAnimationToPercent(ui.value);
    });

    return this;
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
    var animationLength
        ,timeSinceStart
        ,currentLoopPosition
        ,loopCompletionPercent;

    timeSinceStart = Kapi.util.calculateTimeSinceStart(this.kapi);
    currentLoopPosition = Kapi.util.calculateLoopPosition(
        this.kapi, timeSinceStart, -1);
    animationLength = this.kapi._animationLength;
    loopCompletionPercent = 100 * (currentLoopPosition / animationLength);
    this.$timeline.slider('value', loopCompletionPercent);
  };


  RekapiControls.prototype.resetScrubber = function () {
    this.$timeline.slider('value', 0);
  };


  RekapiControls.prototype.syncAnimationToScrubber = function () {
    this.syncAnimationToPercent(this.$timeline.slider('value'));
  }


  RekapiControls.prototype.syncAnimationToPercent = function (percent) {
    var desiredMillisecond;

    desiredMillisecond = parseInt(
        (percent / 100) * this.kapi._animationLength);
    this.syncAnimationToMillisecond(desiredMillisecond);
  };


  RekapiControls.prototype.syncAnimationToMillisecond =
    function (millisecond) {
    var now;

    now = Tweenable.util.now();
    this.kapi.render(millisecond);
    this.kapi._loopTimestamp = now - millisecond;
    this.kapi._pausedAtTime = now;
  };

  global.RekapiControls = RekapiControls;

} (this));
