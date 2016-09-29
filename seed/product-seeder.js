var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping')

var products = [
	new Product({
		imagePath: 'https://downloads.2kgames.com/2k/staging/datastore/1643-nba2k17_kobegold_fob_esrb.jpg',
		title: 'NBA2K17',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 49
	}),
	new Product({
		imagePath: 'http://vignette2.wikia.nocookie.net/conworld/images/a/ae/GTA_6_Box_Cover.jpg/revision/latest?cb=20140530081847',
		title: 'GTA 6',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 59
	}),
	new Product({
		imagePath: 'http://cdn.collider.com/wp-content/uploads/2016/05/call-of-duty-infinite-warfare-cover.jpg',
		title: 'Call of Duty Infinite Warfare',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 62
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5b/WWE_2K17_Official_Cover.jpg',
		title: 'WWE 2K17',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 40
	}),
	new Product({
		imagePath: 'http://fifa17news.com/wp-content/uploads/2016/04/FIFA-17-Play-Beautiful.png',
		title: 'FIFA 17',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 50
	}),
	new Product({
		imagePath: 'http://ecx.images-amazon.com/images/I/51TMVvQIr3L.jpg',
		title: 'Assassins Creed Syndicate',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 30
	}),
	new Product({
		imagePath: 'http://img10.deviantart.net/223a/i/2016/134/6/1/madden_17_andrew_luck_cover_xbox_one_by_1madhatter-da2h1cy.png',
		title: 'Madden 17',
		description: 'Freegan normcore vegan twee hell of. Trust fund vape edison bulb, health goth chartreuse pabst prism DIY tumeric distillery humblebrag normcore blue bottle coloring book.',
		price: 10
	}),
];

var done = 0;
for (var i=0; i< products.length; i++){
	products[i].save(function(err, result){
		done++;
		if(done === products.length){
			exit();
		}
	});
}

function exit(){
	mongoose.disconnect();	
}