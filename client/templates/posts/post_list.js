var postsData = [
	{
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/'
	},
	{
	  	title: 'Meteor',
	 	url: 'http://meteor.com'
	},
	{
	 	title: 'The Meteor Book',
	 	url: 'http://themeteorbook.com'
	}
];

// create a template helper called 'posts' that returns postsData array
Template.postsList.helpers({
	posts: postsData
});