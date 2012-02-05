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
        ,'z-index': 20
        ,'cursor': 'ew-resize'
      })
      .insertBefore(this)

    $handle
      .data({
        '$parentEl': this.parent()
      }).css('left', this.find('.splitter-left:first').outerWidth(true))
      .addClass('splitter');

    var boundHandler = _.bind(onSplitterDrag, $handle);
    $handle
      .draggable({ 'axis': 'x' })
      .bind('drag', boundHandler)
      .bind('dragstop', boundHandler)
      .trigger('drag');

    $win.on('resize', boundHandler);

    return this;
  };
  // End $.fn.split


  // Start $.fn.resizeDockable

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
    $handle
      .draggable({ 'axis': 'y' })
      .bind('drag', _.bind(onDockResizeHandleDrag, $handle))
      .bind('dragstop', _.bind(onDockResizeHandleDrag, $handle))
      .data('$dockedEl', this)
      .trigger('drag')
      .addClass('resize-handle')
      .trigger('drag');

    $win.on('resize', _.bind(onDockResizeWindowResize, $handle));

    return this;
  };
  // End $.fn.resizeDockable

}(jQuery));
