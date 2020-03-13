// ! TODO:
// log current time and pass thru alrm + dropdown
// create function for countdown based on which link clicked

let parentNode = document.querySelector('.time-options');
parentNode.addEventListener("click", logLinkId, false);

function logLinkId(e) {
	if (e.target !== e.target.id) {
		let clickedHour = e.target.id;
		alert('timer set!');
	}
	e.stopPropagation();
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
	document.getElementById("clock").textContent =
		`${hour} : ${min} : ${sec}`;
	var t = setTimeout(function () { currentTime() }, 1000);


	document.getElementById("clock").innerText = `${hour} : ${min} : ${sec} ${midday}`; /* adding time to the div */
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




function Dropdown(o) {
	this.options = o;

	window.getdd = function (elem) {
		var id = elem.closest('.dropdown').parentElement.id;
		return window.dropdowns[id];
	};

	this.init = function () {
		this.elem = document.getElementById(this.options.id);

		var val = this.options.val;
		var html = `<div class='dropdown'>
											<div class='dropdown_value'>${val}</div>
											<div class='dropdown_arrow'>&#11151;</div>			
										<div class='dropdown_panel'>					
											<div class='dropdown_items'>
											</div>
									 </div>
									</div>`;
		// elements
		this.elem.innerHTML = html;
		var elem = this.elem;
		// width of hidden parent block to inline block to align
		this.elem.style.display = 'inline-block';

		// store each Dropdown as a list
		if (!window.dropdowns) window.dropdowns = {};
		window.dropdowns[this.options.id] = this;

		//items in html
		this.items = elem.querySelector('.dropdown_items');
		this.arrow = elem.querySelector('.dropdown_arrow');
		this.value = elem.querySelector('.dropdown_value');

		// add the items to dropdown in html
		var data = this.options.data;
		html = "";
		data.forEach(function (elem) {
			html += `<div class=
			        'dropdown_item'
							onmousedown='var self=getdd(this); self.clicked(this)'>${elem}</div>`;
		});
		this.items.innerHTML = html;
		var self = this;

		document.addEventListener('mousedown', function () {
			self.hide();
		});

		// dropdown drop
		this.elem.addEventListener('mousedown', function () {
			event.stopPropagation();

			if (self.isVisible)
				self.hide();
			else
				self.show();
			self

		});
	};

	this.clicked = function (elem) {
		event.stopPropagation();
		this.hide();

		var newval = elem.innerHTML;
		this.value.innerHTML = newval;

		console.log(newval);
	};

	this.show = function () {

		//if using both, close all others on click
		for (var dd in window.dropdowns)
			window.dropdowns[dd].hide();

		this.isVisible = true;
		this.items.style.transform = 'translate(0px, 0px)';
		this.arrow.style.transform = 'rotate(180deg)';
	};

	this.hide = function () {

		if (!this.isVisible) return;
		``
		this.isVisible = false;
		this.items.style.transform = 'translate(0px, -255px)';
		this.arrow.style.transform = 'rotate(0deg)';
	};

	this.init();
	return this;
}


var dd1 = new Dropdown(
	{
		id: 'dd1',
		val: 'custom:',
		data: new Array(24).fill(0).map((_, i) => `${i + 1} hour${i > 0 ? 's' : ''}`),
		cb: function (newval) {
			alert(newval);
		}
	});

