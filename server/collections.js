Meteor.publish('events', function () {
  return Events.find({});
});

Meteor.publish('categories', function () {
  return Categories.find({});
});

Meteor.publish('kopajUsers', function () {
  return Categories.find({});
});


Meteor.methods({
  addKevent: function(event) {
    if(Meteor.user()) {
      /*Events.insert({
        userId:  Meteor.user()._id,
        message: message,
        createdAt: new Date()
      });*/
    }
  }
});