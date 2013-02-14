Workers = new Meteor.Collection('workers');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to sortSample.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

Template.hello.workers = function () {
	console.log('workers');
	var workers = Workers.find({}, {sort: { name: "asc" }});
	return workers;
};
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

