//const person = {
//	name: "Josh",
//	age: 27,
//	location: {
//		city : 'Kyiv',
//		temp: 94
//	}
//};


//const {name, age} = person;
//const name = person.name;
//const age = person.age;

//console.log(`${name} is ${age}`);

//const book = {
//	title: "procrastination",
//author: 'jane Burka',
//publisher: {
//	//name: "VSL"
//  }
//};


//const { name: publisherName = 'SelfPublished '} = book.publisher;
//console.log(publisherName);

//const { name: publisherName } = book.publisher;
//if ( publisherName ) {
//	console.log(publisherName);
//} else {
//	console.log('Self-published');
//} 


const item = ['Coffee (hot)', '$2.00', '$13.50', '$2.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);