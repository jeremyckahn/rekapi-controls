;(function ($) {

  var $win = $(window);

  // Begin $.fn.split
  function onSplitterDrag (evt) {
    this.data().$previousEl.width(this.position().left);
  }

  $.fn.split = function (args) {
    args = args || {};

    var $handle = $(document.createElement('div'), {
      'class': 'splitter'
    });

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
    $DOMhandle.data('$previousEl', $DOMhandle.prev());
    $DOMhandle.css('left', $DOMhandle.data().$previousEl.width());

    $DOMhandle.draggable({
      'axis': 'x'
      ,'drag': _.bind(onSplitterDrag, $DOMhandle)
    });

    return this;
  };
  // End $.fn.split


  // Start resize

  function onDockResizeHandleDrag (evt) {
    this.data('$dockedEl').height(
        $win.height() - (this.position().top + this.height()));
  }


  function onDockResizeWindowResize (evt) {
    this.css('top',
        $win.height() - this.data('$dockedEl').height() - this.height());
  }

  $.fn.resizeDockable = function (args) {
    var $handle = $(document.createElement('div'), {
      'class': 'resize-handle'
    });

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
      .draggable({
        'axis': 'y'
        ,'drag': _.bind(onDockResizeHandleDrag, $DOMhandle)
      }).data('$dockedEl', this);
    $win.on('resize', _.bind(onDockResizeWindowResize, $DOMhandle));

    return this;
  };
  // End resize


}(jQuery));
