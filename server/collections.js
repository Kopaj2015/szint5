Meteor.publish('events', function () {
  return Events.find({});
});

Meteor.publish('categories', function () {
  return Categories.find({});
});

Meteor.publish('kopajUsers', function () {
  return Categories.find({});
});
