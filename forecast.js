function Forecast(latitude, longitude) {
	this.latitude = latitude;
	this.longitude = longitude;

	this.getMapUrl = function () {
		var baseMapUrl = "https://maps.googleapis.com/maps/api/staticmap?zoom=11&size=200x200&sensor=false&center=";
		return baseMapUrl += latitude + "," + longitude;
	};

	this.getForecastUrl = function () {
		var baseForecastUrl = "https://api.forecast.io/forecast/ef0f0731fe9af407fc39a5c4828300cf/";
		return baseForecastUrl + latitude + "," + longitude + "?callback=?";
	};

	this.getPrecipMessage = function (unixTimestamp, precipProbability) {
		var date = new Date(unixTimestamp * 1000);
		var precipPercentage = precipProbability * 100;
		return date.toLocaleTimeString() + " - " + precipPercentage + "%";
	};
}