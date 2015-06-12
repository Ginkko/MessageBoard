MessageBoard.Router.map(function() {
  this.resource('questions');
  this.resource('question', {path: 'questions/:question_id'}, function() {
    this.resource('answer');
  });
});
