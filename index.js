// Automatically find all of the dropdowns
var dropdowns = document.getElementsByClassName("dropdown_content");

// Toggles the selected dropdown and hides the rest
function dropdownToggle(drop) {
	var c = drop.parentElement.children[1];
	Array.prototype.forEach.call(dropdowns, function (d){
		if(d === c) {
			d.classList.toggle("show");
		} else {
			d.classList.remove("show");
		}
	});
	
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbutton')) {
		var dropdowns = document.getElementsByClassName("dopdown_content");
		var i;
		for( i=0; i<dropdowns.length; i++) {
			var openDropdown = dropdowns[i]; 
			if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
			}
		}
	}
}
