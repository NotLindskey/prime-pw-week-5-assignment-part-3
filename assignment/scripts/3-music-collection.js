console.log("***** Music Collection *****");

let collection = [];
let artist = [];

function addToCollection(title, artist, yearPublished) {
	return collection.push({ title, artist, yearPublished });
}

addToCollection("Turn the Light On", "Imminence", 2019);
addToCollection("Use Me (Deluxe)", "PVRIS", 2020);
addToCollection("Disgusting", "Beartooth", 2014);
addToCollection("Sempiternal (Deluxe Edition", "Bring Me The Horizon", 2013);
addToCollection("All We Know of Heaven, All we Need of Hell", "PVRIS", 2017);
addToCollection("Palisades", "Palisades", 2017);

console.log(collection[0]);
console.log(collection[1]);
console.log(collection[2]);
console.log(collection[3]);
console.log(collection[4]);
console.log(collection[5]);

function showCollection(collection) {
	for (let i = 0; i < collection.length; i++) {
		console.log(
			`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`
		);
	}
}

showCollection(collection);


function findByArtist(artist){
	
	for(let i =0 ; i < collection.length; i++){
		console.log(`${collection[i].artist}`);
		}
	}

console.log(findByArtist('PVRIS'));