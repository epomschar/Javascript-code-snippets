var t = new Date(),
	months = ['January','February','March','April','May','June','July','August','September','October','November','December' ],
	month = months[t.getMonth()],
	day = t.getDate(),
	hours = t.getHours(),
	minutes = t.getMinutes();
	
	// when day is a single integer add "0" before it
	if(day <10) {
		day = '0'+day;
	}
	
	document.write(day + " " + month + " at " + hours + ":" + minutes);
	