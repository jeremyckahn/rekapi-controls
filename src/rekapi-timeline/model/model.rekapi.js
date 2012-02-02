extend('RekapiTimeline.model.rekapi', Backbone.Model.extend({

  'initialize': function (opts) {
    var sourceActors = _.values(opts.source.getAllActors());
    var actorModels = [];

    _.each(sourceActors, function (actor) {
      actorModels.push(new RekapiTimeline.model.actor({
        'source': actor
      }));
    });

    this.set('actors',
        new RekapiTimeline.collection.actor(actorModels));
  }

}));