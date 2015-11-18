Template.visitor.helpers({

	getCategories: function() {
    	return Categories.find({});
  	},

  	getLatestEvents: function(){
  		return Events.find({}, { sort: {  limit: 5}});
  	}
});


