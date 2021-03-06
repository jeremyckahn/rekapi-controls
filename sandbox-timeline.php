<!DOCTYPE html>
<html>
<head>
  <script src="dist/jquery.min.js"></script>
  <script src="dist/rekapi-controls.jquery-ui.js"></script>
  <script src="dist/rekapi.bundle.min.js"></script>
  <script src="lib/backbone.js"></script>
  <script src="lib/extend.js"></script>
  <script src="src/jquery.rekapi-plugins.js"></script>
  <script src="src/rekapi-timeline/rekapi-timeline.js"></script><?php
      function writeScriptTags ($forDir) {
        if ($dirRef = opendir(getcwd() . '/' . $forDir)) {
          while (false !== ($fileName = readdir($dirRef))) {
            if (strlen($fileName) > 2) {

              // Bust the cache.
              $rand = rand(1, 100000000);
              echo("\n  <script src=\"$forDir$fileName?r=$rand\"></script>");
            }
          }

          closedir($dirRef);
        }
      }

      writeScriptTags('src/rekapi-timeline/model/');
      writeScriptTags('src/rekapi-timeline/view/');
      writeScriptTags('src/rekapi-timeline/collection/');
    ?>

  <link rel="stylesheet" href="dist/rekapi-controls.jquery-ui-bundle.css">
  <link rel="stylesheet" href="src/css/rekapi-controls.css">
  <link rel="stylesheet" href="src/css/rekapi-controls-timeline.css">
</head>
<body>
  <canvas style="background: #ddd;"></canvas>
  <script>
  var canvas = document.getElementsByTagName('canvas')[0],
      kapi = new Kapi({
              'context': canvas
              ,'height': 300
              ,'width': 400
            });

  var actor = new Kapi.CanvasActor({
    // Draws a circle.
    'draw': function (canvas_context, state) {
      canvas_context.beginPath();
      canvas_context.arc(
        state.x || 50,
        state.y || 50,
        state.radius || 50,
        0,
        Math.PI*2,
        true);
      canvas_context.fillStyle = state.color || '#f0f';
      canvas_context.fill();
      canvas_context.closePath();
    }
  });

  kapi.addActor(actor);

  actor
    .keyframe(250, {
      x: 50
      ,y: 50
      ,radius: 50
      ,color: '#f0f'
    })
    .keyframe(1000, {
      x: 350
      ,y: 250
    }, 'easeOutExpo')
    .keyframe(1500, {
      x: 300
      ,y: 200
      ,radius: 100
      ,color: '#0f0'
    }, {
      x: 'bounce'
      ,y: 'bounce'
      ,radius: 'bounce'
      ,color: 'easeOutSine'
    }).wait(2750);


  kapi.play();

  var timeline = RekapiTimeline(kapi);
  console.log(kapi, timeline);

  kapi.pause();

  </script>
</body>
</html>
