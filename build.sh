#!/bin/bash

# Call this script like this:
# $: sh build.sh version_number [local_path_to_compiler]

sh build-deps.sh

echo \
"/**
 * Rekapi Controls - UI controls for Rekapi animations. v${1}
 *   By Jeremy Kahn - jeremyckahn@gmail.com
 *   https://github.com/jeremyckahn/rekapi-controls
 *
 * Make Rekapi animations interactive and fun.
 * Dependencies: Rekapi (https://github.com/jeremyckahn/rekapi), Underscore.js (https://github.com/documentcloud/underscore), Shifty.js (https://github.com/jeremyckahn/shifty), jQuery (https://github.com/jquery/jquery)
 * MIT Lincense.  This code free to use, modify, distribute and enjoy.
 */" | cat > /tmp/rekapi-controls.header.js

cat /tmp/rekapi-controls.header.js \
  src/rekapi-scrubber.js \
  > dist/rekapi-controls.js

in=dist/rekapi-controls.js
out=/tmp/rekapi-controls.compiled.js

# If a local path to the Closure compiler was specified, use that.
if [ $2 ]; then
  java -jar ${2} --js=$in --js_output_file=$out
else
  # Otherwise curl out to Google's.
  curl -s \
    -d compilation_level=SIMPLE_OPTIMIZATIONS \
    -d output_format=text \
    -d output_info=compiled_code \
    --data-urlencode "js_code@${in}" \
    http://closure-compiler.appspot.com/compile \
     > $out
fi

cat /tmp/rekapi-controls.header.js /tmp/rekapi-controls.compiled.js > dist/rekapi-controls.min.js
cp src/css/rekapi-controls.css dist/
cp -r lib/font-awesome/ dist/font-awesome

echo 'Happy day!  Rekapi Controls were built.  The file size, minified and gzipped, is:'
echo `cat dist/rekapi-controls.min.js | gzip -9f | wc -c` "bytes"

echo ${1} > version.txt
