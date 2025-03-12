$(document).ready(function() {
  const apiKey = '1bf70cfcd7497f3ad13d81577b6fd168'; // Replace this with your OpenWeatherMap API key

  // Function to fetch weather data
  function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    $.get(apiUrl, function(data) {
      if (data.cod === "404") {
        alert("City not found!");
      } else {
        // Show weather details
        $('#cityName').text(`${data.name}, ${data.sys.country}`);
        $('#temperature').text(`Temperature: ${data.main.temp}°C`);
        $('#description').text(`Description: ${data.weather[0].description}`);
        $('#humidity').text(`Humidity: ${data.main.humidity}%`);
        $('#windSpeed').text(`Wind Speed: ${data.wind.speed} m/s`);

        $('#weatherDetails').show();
      }
    }).fail(function() {
      alert('Error fetching weather data.');
    });
  }

  // Event listener for the search button
  $('#searchBtn').on('click', function() {
    const city = $('#city').val();
    if (city !== '') {
      getWeather(city);
    } else {
      alert('Please enter a city!');
    }
  });

  // Optional: Trigger search on pressing 'Enter' key
  $('#city').on('keypress', function(e) {
    if (e.which === 13) {
      $('#searchBtn').click();
    }
  });
});
