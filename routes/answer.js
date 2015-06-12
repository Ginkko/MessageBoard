MessageBoard.AnswerRoute = Ember.Route.extend ({
  model: function(){
    return this.store.find('answer');
  }
});
