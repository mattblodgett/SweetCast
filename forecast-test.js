test("constructor", function () {
	var forecast = new Forecast(42, 3.14)

	equal(forecast.latitude, 42, "Latitude instance variable set!");
	equal(forecast.longitude, 3.14, "longitude instance variable set!");
});

test("getMapUrl", function () {
	var forecast = new Forecast(-12.34, 99.234);

	equal(forecast.getMapUrl(),
		"https://maps.googleapis.com/maps/api/staticmap?zoom=11&size=200x200&sensor=false&center=-12.34,99.234");
});

test("getForecastUrl", function () {
	var forecast = new Forecast(89.9122, -3.097);

	equal(forecast.getForecastUrl(),
		"https://api.forecast.io/forecast/ef0f0731fe9af407fc39a5c4828300cf/89.9122,-3.097?callback=?");
});

test("getPrecipMessage", function () {
	var forecast = new Forecast(-21, -91.99);
	var unixTimestamp = 1375819962;
	var precipProbability = 0.3;

	equal(forecast.getPrecipMessage(unixTimestamp, precipProbability), "4:12:42 PM - 30%");
});