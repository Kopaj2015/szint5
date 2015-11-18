Template.addCategory.events({

  'submit form': function(event) {
    event.preventDefault();
    Meteor.call('addCategory', event.target.category.value);
  },
});