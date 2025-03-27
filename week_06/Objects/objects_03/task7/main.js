/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

const weatherApp = {
  apiKey: "b20b760d9d5e2f29a75a8fe6b8ad54c9",
  /**
  
   * @param {string} city - The name of the city to get weather for
   */
  fetchWeather: async function (city) {
    try {
      const weatherDisplay = document.getElementById("weather-display");

      weatherDisplay.innerHTML = "<p>Loading weather data...</p>";

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`City not found or API error: ${response.statusText}`);
      }

      const data = await response.json();

      this.displayWeather(data, weatherDisplay);
    } catch (error) {
      document.getElementById(
        "weather-display"
      ).innerHTML = `<p class="error">Error: ${error.message}</p>`;
      console.error("Weather fetch error:", error);
    }
  },

  /**
   * @param {Object} data - The weather data from the API
   * @param {HTMLElement} element - The element to display the weather in
   */
  displayWeather: function (data, element) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    element.innerHTML = `
        <h2>${name}</h2>
        <div class="weather-info">
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
          <h3>${temp.toFixed(1)}°C</h3>
          <p>${description}</p>
        </div>
        <div class="weather-details">
          <p>Humidity: ${humidity}%</p>
          <p>Wind Speed: ${speed} m/s</p>
        </div>
      `;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("weather-form");

  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const cityInput = document.getElementById("city-input");
      const city = cityInput.value.trim();

      if (city) {
        weatherApp.fetchWeather(city);
      }
    });
  }
});
