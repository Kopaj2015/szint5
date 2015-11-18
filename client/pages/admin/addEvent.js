Template.addEvent.helpers({

	getUsers: function() {
    	return Meteor.users.find({});
  	},
  	getCategories: function() {
    	return Categories.find({});
  	}
});

Template.addEvent.events({

  'submit form': function(event) {
    event.preventDefault();
    Meteor.call('addEvent', event.target.firstTeam.value,
    	event.target.secondTeam.value,
    	event.target.category.value,
    	event.target.eventName.value,
    	event.target.place.value,
    	event.target.eventTime.value,
    	event.target.result.value,
    	);
  },
});