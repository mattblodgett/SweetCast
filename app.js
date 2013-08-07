$(function () {
	$("#getForecast").click(function () {
		var latitude = $("#latitude").val();
		var longitude = $("#longitude").val();

		var forecast = new Forecast(latitude, longitude);

		$("#map").attr("src", forecast.getMapUrl());
		
		$.getJSON(forecast.getForecastUrl(), function (forecastData) {
			var today = forecastData.daily.data[0];
			
			var summary = today.summary;
			var maxTemp = Math.floor(today.temperatureMax);
			var minTemp = Math.floor(today.temperatureMin);
			
			$(".today .summary").text(summary);
			$(".today .high").text(maxTemp);
			$(".today .low").text(minTemp);
			
			var hour = forecastData.minutely.data;
			$(".minutely").html("");
			$.each(hour.slice(1), function (index, value) {
				var $minuteItem = $("<li>");
				$minuteItem.text(forecast.getPrecipMessage(value.time, value.precipProbability));
				$(".minutely").append($minuteItem);
			});

			$("#content").show();
		});
	});
});