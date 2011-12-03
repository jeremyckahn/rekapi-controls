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


  /**
   * Calculate how wide (in pixels) the timeline DOM element should be.
   * @param {Kapi} kapi
   * @param {jQuery} $container
   * @returns {number}
   */
  function computeTimelineWidth (kapi, $container) {
    return kapi.canvas_width() - $container.find('.rekapi-controls').width();
  }


  /**
   * Bind all interaction events for a RekapiScrubber.
   * @param {RekapiScrubber} rekapiScrubber
   */
  function bindControlsToDOM (rekapiScrubber) {
    var kapi
        ,$canvas
        ,$container
        ,$play
        ,$pause
        ,$stop
        ,$timeline;

    kapi = rekapiScrubber.kapi;
    $play =     rekapiScrubber.$container.find('.rekapi-controls-play');
    $pause =    rekapiScrubber.$container.find('.rekapi-controls-pause');
    $stop =     rekapiScrubber.$container.find('.rekapi-controls-stop');
    $timeline = rekapiScrubber.$timeline;

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
      rekapiScrubber.syncPlayStateButtons();
    });

    kapi.bind('onStop', function () {
      rekapiScrubber.resetScrubber();
    });

    kapi.bind('onFrameRender', function () {
      rekapiScrubber.updateScrubber();
    });

    $timeline.bind('slide', function (evt, ui) {
      kapi.pause();
      rekapiScrubber.syncAnimationToPercent(ui.value);
    });
  }


  /**
   * Creates a scrubber to control a Kapi instance interactively.
   * @param {Kapi} kapi
   * @returns {RekapiScrubber}
   */
  function RekapiScrubber (kapi) {
    var self
        ,$canvas
        ,$container
        ,$timeline;

    self = this;
    this.kapi = kapi;
    $canvas = $(kapi.canvas);
    $container = $(CONTROL_TEMPLATE);
    $canvas.after($container);

    // Update the reference to the element in the DOM
    $container = $canvas.next();
    this.$container = $container;
    $timeline = $container.find('.rekapi-controls-timeline');
    $timeline.slider({
      'step': 0.1
    });
    this.$timeline = $timeline;
    this.$timelineHandle = $timeline.find('.ui-slider-handle');
    $container.width(kapi.canvas_width());
    this.syncPlayStateButtons();
    $timeline.width(computeTimelineWidth(kapi, $container));
    bindControlsToDOM(this);

    return this;
  };


  /**
   * Syncs the play, pause and stop buttons to the Kapi's internal state.
   * @returns {RekapiScrubber}
   */
  RekapiScrubber.prototype.syncPlayStateButtons = function () {
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

    return this;
  };


  RekapiScrubber.prototype.updateScrubber = function () {
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


  RekapiScrubber.prototype.resetScrubber = function () {
    this.$timeline.slider('value', 0);
  };


  RekapiScrubber.prototype.syncAnimationToScrubber = function () {
    this.syncAnimationToPercent(this.$timeline.slider('value'));
  }


  RekapiScrubber.prototype.syncAnimationToPercent = function (percent) {
    var desiredMillisecond;

    desiredMillisecond = parseInt(
        (percent / 100) * this.kapi._animationLength);
    this.syncAnimationToMillisecond(desiredMillisecond);
  };


  RekapiScrubber.prototype.syncAnimationToMillisecond =
    function (millisecond) {
    var now;

    now = Tweenable.util.now();
    this.kapi.render(millisecond);
    this.kapi._loopTimestamp = now - millisecond;
    this.kapi._pausedAtTime = now;
  };

  global.RekapiScrubber = RekapiScrubber;

} (this));
