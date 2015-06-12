MessageBoard.QuestionController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {

    editQuestion: function() {

      this.set('isEditing', true);

    },

    deleteQuestion: function() {

      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    },

    updateQuestion: function () {
      this.get('model').destroyRecord();
      var newQuestion = this.store.createRecord('question', {
        title: this.get('title'),
        user: this.get('user'),
        text: this.get('text')
      });
      newQuestion.save();
      this.set('isEditing', false);
      this.transitionToRoute('questions');
    }
  }
});
