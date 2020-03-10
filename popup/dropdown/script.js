function Dropdown(o) {
	this.options = o;

	window.getdd = function (elem) {
		var id = elem.closest('.dropdown').parentElement.id;
		return window.dropdowns[ id ];
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
		window.dropdowns[ this.options.id ] = this;

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
		this.elem.addEventListener('mousedown', function ()
		{
			event.stopPropagation();
			
			if (self.isVisible)
				self.hide();
			else
				self.show();
		});

	};

	this.clicked = function (elem) {
		event.stopPropagation();
		this.hide();

		var newval = elem.innerHTML;
		this.value.innerHTML = newval;

		if (this.options.cb)
			this.options.cb(newval);
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
		data: [
			'1 hour',
			'2 hours',
			'3 hours',
			'4 hours',
			'5 hours',
			'6 hours',
			'7 hours',
			'8 hours',
			'9 hours',
			'10 hours',
			'11 hours',
			'12 hours',
			'13 hours',
			'14 hours',
			'15 hours',
			'16 hours',
			'17 hours',
			'18 hours',
			'19 hours',
			'20 hours',
			'21 hours',
			'22 hours',
			'23 hours',
			'24 hours',
		],
		cb: function (newval) {
			alert(newval);
		}
	});

var dd2 = new Dropdown(
	{
		id: 'dd2',
		val: 'custom 2:',
		data: [
			'1 hour',
			'2 hours',
			'3 hours',
			'4 hours',
			'5 hours',
			'6 hours',
			'7 hours',
			'8 hours',
			'9 hours',
			'10 hours',
			'11 hours',
			'12 hours',
			'13 hours',
			'14 hours',
			'15 hours',
			'16 hours',
			'17 hours',
			'18 hours',
			'19 hours',
			'20 hours',
			'21 hours',
			'22 hours',
			'23 hours',
			'24 hours',
		],
		cb: function (newval) {
			alert(newval);
		}
	});

// [ Array.from(new Array(24), (n, index) => index + 1).map(String) ] 
// console.log(dd1);