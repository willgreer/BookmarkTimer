
// ** TO DO
// ** 1 when rclick on bookmark, ask if reminder needed
// ** 2 when bookmark made, prompt timer question
// ** 3 create list of bookmarks to come back to


// ** when icon clicked, able to set date and time
// **  once created, make a bookmark
// **  after that, prompt alert, at time 




function addHours() {
	const timerList = document.getElementById('time');
	console.log(timerList);
	
	let userInput = document.getElementById('time-value');
	for (var i = 0; i < timerList.length; i++) {
		timerList[i]
	}
	
}



const timerList = document.querySelector(".time-options");
timerList.addEventListener('click', createAlarm, true);

function createAlarm(e) {

	if (e.target !== e.currentTarget) {
		let alarmBtn = e.target.id;
		alert('timer set for ' + alarmBtn)
	}
}

function currentTime() {
	let date = new Date();
	let hour = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	let midday = "AM";
	midday = (hour >= 12) ? "PM" : "AM";
	hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);


	hour = updateTime(hour);
	min = updateTime(min);
	sec = updateTime(sec);
	document.getElementById("clock").innerText =
		hour + " : " + min + " : " + sec;
	var t = setTimeout(function () { currentTime() }, 1000);


	document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
	var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
	if (k < 10) {
		return "0" + k;
	}
	else {
		return k;
	}
}
currentTime();

