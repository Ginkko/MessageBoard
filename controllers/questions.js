MessageBoard.QuestionsController = Ember.ArrayController.extend({
  isCreatingQuestion: false,
  actions: {

    newQuestion: function () {
      this.set('isCreatingQuestion', true);
    },

    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        text: this.get('text')
      });
      newQuestion.save();
      this.set('isCreatingQuestion', false);
    }

  }
});
