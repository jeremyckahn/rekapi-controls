;(function ($) {

  var $win = $(window);

  // Begin $.fn.split
  function onSplitterDrag (evt) {
    var position = this.position();
    var $parentEl = this.data().$parentEl;
    var $left = $('.split-left', $parentEl);
    var $right = $('.split-right', $parentEl);
    position.left = Math.max(position.left, 0);
    position.left = Math.min(position.left, $parentEl.width() - this.width());
    this.css('left', position.left);
    $left.width(position.left);
    $right.width(this.data().$parentEl.innerWidth() - $left.outerWidth());
  }

  $.fn.split = function (args) {
    args = args || {};

    var $handle = $(document.createElement('div'));

    $handle
      .css({
        'height': '100%'
        ,'width': '8px' || args.width
        ,'background': args.background
        ,'position': 'absolute'
        ,'top': 0
        ,'cursor': 'ew-resize'
      })
      .prependTo(this)

    $handle
      .data({
        '$parentEl': this
      }).css('left', this.find('.splitter-left:first').outerWidth(true))
      .addClass('splitter');

    $handle
      .draggable({ 'axis': 'x' })
      .bind('drag', _.bind(onSplitterDrag, $handle))
      .bind('dragstop', _.bind(onSplitterDrag, $handle))
      .trigger('drag');

    return this;
  };
  // End $.fn.split


  // Start resize

  function onDockResizeHandleDrag (evt) {
    var handleDistanceFromTop =
        $win.height() - (this.position().top + this.height());

    this.data('$dockedEl').height(
        Math.min($win.height(), handleDistanceFromTop));
  }


  function onDockResizeWindowResize (evt) {
    this.css('top',
        $win.height() - this.data('$dockedEl').height() - this.height());
  }

  $.fn.resizeDockable = function (args) {
    var $handle = $(document.createElement('div'));

    $handle
      .css({
        'height': '8px' || args.height
        ,'width': '100%'
        ,'position': 'fixed'
        ,'cursor': 'ns-resize'
      });

    $handle.css('top', this.position().top - $handle.height());
    this.prepend($handle);
    var $DOMhandle = this.children(':eq(0)');
    $DOMhandle
      .draggable({ 'axis': 'y' })
      .bind('drag', _.bind(onDockResizeHandleDrag, $DOMhandle))
      .bind('stop', _.bind(onDockResizeHandleDrag, $DOMhandle))
      .data('$dockedEl', this)
      .trigger('drag')
      .addClass('resize-handle');

    $DOMhandle.trigger('drag');
    $win.on('resize', _.bind(onDockResizeWindowResize, $DOMhandle));

    return this;
  };
  // End resize

}(jQuery));
