Template.addEvent.helpers({

	getUsers: function() {
    	return Meteor.users.find({});
  	},
  	getCategories: function() {
    	return Categories.find({});
  	}
});