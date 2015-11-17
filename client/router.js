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

Router.route('/admin', {
  name:     'admin',
  template: 'admin',
  onBeforeAction: function (pause) {
    	if (!Meteor.user()) {
            // render the login template but keep the url in the browser the same
            this.render('visitor');
        }
  subscriptions: function() {
    return [
      Meteor.subscribe('events'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('kopajUsers')
    ];
  } 
});
