;(function (global) {
  var gk,
      $
      CONTROL_TEMPLATE = [
        '<div class="rekapi-controls">'
          ,'<button class="rekapi-controls-play">Play</button>'
          ,'<button class="rekapi-controls-pause">Pause</button>'
          ,'<div class="rekapi-controls-timeline"></div>'
          ,'<button class="rekapi-controls-stop">Stop</button>'
        ,'</div>'
      ].join('');

  if (!jQuery || !Kapi || !Mustache) {
    throw 'Rekapi, jQuery, and Mustache are needed for Rekapi Controls.';
  }

  gk = global.Kapi;
  $ = jQuery;

  gk.prototype.controlsCreate = function () {
    var controlEl
        ,$canvas;

    $canvas = $(this.canvas);
    controlEl = $(Mustache.to_html(CONTROL_TEMPLATE));
    $canvas.after(controlEl);

    return this;
  };
} (this));
