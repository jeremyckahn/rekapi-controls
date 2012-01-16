/**
 * Rekapi Controls - UI controls for Rekapi animations. v0.1.1
 *   By Jeremy Kahn - jeremyckahn@gmail.com
 *   https://github.com/jeremyckahn/rekapi-controls
 *
 * Make Rekapi animations interactive and fun.
 * Dependencies: Rekapi (https://github.com/jeremyckahn/rekapi), Underscore.js (https://github.com/documentcloud/underscore), Shifty.js (https://github.com/jeremyckahn/shifty), jQuery (https://github.com/jquery/jquery), jQuery UI (https://github.com/jquery/jquery-ui)
 * MIT Lincense.  This code free to use, modify, distribute and enjoy.
 */
;(function (global) {
  var gk,
      $
      SCRUBBER_TEMPLATE = [
        '<div class="rekapi-scrubber-wrapper">'
          ,'<div class="rekapi-scrubber">'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-play ui-corner-all" href="#">'
              ,'<span class="ui-icon ui-icon-play"></span>'
            ,'</a>'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-pause ui-corner-all" href="#">'
              ,'<span class="ui-icon ui-icon-pause"></span>'
            ,'</a>'
            ,'<div class="rekapi-scrubber-timeline"></div>'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-stop ui-corner-all" href="#">'
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
    return kapi.canvas_width() - $container.find('.rekapi-scrubber').width();
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
    $play =     rekapiScrubber.$container.find('.rekapi-scrubber-play');
    $pause =    rekapiScrubber.$container.find('.rekapi-scrubber-pause');
    $stop =     rekapiScrubber.$container.find('.rekapi-scrubber-stop');
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
    $container = $(SCRUBBER_TEMPLATE);
    $canvas.after($container);

    // Update the reference to the element in the DOM
    $container = $canvas.next();
    this.$container = $container;
    $timeline = $container.find('.rekapi-scrubber-timeline');
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
    $play = this.$container.find('.rekapi-scrubber-play');
    $pause = this.$container.find('.rekapi-scrubber-pause');

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
