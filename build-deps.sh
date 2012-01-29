cat \
  lib/jquery-ui/jquery.ui.core.js \
  lib/jquery-ui/jquery.ui.widget.js \
  lib/jquery-ui/jquery.ui.mouse.js \
  lib/jquery-ui/jquery.ui.slider.js \
  lib/jquery-ui/jquery.ui.draggable.js \
  lib/jquery-ui/jquery.ui.resizable.js \
  > dist/rekapi-controls.jquery-ui.js

echo "Built jQuery UI dependency bundle.  Gzipped size:"
echo `cat dist/rekapi-controls.jquery-ui.js | gzip -9f | wc -c` "bytes"


cp lib/rekapi/dist/rekapi.bundle.min.js dist/
echo "Rekapi bundle size, gzipped:"
echo `cat dist/rekapi.bundle.min.js | gzip -9f | wc -c` "bytes"

cat \
  lib/jquery-ui/css/jquery.ui.core.css \
  lib/jquery-ui/css/jquery.ui.theme.css \
  lib/jquery-ui/css/jquery.ui.slider.css \
  lib/jquery-ui/css/jquery.ui.resizable.css \
  > dist/rekapi-controls.jquery-ui-bundle.css

cp -r lib/jquery-ui/images/ dist/images/
