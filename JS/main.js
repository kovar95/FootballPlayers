
const myTeam = {
	name : "Kovar's Northwood Team",
	logoUrl : "./images/logo.png",
	players: [
		{
			imageUrl : './images/ronaldinho.jpg',
			name : "Ronaldinho",
			lastName : "Gaucho",
			number : 9,
			position : "Forward",
			age: 27
		},
		{
			imageUrl : './images/ronaldo.png',
			name : "Cristiano",
			lastName : "Ronaldo",
			number : 7,
			position : "Forward",
			age: 34
		},
		{
			imageUrl : './images/tevez.jpg',
			name : "Carlos",
			lastName : "Tevez",
			number : 10,
			position : "Forward",
			age: 35
		},
		{
			imageUrl : './images/bane.jpg',
			name : "Branislav",
			lastName : "Ivanovic",
			number : 6,
			position : "Defender",
			age: 35
		},
		{
			imageUrl : './images/cech.jpg',
			name : "Petr",
			lastName : "Cech",
			number : 31,
			position : "Goalkeeper",
			age: 37
		},
		{
			imageUrl : './images/messi.jpg',
			name : "Lionel",
			lastName : "Messi",
			number : 10,
			position : "Attacker",
			age: 32
		},
		{
			imageUrl : './images/pique.jpg',
			name : "Gerard",
			lastName : "Pique",
			number : 3,
			position : "Defender",
			age: 32
		},
		{
			imageUrl : './images/ballack.jpg',
			name : "Michael",
			lastName : "Ballack",
			number : 13,
			position : "Midfielder",
			age: 43
		},
		{
			imageUrl : './images/vlada.jpg',
			name : "Vladimir",
			lastName : "Stojkovic",
			number : 88,
			position : "Goalkeeper",
			age: 36
		},
		{
			imageUrl : './images/zabaleta.jpg',
			name : "Pablo",
			lastName : "Zabaleta",
			number : 5,
			position : "Right Back",
			age: 34
		},
		{
			imageUrl : './images/pogba.jpg',
			name : "Pol",
			lastName : "Pogba",
			number : 6,
			position : "Midfielder",
			age: 26
		},
		{
			imageUrl : './images/pierre.jpg',
			name : "Pierre",
			lastName : "Aubameyang",
			number : 14,
			position : "Striker",
			age: 30
		},
		{
			imageUrl : './images/griezmann.jpg',
			name : "Antoane",
			lastName : "Griezmann",
			number : 17,
			position : "Attacker",
			age: 28
		},
		{
			imageUrl : './images/giroud.png',
			name : "Olivier",
			lastName : "Giroud",
			number : 18,
			position : "Striker",
			age: 33
		},
		{
			imageUrl : './images/hazard.jpg',
			name : "Eden",
			lastName : "Hazard",
			number : 7,
			position : "Midfielder",
			age: 29
		}
	]
};

// logo Image

const {logoUrl} = myTeam;
const logoImage = document.createElement("img");
logoImage.setAttribute("src", logoUrl);
const myHeader = document.querySelector("header");
myHeader.appendChild(logoImage);

// main heading

const {name} = myTeam;
const mainContent = document.querySelector("main");
const mainHeading = document.createElement("h1");
mainHeading.textContent = name;
mainContent.prepend(mainHeading);

// heading for first squad

const firstSquadHeading = document.createElement("h3");
firstSquadHeading.textContent = "First-squad players";
mainHeading.after(firstSquadHeading);

// first squad section

const firstSquad = document.createElement("section");
firstSquad.setAttribute("id","first-squad");
firstSquadHeading.after(firstSquad);

// reserve playes heading

const reservePlayersHeading = document.createElement("h3");
reservePlayersHeading.textContent = "Reserve players";
firstSquad.after(reservePlayersHeading);

// reserve players section

const reservePlayers = document.createElement("section");
reservePlayers.setAttribute("id","reserve-players");
reservePlayersHeading.after(reservePlayers);


const generateFirstSquad = ()=> {

	let num = [], i = 0;
	while(num.length < 11){
		let randNum = Math.floor(Math.random()*myTeam.players.length);
		if(!num.includes(randNum)){
			num[i] = randNum;
			i++;
		}
	}

	return num;
}

const generateReservePlayers = someArray => {

	let k = 0, reserve = [];
	
	for (let i = 0; i < myTeam.players.length; i++) {
		if (!someArray.includes(i)) {
			reserve[k] = i;
			k++;
		}
	}

	return reserve;
}

// easier code

const firstSquadNumbers = generateFirstSquad();
const reserveNumbers = generateReservePlayers(firstSquadNumbers);

const generateMyTeam = ()=> {

	firstSquad.innerHTML = "";
	reservePlayers.innerHTML = "";

	for (let i = 0; i < firstSquadNumbers.length; i++) {

		let {imageUrl, name, lastName, number, position, age} = myTeam.players[firstSquadNumbers[i]];
		firstSquad.innerHTML += `<article>
		<img src="${imageUrl}">
		<span>Name: <strong>${name}</strong></span>
		<span>Last name: <strong>${lastName}</strong></span>
		<span>Number: <strong>${number}</strong></span>
		<span>Position: <strong>${position}</strong></span>
		<span>Age: <strong>${age}</strong></span>
		</article>`;

	}

	for (let i = 0; i < reserveNumbers.length; i++) {

		let {imageUrl, name, lastName, number, position, age} = myTeam.players[reserveNumbers[i]];
		reservePlayers.innerHTML += `<article>
		<img src="${imageUrl}">
		<span>Name: <strong>${name}</strong></span>
		<span>Last name: <strong>${lastName}</strong></span>
		<span>Number: <strong>${number}</strong></span>
		<span>Position: <strong>${position}</strong></span>
		<span>Age: <strong>${age}</strong></span>
		</article>`;

	}

}

generateMyTeam();

const substitution = ()=> {

	let randIndexFirst = Math.floor(Math.random() * firstSquadNumbers.length);
	let randIndexReserve = Math.floor(Math.random() * reserveNumbers.length);
	let temp;
	temp = firstSquadNumbers[randIndexFirst];
	firstSquadNumbers[randIndexFirst] = reserveNumbers[randIndexReserve];
	reserveNumbers[randIndexReserve] = temp;

	generateMyTeam();
}

setInterval(substitution, 60000);

// end of easier code



// harder way, but more pure JS (no HTML used)
//  uncomment code below, and comment code above to see 

// PURE JS

// const genElement = (someNumber, someProperty) => {

// 	let someSpan = document.createElement("span");
// 	let someStrong = document.createElement("strong");
// 	let {name, lastName, number, position, age} = myTeam.players[someNumber];
	
// 	switch(someProperty) {
// 		case "name" : {
// 			someStrong.textContent = name;
// 			someSpan.innerHTML = "Name: ";
// 			break;
// 		}
// 		case "lastname" : {
// 			someStrong.textContent = lastName;
// 			someSpan.innerHTML = "Last name: ";
// 			break;
// 		}
// 		case "number" : {
// 			someStrong.textContent =number;
// 			someSpan.innerHTML = "Number: ";
// 			break;
// 		}
// 		case "position" : {
// 			someStrong.textContent = position;
// 			someSpan.innerHTML = "Position: ";
// 			break;
// 		}
// 		case "age" : {
// 			someStrong.textContent = age;
// 			someSpan.innerHTML = "Age: ";
// 			break;
// 		}
// 	}
	
// 	someSpan.appendChild(someStrong);
// 	return someSpan;
// }

// const genImg = someNumber => {
// 	let someImage = document.createElement("img");
// 	someImage.setAttribute("src", myTeam.players[someNumber].imageUrl);
// 	return someImage;
// }

// const genArticle = (...theArgs) => {

// 	let someArticle = document.createElement("article");
// 	theArgs.forEach(element => someArticle.appendChild(element));

// 	return someArticle;
// }

// let firstSquadNumbers = generateFirstSquad();
// let reserveNumbers = generateReservePlayers(firstSquadNumbers);

// const generateMyTeamHarder = () => {

// 	firstSquad.innerHTML = "";
// 	reservePlayers.innerHTML = "";

// 	for (let i = 0; i < firstSquadNumbers.length; i++) {

// 		let myName = genElement(firstSquadNumbers[i],"name");
// 		let myLastName = genElement(firstSquadNumbers[i], "lastname");
// 		let myNum = genElement(firstSquadNumbers[i], "number");
// 		let myPos = genElement(firstSquadNumbers[i], "position");
// 		let myAge = genElement(firstSquadNumbers[i], "age");
// 		let myImg = genImg(firstSquadNumbers[i]);
// 		let myArticle = genArticle(myImg, myName, myLastName, myNum, myPos, myAge);

// 		firstSquad.appendChild(myArticle)
// 	}

// 	for (let i = 0; i < reserveNumbers.length; i++) {
		
// 		let myName = genElement(reserveNumbers[i], "name");
// 		let myLastName = genElement(reserveNumbers[i], "lastname");
// 		let myNum = genElement(reserveNumbers[i], "number");
// 		let myPos = genElement(reserveNumbers[i], "position");
// 		let myAge = genElement(reserveNumbers[i], "age");
// 		let myImg = genImg(reserveNumbers[i]);

// 		let myArticle = genArticle(myImg, myName, myLastName, myNum, myPos, myAge);

// 		reservePlayers.appendChild(myArticle)
// 	}

// }

// const substitution = () => {

// 	let randIndexFirst = Math.floor(Math.random() * firstSquadNumbers.length);
// 	let randIndexReserve = Math.floor(Math.random() * reserveNumbers.length);
// 	let temp;
// 	temp = firstSquadNumbers[randIndexFirst];
// 	firstSquadNumbers[randIndexFirst] = reserveNumbers[randIndexReserve];
// 	reserveNumbers[randIndexReserve] = temp;

// 	generateMyTeamHarder();
// }

// generateMyTeamHarder();

// setInterval(substitution, 60000);

// end of PURE JS

