cat \
  lib/jquery-ui/jquery.ui.core.js \
  lib/jquery-ui/jquery.ui.widget.js \
  lib/jquery-ui/jquery.ui.mouse.js \
  lib/jquery-ui/jquery.ui.slider.js \
  > lib/rekapi-controls.jquery-ui.js

cat \
  lib/rekapi/lib/underscore/underscore-min.js \
  lib/rekapi/lib/shifty/builds/shifty.min.js \
  lib/rekapi/dist/rekapi.min.js \
  > lib/rekapi-controls.rekapi-bundle.js
