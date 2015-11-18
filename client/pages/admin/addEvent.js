Template.addEvent.helpers({

	getUsers: function() {
    	return Meteor.users.find({});
  	}
});