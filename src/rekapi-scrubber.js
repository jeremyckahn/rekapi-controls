/* global jQuery:true */
;(function (global, $) {
  var SCRUBBER_TEMPLATE = [
        '<div class="rekapi-scrubber-wrapper">'
          ,'<div class="rekapi-scrubber">'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-play" href="#">'
              ,'<span class="icon icon-play"></span>'
            ,'</a>'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-pause" href="#">'
              ,'<span class="icon icon-pause"></span>'
            ,'</a>'
            ,'<div class="rekapi-scrubber-timeline"></div>'
            ,'<a class="rekapi-scrubber-button rekapi-scrubber-stop" href="#">'
              ,'<span class="icon icon-stop"></span>'
            ,'</a>'
          ,'</div>'
        ,'</div>'
      ].join('');

  /**
   * Bind all interaction events for a RekapiScrubber.
   * @param {RekapiScrubber} rekapiScrubber
   */
  function bindControlsToDOM (rekapiScrubber) {
    var kapi
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
      kapi.stop();
      kapi.update(0);
    });

    kapi.on('playStateChange', function () {
      rekapiScrubber.syncPlayStateButtons();
    });

    kapi.on('stop', function () {
      rekapiScrubber.resetScrubber();
    });

    kapi.on('afterUpdate', function () {
      rekapiScrubber.updateScrubber();
    });
  }


  /**
   * Creates a scrubber to control a Kapi instance interactively.
   * @param {Kapi} kapi
   * @returns {RekapiScrubber}
   */
  function RekapiScrubber (kapi, contextEl) {
    var self, $container, $timeline;

    self = this;
    this.kapi = kapi;
    this.$contextEl = $(contextEl);
    $container = $(SCRUBBER_TEMPLATE);
    this.$contextEl.after($container);

    // Update the reference to the element in the DOM
    $container = this.$contextEl.next();
    this.$container = $container;
    $timeline = $container.find('.rekapi-scrubber-timeline');
    $timeline.dragonSlider({

      // TODO: Move the event binding to bindControlsToDOM
      'drag': $.proxy(function (val) {
        kapi.pause();
        this.syncAnimationToPercent(val);
      }, this)

    });
    this.$timeline = $timeline;
    $container.width(this.$contextEl.width());
    this.syncPlayStateButtons();
    bindControlsToDOM(this);

    return this;
  }


  /**
   * Syncs the play, pause and stop buttons to the Kapi's internal state.
   * @returns {RekapiScrubber}
   */
  RekapiScrubber.prototype.syncPlayStateButtons = function () {
    var kapi
        ,$play
        ,$pause;

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
    this.$timeline.dragonSliderSet(this.kapi.lastPositionUpdated(), false);
  };


  RekapiScrubber.prototype.resetScrubber = function () {
    this.$timeline.dragonSliderSet(0, false);
  };


  RekapiScrubber.prototype.syncAnimationToScrubber = function () {
    this.syncAnimationToPercent(this.$timeline.dragonSliderGet());
  };


  RekapiScrubber.prototype.syncAnimationToPercent = function (percent) {
    this.syncAnimationToMillisecond(percent * this.kapi.animationLength());
  };


  RekapiScrubber.prototype.syncAnimationToMillisecond =
      function (millisecond) {
    var now;

    now = Tweenable.now();
    this.kapi.update(millisecond);
    this.kapi._loopTimestamp = now - millisecond;
    this.kapi._pausedAtTime = now;
  };


  var Kapi;
  var Tweenable;

  if (typeof define === 'function' && define.amd) {
    define(['shifty', 'rekapi'], function (_Tweenable, _Kapi) {
      Kapi = _Kapi;
      Tweenable = _Tweenable;
      return RekapiScrubber;
    });
  } else {
    Kapi = global.Kapi;
    Tweenable = global.Tweenable;
    global.RekapiScrubber = RekapiScrubber;
  }



} (this, jQuery));
