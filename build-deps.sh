cat \
  lib/jquery-ui/jquery.ui.core.js \
  lib/jquery-ui/jquery.ui.widget.js \
  lib/jquery-ui/jquery.ui.mouse.js \
  lib/jquery-ui/jquery.ui.slider.js \
  > lib/rekapi-controls.jquery-ui.js

echo "Built jQuery UI dependency bundle.  Gzipped size:"
echo `cat lib/rekapi-controls.jquery-ui.js | gzip -9f | wc -c` "bytes"

cat \
  lib/rekapi/lib/underscore/underscore-min.js \
  lib/rekapi/lib/shifty/builds/shifty.min.js \
  lib/rekapi/dist/rekapi.min.js \
  > lib/rekapi-controls.rekapi-bundle.js

echo "Built Rekapi dependency bundle.  Gzipped size:"
echo `cat lib/rekapi-controls.rekapi-bundle.js | gzip -9f | wc -c` "bytes"


cat \
  lib/rekapi/lib/underscore/underscore-min.js \
  lib/rekapi/lib/shifty/shifty.js \
  lib/rekapi/dist/rekapi.js \
  > lib/rekapi-controls.rekapi-bundle.dev.js
