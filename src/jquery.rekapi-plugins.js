;(function ($) {

  var $win = $(window);

  // Begin $.fn.split
  function onSplitterDrag (evt) {
    var position = this.position();
    this.data().$previousEl.width(position.left);
    this.data().$nextEl.width(this.data().$parentEl.innerWidth() 
        - this.data().$previousEl.outerWidth());
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
      .insertAfter(this.children(':eq(0)'));

    var $DOMhandle = this.children(':eq(1)');
    $DOMhandle
      .data({
        '$previousEl': $DOMhandle.prev()
        ,'$nextEl': $DOMhandle.next()
        ,'$parentEl': this
      }).css('left', $DOMhandle.data().$previousEl.outerWidth(true))
      .addClass('splitter');

    $DOMhandle
      .draggable({ 'axis': 'x' })
      .bind('drag', _.bind(onSplitterDrag, $DOMhandle))
      .bind('dragstop', _.bind(onSplitterDrag, $DOMhandle))
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
