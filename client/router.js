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
      Meteor.subscribe('kopajUser')
    ];
  } 
});
