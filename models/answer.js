MessageBoard.Answer = DS.Model.extend({
  user: DS.attr(),
  text: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
