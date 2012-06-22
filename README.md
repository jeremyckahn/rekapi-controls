# Rekapi Controls

Rekapi Controls is a set of graphical tools for interacting with [Rekapi](http://jeremyckahn.github.com/rekapi/) animations in a browser.  The goal of this project is to expose user-friendly UI components for working with animations.

Components include:

- A scrubber for controlling the playback and position of the animtion.

Dependencies for Rekapi Controls:

- [Rekapi](https://github.com/jeremyckahn/rekapi/)
  - [Underscore](https://github.com/documentcloud/underscore)
  - [Shifty](https://github.com/jeremyckahn/shifty)
- [jQuery Dragon](https://github.com/jeremyckahn/dragon)

All dependencies can be found in `dist/`.

## Using Rekapi Controls

First, load the dependencies.  If you don't want to hunt down the source files for everything, you can just use the minified dependency files:

- dist/jquery.min.js
- dist/rekapi.bundle.min.js
- dist/rekapi-controls.min.js
- dist/dragon-bundle.js
- dist/jquery.dragon-slider.css
- dist/rekapi-controls.css

You will also need the `dist/images` directory, but the files above will do the loading for you.

Create a Rekapi animation.  Please see the [documentation on Rekapi](https://github.com/jeremyckahn/rekapi/blob/master/README.md) for more information, but here's a quick, copy/paste-able example:

````html
<!DOCTYPE html>
<html>
<head>
  <script src="dist/jquery.min.js"></script>
  <script src="dist/rekapi.bundle.min.js"></script>
  <script src="dist/rekapi-controls.min.js"></script>
  <script src="dist/dragon-bundle.js"></script>
  <link rel="stylesheet" href="dist/rekapi-controls.jquery-ui-bundle.css">
  <link rel="stylesheet" href="dist/rekapi-controls.css">
  <link rel="stylesheet" href="dist/jquery.dragon-slider.css">
</head>
<body>
  <canvas></canvas>
  <script>
  var canvas = document.getElementsByTagName('canvas')[0],
      kapi = new Kapi(canvas);

  var actor = new Kapi.Actor({
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
    .keyframe(0, {
      x: 50,
      y: 50
    })
    .keyframe(1000, {
      x: 200,
      y: 100
    }, 'easeOutExpo');

  kapi.play();

  </script>
</body>
</html>

````

Assuming that `kapi` is out Kapi instance, add an interactive scrubber to it like so:

````javascript
var controls = new RekapiScrubber(kapi);
````

Poof!  That's all there is to it.  You can now control the animation with your mouse.

__More controls are in the works.__
