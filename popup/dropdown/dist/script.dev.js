"use strict";

function Dropdown(o) {
  this.options = o;

  window.getdd = function (elem) {
    var id = elem.closest('.dropdown').parentElement.id;
    return window.dropdowns[id];
  };

  this.init = function () {
    this.elem = document.getElementById(this.options.id);
    var val = this.options.val;
    var html = "<div class='dropdown'>\n\t\t\t\t\t\t\t\t\t\t\t<div class='dropdown_value'>".concat(val, "</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class='dropdown_arrow'>&#11151;</div>\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class='dropdown_panel'>\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t<div class='dropdown_items'>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t</div>"); // elements

    this.elem.innerHTML = html;
    var elem = this.elem; // width of hidden parent block to inline block to align

    this.elem.style.display = 'inline-block'; // store each Dropdown as a list

    if (!window.dropdowns) window.dropdowns = {};
    window.dropdowns[this.options.id] = this; //items in html

    this.items = elem.querySelector('.dropdown_items');
    this.arrow = elem.querySelector('.dropdown_arrow');
    this.value = elem.querySelector('.dropdown_value'); // add the items to dropdown in html

    var data = this.options.data;
    html = "";
    data.forEach(function (elem) {
      html += "<div class=\n\t\t\t        'dropdown_item'\n\t\t\t\t\t\t\tonmousedown='var self=getdd(this); self.clicked(this)'>".concat(elem, "</div>");
    });
    this.items.innerHTML = html;
    var self = this;
    document.addEventListener('mousedown', function () {
      self.hide();
    }); // dropdown drop

    this.elem.addEventListener('mousedown', function () {
      event.stopPropagation();
      if (self.isVisible) self.hide();else self.show();
    });
  };

  this.clicked = function (elem) {
    event.stopPropagation();
    this.hide();
    var newval = elem.innerHTML;
    this.value.innerHTML = newval;
  };

  this.show = function () {
    //if using both, close all others on click
    for (var dd in window.dropdowns) {
      window.dropdowns[dd].hide();
    }

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

var dd1 = new Dropdown({
  id: 'dd1',
  val: 'custom:',
  data: new Array(24).fill(0).map(function (_, i) {
    return "".concat(i + 1, " hour").concat(i > 0 ? 's' : '');
  }),
  cb: function cb(newval) {
    alert(newval);
  }
}); // [ Array.from(new Array(24), (n, index) => index + 1).map(String) ] 
// console.log(dd1);
// const hours = new Array(24).fill(0).map((_, i) => `${i + 1} hour${i > 0 ? 's' : ''}`);