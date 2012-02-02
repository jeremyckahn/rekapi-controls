;(function (global) {

  var CSS_NS = 'rt-'
      ,$ = jQuery;


  var RekapiModel = Backbone.Model.extend({

    'initialize': function (opts) {
      var sourceActors = _.values(opts.source.getAllActors());
      var actorModels = [];

      _.each(sourceActors, function (actor) {
        actorModels.push(new RekapiActorModel({
          'source': actor
        }));
      });

      this.set('actors',
          new RekapiActorCollection(actorModels));
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
            ,'<ul class="' + CSS_NS + 'actor-headers">'
              // Temporary el, used to size the header correctly when it is
              // initialized
              ,'<li class="' + CSS_NS + 'actor-header"></li>'
            ,'</ul>'
            ,'<ul class="' + CSS_NS + 'actor-timelines">'
            ,'</ul>'
          ,'</div'
        ,'</div>'
      ].join('')


    ,'initialize': function (opts) {
      var $wrapper = $(this.TEMPLATE);
      $wrapper.appendTo(document.body);
      this.$el = $(document.body).children(':last');
      this._cacheEls();
      this._initPanes();
      this.render();
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


    ,'renderHeader': function () {
      this.$headers.children().remove();
      this.model.get('actors').each(function (actor) {
        console.log(actor)
        actor.headerView.render();
        this.$headers.append(actor.headerView.$el);
      }, this);

    }


    ,'render': function () {
      this.renderHeader();
    }

  });


  var RekapiActorCollection = Backbone.Collection.extend({

    'model': RekapiActorModel


    ,'initialize': function (opts) {

    }

  });


  var RekapiActorModel = Backbone.Model.extend({

    'initialize': function (opts) {
      this.headerView = new RekapiActorHeaderView({
        'model': this
      });

      this.timelineView = new RekapiActorTimelineView({
        'model': this
      });
    }

  });


  var RekapiActorHeaderView = Backbone.View.extend({

    'events': {}


    ,'ACTOR_HEADER_TEMPLATE': [
        '<li class="' + CSS_NS + 'actor-header"></li>'
      ].join('')


    ,'initialize': function (opts) {
      this.$el = $(this.ACTOR_HEADER_TEMPLATE);

      return this;
    }


    ,'render': function () {
      this.$el.html('Actor ' + this.model.get('source').id);
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
