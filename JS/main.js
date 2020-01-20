
var myTeam = {
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

var logoImage = document.createElement("img");
logoImage.setAttribute("src", myTeam.logoUrl);
var myHeader = document.querySelector("header");
myHeader.appendChild(logoImage);

// main heading

var mainContent = document.querySelector("main");
var mainHeading = document.createElement("h1");
mainHeading.textContent = myTeam.name;
mainContent.prepend(mainHeading);

// heading for first squad

var firstSquadHeading = document.createElement("h3");
firstSquadHeading.textContent = "First-squad players";
mainHeading.after(firstSquadHeading);

// first squad section

var firstSquad = document.createElement("section");
firstSquad.setAttribute("id","first-squad");
firstSquadHeading.after(firstSquad);

// reserve playes heading

var reservePlayersHeading = document.createElement("h3");
reservePlayersHeading.textContent = "Reserve players";
firstSquad.after(reservePlayersHeading);

// reserve players section

var reservePlayers = document.createElement("section");
reservePlayers.setAttribute("id","reserve-players");
reservePlayersHeading.after(reservePlayers);


function generateFirstSquad(){

	var num = [];
	var i = 0;
	while(num.length < 11){
		var randNum = Math.floor(Math.random()*myTeam.players.length);
		if(!num.includes(randNum)){
			num[i] = randNum;
			i++;
		}
	}

	return num;
}

function generateReservePlayers(someArray) {

	var k = 0;
	var reserve = [];

	for (var i = 0; i < myTeam.players.length; i++) {
		if (!someArray.includes(i)) {
			reserve[k] = i;
			k++;
		}
	}

	return reserve;
}

// easier code

var firstSquadNumbers = generateFirstSquad();
var reserveNumbers = generateReservePlayers(firstSquadNumbers);

function generateMyTeam(){

	firstSquad.innerHTML = "";
	reservePlayers.innerHTML = "";

	for (var i = 0; i < firstSquadNumbers.length; i++) {

		firstSquad.innerHTML += "<article>\
		<img src=" + myTeam.players[firstSquadNumbers[i]].imageUrl + ">\
		<span>Name: <strong>" + myTeam.players[firstSquadNumbers[i]].name + "</strong></span>\
		<span>Last name: <strong>" + myTeam.players[firstSquadNumbers[i]].lastName + "</strong></span>\
		<span>Number: <strong>" + myTeam.players[firstSquadNumbers[i]].number + "</strong></span>\
		<span>Position: <strong>" + myTeam.players[firstSquadNumbers[i]].position + "</strong></span>\
		<span>Age: <strong>" + myTeam.players[firstSquadNumbers[i]].age + "</strong></span>\
		</article>";

	}

	for (var i = 0; i < reserveNumbers.length; i++) {

		reservePlayers.innerHTML += "<article>\
		<img src=" + myTeam.players[reserveNumbers[i]].imageUrl + ">\
		<span>Name: <strong>" + myTeam.players[reserveNumbers[i]].name + "</strong></span>\
		<span>Last name: <strong>" + myTeam.players[reserveNumbers[i]].lastName + "</strong></span>\
		<span>Number: <strong>" + myTeam.players[reserveNumbers[i]].number + "</strong></span>\
		<span>Position: <strong>" + myTeam.players[reserveNumbers[i]].position + "</strong></span>\
		<span>Age: <strong>" + myTeam.players[reserveNumbers[i]].age + "</strong></span>\
		</article>";

	}

}

generateMyTeam();

function substitution(){

	var randIndexFirst = Math.floor(Math.random() * firstSquadNumbers.length);
	var randIndexReserve = Math.floor(Math.random() * reserveNumbers.length);
	var temp;
	temp = firstSquadNumbers[randIndexFirst];
	firstSquadNumbers[randIndexFirst] = reserveNumbers[randIndexReserve];
	reserveNumbers[randIndexReserve] = temp;

	generateMyTeam();
}

setInterval(()=>substitution(),60000);

// end of easier code



// harder way, but more pure JS (no HTML used)
//  uncomment code below, and comment code above to see 

// PURE JS

// function genElement(someNumber,someProperty){

// 	var someSpan = document.createElement("span");
// 	var someStrong = document.createElement("strong");

// 	switch(someProperty) {
// 		case "name" : {
// 			someStrong.textContent = myTeam.players[someNumber].name;
// 			someSpan.innerHTML = "Name: ";
// 			break;
// 		}
// 		case "lastname" : {
// 			someStrong.textContent = myTeam.players[someNumber].lastName;
// 			someSpan.innerHTML = "Last name: ";
// 			break;
// 		}
// 		case "number" : {
// 			someStrong.textContent = myTeam.players[someNumber].number;
// 			someSpan.innerHTML = "Number: ";
// 			break;
// 		}
// 		case "position" : {
// 			someStrong.textContent = myTeam.players[someNumber].position;
// 			someSpan.innerHTML = "Position: ";
// 			break;
// 		}
// 		case "age" : {
// 			someStrong.textContent = myTeam.players[someNumber].age;
// 			someSpan.innerHTML = "Age: ";
// 			break;
// 		}
// 	}
	
// 	someSpan.appendChild(someStrong);
// 	return someSpan;
// }

// function genImg(someNumber){
// 	var someImage = document.createElement("img");
// 	someImage.setAttribute("src", myTeam.players[someNumber].imageUrl);
// 	return someImage;
// }

// function genArticle(someImage, someName, someLastName, someNumber, somePosition, someAge){

// 	var someArticle = document.createElement("article");
// 	someArticle.appendChild(someImage);
// 	someArticle.appendChild(someName);
// 	someArticle.appendChild(someLastName);
// 	someArticle.appendChild(someNumber);
// 	someArticle.appendChild(somePosition);
// 	someArticle.appendChild(someAge);
// 	return someArticle;
// }

// var firstSquadNumbers = generateFirstSquad();
// var reserveNumbers = generateReservePlayers(firstSquadNumbers);

// function generateMyTeamHarder(){

// 	firstSquad.innerHTML = "";
// 	reservePlayers.innerHTML = "";

// 	for (var i = 0; i < firstSquadNumbers.length; i++) {

// 		var myName = genElement(firstSquadNumbers[i],"name");
// 		var myLastName = genElement(firstSquadNumbers[i], "lastname");
// 		var myNum = genElement(firstSquadNumbers[i], "number");
// 		var myPos = genElement(firstSquadNumbers[i], "position");
// 		var myAge = genElement(firstSquadNumbers[i], "age");
// 		var myImg = genImg(firstSquadNumbers[i]);

// 		var myArticle = genArticle(myImg, myName, myLastName, myNum, myPos, myAge);

// 		firstSquad.appendChild(myArticle)
// 	}

// 	for (var i = 0; i < reserveNumbers.length; i++) {
		
// 		var myName = genElement(reserveNumbers[i], "name");
// 		var myLastName = genElement(reserveNumbers[i], "lastname");
// 		var myNum = genElement(reserveNumbers[i], "number");
// 		var myPos = genElement(reserveNumbers[i], "position");
// 		var myAge = genElement(reserveNumbers[i], "age");
// 		var myImg = genImg(reserveNumbers[i]);

// 		var myArticle = genArticle(myImg, myName, myLastName, myNum, myPos, myAge);

// 		reservePlayers.appendChild(myArticle)
// 	}

// }

// function substitution(){

// 	var randIndexFirst = Math.floor(Math.random() * firstSquadNumbers.length);
// 	var randIndexReserve = Math.floor(Math.random() * reserveNumbers.length);
// 	var temp;
// 	temp = firstSquadNumbers[randIndexFirst];
// 	firstSquadNumbers[randIndexFirst] = reserveNumbers[randIndexReserve];
// 	reserveNumbers[randIndexReserve] = temp;

// 	generateMyTeamHarder();
// }

// generateMyTeamHarder();

// setInterval(()=>substitution(),60000);

// end of PURE JS

