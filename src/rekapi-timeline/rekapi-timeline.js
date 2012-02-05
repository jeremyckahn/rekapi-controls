;(function (global) {

  global.RekapiTimeline = function (kapi) {
    return new RekapiTimeline.view.rekapi({
      'model': new RekapiTimeline.model.rekapi({ 'source': kapi })
    });
  };

  extend('RekapiTimeline.constant', {
    'CSS_NS': 'rt-'
    ,'PIXEL_SCALE': 100
  });

} (this));
