MessageBoard.Answer = DS.Model.extend({
  text: DS.attr(),
  rating: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
