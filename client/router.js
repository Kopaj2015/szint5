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
            // render the login template but keep the url in the browser the same
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

Router.route('/user', {
  name:     'user',
  template: 'user',
  onBeforeAction: function (pause) {
    	if (!Meteor.user()) {
            // render the login template but keep the url in the browser the same
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
