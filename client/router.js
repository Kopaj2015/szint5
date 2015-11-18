/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name:     'visitor',
  template: 'visitor',
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});

Router.route('/leaderboard', {
  name:     'leaderboard',
  template: 'leaderboard',
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});


Router.route('/admin', {
  name:     'admin',
  template: 'admin',
  onBeforeAction: function (pause) {
    	if (!Meteor.user()) {
            Router.go('/');
        }
    },
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});

Router.route('/admin/addevent', {
  name:     'addEvent',
  template: 'addEvent',
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});

Router.route('/admin/addcategory', {
  name:     'addCategory',
  template: 'addCategory',
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});

Router.route('/user', {
  name:     'user',
  template: 'user',
  onBeforeAction: function (pause) {
    	if (!Meteor.user()) {
            Router.go('/');
        }
    },
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});
