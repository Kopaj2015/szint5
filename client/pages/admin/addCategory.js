Template.addCategory.events({

  'submit form': function(event) {
    event.preventDefault();
    console.log(event.target.category.value);
    Meteor.call('addCategory', event.target.category.value);
  },
});