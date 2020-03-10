
var toClose = false

function toggle(e) {
	e.stopPropagation();
	var btn = this;
	var menu = btn.nextSibling;

	while (menu && menu.nodeType != 1) {
		menu = menu.nextSibling
	}
	if (!menu) return;
	if (menu.style.display !== 'block') {
		menu.style.display = 'block';
		if (toClose) toClose.style.display = "none";
		toClose = menu;
	} else {
		menu.style.display = 'none';
		toClose = false;
	}

};
function closeAll() {
	toClose.style.display = 'none';
};

window.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".btn-buy-list").forEach(function (btn) {
		btn.addEventListener("click", toggle, true);
	});
});

window.onclick = function (event) {
	if (toClose) {
		closeAll.call(event.target);
	}
};

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
	document.ById("clock").textContent =
		`${hour} : ${min} : ${sec}`;
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

