Template.visitor.helpers({

	getCategories: function() {
    	return Categories.find({});
  	},

  	getLatestEvents: function(){
  		return Events.find({}, { sort: { date: -1, limit: 5}});
  	}
});


