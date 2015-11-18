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
  addEvent: function(firstTeam,secondTeam,category,eventName,place,eventTime,result) {
    if(Meteor.user()) {
      Events.insert({
        firstTeam: firstTeam,
        secondTeam: secondTeam,
        category: category,
        name: eventName,
        place: place,
        time: eventTime,
        result: result
      });
    }
  }
});