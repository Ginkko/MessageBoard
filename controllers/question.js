MessageBoard.QuestionController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    deleteQuestion: function() {
      
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
});
