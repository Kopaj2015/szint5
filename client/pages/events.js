Template.events.helpers({

getEvents: function() {    
	return Events.find({category: this.params.category});
  }
  
});
