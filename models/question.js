MessageBoard.Question = DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
