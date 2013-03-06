cat \
  components/jquery/jquery.min.js \
  > dist/jquery.js

cat \
  components/jquery-dragon/src/*.js \
  > dist/dragon-bundle.js

echo "Built Dragon dependency bundle.  Gzipped size:"
echo `cat dist/dragon-bundle.js | gzip -9f | wc -c` "bytes"

cp lib/rekapi-underscore-shifty.min.js dist/
echo "Rekapi bundle size, gzipped:"
echo `cat lib/rekapi-underscore-shifty.min.js | gzip -9f | wc -c` "bytes"

cp components/jquery-dragon/src/css/jquery.dragon-slider.css dist/
cp -r src/css/images/ dist/images/
