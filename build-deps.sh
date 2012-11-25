cat \
  lib/dragon/src/*.js \
  > dist/dragon-bundle.js

echo "Built Dragon dependency bundle.  Gzipped size:"
echo `cat dist/dragon-bundle.js | gzip -9f | wc -c` "bytes"

cp lib/rekapi/dist/rekapi.bundle.min.js dist/
echo "Rekapi bundle size, gzipped:"
echo `cat dist/rekapi.bundle.min.js | gzip -9f | wc -c` "bytes"

cp lib/dragon/src/css/jquery.dragon-slider.css dist/
cp -r src/css/images/ dist/images/
