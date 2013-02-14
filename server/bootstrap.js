Meteor.startup(function () {
  	if (Meteor.users.find().count() === 0) {
		console.log('about to create initial users');
		Accounts.createUser({ "username": "Test", "password": "Test", "email": "test@example.com"});
		console.log('users created');
	}
	
	if (Workers.find().count() === 0) {
	
		var user = Meteor.users.findOne({"username": "Test"});
	
		var workers = [{ 'name': 'Matt', 
				'metrics': { 'pending': 0, 'completed': 20, 'lastActivity': '2012-11-29 13:15:00'}},
			{ 'name': 'Carmen', 
				'metrics': { 'pending': 0, 'completed': 92, 'lastActivity': '2012-11-29 15:03:18'} },
			{ 'name': 'John', 
				'metrics': { 'pending': 0, 'completed': 16, 'lastActivity': '2012-11-29 11:34:18'} },
			{ 'name': 'Wayne', 
				'metrics': { 'pending': 0, 'completed': 21, 'lastActivity': '2012-11-29 09:15:54'} },
			{ 'name': 'Jack', 
				'metrics': { 'pending': 0, 'completed': 19, 'lastActivity': '2012-10-15 16:33:13'} },
				
			{'name': 'Bob Geldof', 
				'metrics': { 'pending': 0, 'completed': 12, 'lastActivity': '2012-12-15 16:33:13'}}];
		
		for(var i=0; i<workers.length; i++) {
			workers[i].owner = user._id;
			Workers.insert(workers[i]);
		}
	}
});