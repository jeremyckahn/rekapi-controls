;(function (global) {
  if (!jQuery || !Kapi) {
    throw 'Rekapi, and jQuery are needed for Rekapi Controls.';
  }

  var CSS_NS = 'rt-'
    ,CONTAINER_TEMPLATE =
      ['<div class="' + CSS_NS + 'wrapper">'
        ,'<div class="' + CSS_NS + 'control-bar">'
        ,'</div>'
        ,'<div class="' + CSS_NS + 'headers-and-timelines">'
          ,'<ul class="' + CSS_NS + 'actor-headers"></ul>'
          ,'<ul class="' + CSS_NS + 'actor-timelines"></ul>'
        ,'</div'
      ,'</div>'
    ].join('');

  var $ = jQuery;


  function fillControls (controls) {
    fillHeader(controls);
  }


  function fillHeader (rekapiTimelineView) {
    var actors = rekapiTimelineView.kapi.getAllActors();
    _.each(actors, function (actor, actorId) {
      rekapiTimelineView[actorId] = new RekapiActorHeaderView({
        'actor': actor
        ,'$parentList': rekapiTimelineView.$headers
      });
    });
  }


  function initResizablePanes (controls) {
    controls.$headersAndTimeline.split();
    controls.$el.resizeDockable();
  }


  var RekapiView = Backbone.View.extend({

    'events': {
    }


    ,'initialize': function (opts) {
      this.kapi = kapi;
      var $wrapper = $(CONTAINER_TEMPLATE);
      $wrapper.appendTo(document.body);
      this.$el = $(document.body).children(':last');
      this.bindDomToView();
      this.render();
      fillControls(this);
      initResizablePanes(this);
      $(window).trigger('resize.rt');
    }


    ,'initActors': function () {

    }


    ,'bindDomToView': function () {
      this.$controlBar = this.$el.find('.' + CSS_NS + 'control-bar');
      this.$headers = this.$el.find('.' + CSS_NS + 'actor-headers');
      this.$timeline = this.$el.find('.' + CSS_NS + 'actor-timelines');
      this.$headersAndTimeline =
          this.$el.find('.' + CSS_NS + 'headers-and-timelines');
    }


    ,'render': function () {
    }

  });


  var RekapiActorHeaderModel = Backbone.Model.extend({

    'initialize': function (attrs) {

    }

  });


  var ACTOR_HEADER_TEMPLATE = [
      '<li class="' + CSS_NS + 'actor-header"></li>'
    ].join('');


  var RekapiActorHeaderView = Backbone.View.extend({
    'events': {}


    ,'initialize': function (opts) {
      this.$parentList = opts.$parentList;
      this.actor = opts.actor;
      this.id = this.actor.id;

      var $el = $(ACTOR_HEADER_TEMPLATE);
      $el.appendTo(this.$parentList);
      this.$el = this.$parentList.children(':last');
      this.render();

      return this;
    }


    ,'render': function () {
      this.$el.html('Actor ' + this.id);
    }

  });


  var ACTOR_TEMPLATE = [
      '<li class="' + CSS_NS + 'actor-timeline"></li>'
    ].join('');

  var RekapiActorView = Backbone.View.extend({
    'events': {}


    ,'initialize': function (opts) {
      this.$parentList = opts.$parentList;
      this.model = opts.rekapiActorModel;

      var $el = $(ACTOR_TEMPLATE);
      $el.appendTo(this.$parentList);
      this.$el = this.$parentList.children(':last');

      return this;
    }


    ,'render': function () {

    }

  });


  var RekapiActorCollection = Backbone.Collection.extend({

    'model': RekapiActorModel


    ,'initialize': function () {

    }
  });


  var RekapiActorModel = Backbone.Model.extend({

    'initialize': function (attrs) {
      this.actor = attrs.actor;
      this.id = this.actor.id;

      _.extend(this, {
        'tracks': {}
      });

      _.each(this.actor.getTrackNames(), function (trackName) {
        var rekapiKeyframePropertyArray = [];
        var trackLength = this.actor.getTrackLength(trackName);
        var i, keyframePropertyModel;

        for (i = 0; 0 < trackLength; trackLength++) {
          keyframePropertyModel = new RekapiKeyframePropertyModel({
            'keyframeProperty': this.getKeyframeProperty(trackName, i)
          });
          rekapiKeyframePropertyArray.push(keyframePropertyModel);
        }

        this.tracks[trackName] =
            new RekapiKeyframePropertyCollection(rekapiKeyframePropertyArray);

      }, this);

      return this;
    }

  });


  var RekapiKeyframePropertyCollection = Backbone.Collection.extend({

    'model': RekapiKeyframePropertyModel


    ,'initialize': function () {

    }

  });


  var RekapiKeyframePropertyModel = Backbone.Model.extend({

    'initialize': function (attrs) {
      this.keyframeProperty = attrs.keyframeProperty;
      this.id = this.keyframeProperty.id;

      return this;
    }

  });


  global.RekapiTimeline = function (opts) {
    return new RekapiView(opts);
  };

} (this));
