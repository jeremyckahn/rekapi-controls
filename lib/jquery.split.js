;(function ($) {

  function onDrag (evt) {
    this.data().previousEl.width(this.position().left);
  }

  $.fn.split = function (args) {
    args = args || {};

    var $handle = $(document.createElement('div'), {
      'class': 'splitter'
    });

    $handle
      .css({
        'height': '100%' || args.height
        ,'width': '8px' || args.width
        ,'background': args.background
        ,'position': 'absolute'
        ,'cursor': 'ew-resize'
      })
      .insertAfter(this.children(':eq(0)'));

    var $DOMhandle = this.children(':eq(1)');
    $DOMhandle.data('previousEl', $DOMhandle.prev());
    $DOMhandle.css('left', $DOMhandle.data().previousEl.width());

    $DOMhandle.draggable({
      'axis': 'x'
      ,'drag': _.bind(onDrag, $DOMhandle)
    });

    return this;
  };

}(jQuery));
