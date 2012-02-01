;(function (global) {

  var CSS_NS = 'rt-'
      ,$ = jQuery;


  var RekapiModel = Backbone.Model.extend({

    'initialize': function (opts) {
      var sourceActors = _.values(opts.source.getAllActors());
      var modelParams = [];

      _.each(sourceActors, function (actor) {
        modelParams.push({
          'source': actor
        });
      });

      this.set('actors',
          new RekapiActorCollection(modelParams));
    }

  });


  var RekapiView = Backbone.View.extend({

    'events': {
    }


    ,'TEMPLATE':
      ['<div class="' + CSS_NS + 'wrapper">'
          ,'<div class="' + CSS_NS + 'control-bar">'
          ,'</div>'
          ,'<div class="' + CSS_NS + 'headers-and-timelines">'
            ,'<ul class="' + CSS_NS + 'actor-headers"></ul>'
            ,'<ul class="' + CSS_NS + 'actor-timelines"></ul>'
          ,'</div'
        ,'</div>'
      ].join('')


    ,'initialize': function (opts) {
      var $wrapper = $(this.TEMPLATE);
      $wrapper.appendTo(document.body);
      this.$el = $(document.body).children(':last');
      this._cacheEls();
      this.render();
      this.__fillHeader();
      this._initPanes();
      $(window).trigger('resize.rt');
    }


    ,'_cacheEls': function () {
      this.$controlBar = this.$el.find('.' + CSS_NS + 'control-bar');
      this.$headers = this.$el.find('.' + CSS_NS + 'actor-headers');
      this.$timeline = this.$el.find('.' + CSS_NS + 'actor-timelines');
      this.$headersAndTimeline =
          this.$el.find('.' + CSS_NS + 'headers-and-timelines');
    }


    ,'_initPanes': function () {
      this.$headersAndTimeline.split();
      this.$el.resizeDockable();
    }


    ,'__fillHeader': function () {
      var actors = this.model.attributes.source.getAllActors();
      _.each(actors, function (actor, actorId) {
        new RekapiActorHeaderView({
          'model': new RekapiActorModel(actor)
          ,'$parentList': this.$headers
        });
      }, this);
    }


    ,'render': function () {
    }

  });


  var RekapiActorCollection = Backbone.Collection.extend({

    'model': RekapiActorModel


    ,'initialize': function (opts) {

    }

  });


  var RekapiActorModel = Backbone.Model.extend({

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


  var RekapiActorTimelineView = Backbone.View.extend({

    'events': {}


    ,'initialize': function (opts) {

    }

  });


  global.RekapiTimeline = function (kapi) {
    return new RekapiView({
      'model': new RekapiModel({ 'source': kapi })
    });
  };

} (this));
