function convertTemp (num, d) {
	d = d.toUpperCase();
	if (d === "C") {
		var c = Math.round((num-32)* 5/9);
		console.log(num + " degrees in Farenheit is " + c + " in Celsius");
	} else if (d === "F") {
		var f = Math.round(num*9/5+32);
		console.log(num + " degrees in Celsius is " + f + " in Farenheit");
	} else {
		console.log("This is not an acceptable conversion. Please select C or F");
	}
}

convertTemp(212, "c");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");