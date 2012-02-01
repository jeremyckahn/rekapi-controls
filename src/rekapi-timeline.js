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
        'model': new RekapiActorModel(actor)
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


  var RekapiActorHeaderView = Backbone.View.extend({

    'events': {}


    ,'ACTOR_HEADER_TEMPLATE': [
        '<li class="' + CSS_NS + 'actor-header"></li>'
      ].join('')


    ,'initialize': function (opts) {
      this.$parentList = opts.$parentList;
      this.id = this.model.get('id');

      var $el = $(this.ACTOR_HEADER_TEMPLATE);
      $el.appendTo(this.$parentList);
      this.$el = this.$parentList.children(':last');
      this.render();

      return this;
    }


    ,'render': function () {
      this.$el.html('Actor ' + this.id);
    }

  });


  var RekapiActorCollection = Backbone.Collection.extend({

    'model': RekapiActorModel


    ,'initialize': function () {

    }

  });


  var RekapiActorModel = Backbone.Model.extend({

  });


  global.RekapiTimeline = function (opts) {
    return new RekapiView(opts);
  };

} (this));
