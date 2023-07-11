function updateCurrent() {
  let currentElement = document.querySelector("#current");
  if (currentElement) {
    let currentCityElement = currentElement.querySelector(".city");
    let currentDateElement = currentElement.querySelector(".cdate");
    let currentTimeElement = currentElement.querySelector(".ctime");
    let currentTimezone = moment.tz.guess();
    let currentTime = moment().tz(currentTimezone);

    currentCityElement.innerHTML = currentTimezone
      .replace("_", " ")
      .split("/")[1];
    currentDateElement.innerHTML = currentTime.format("DD MMMM YYYY");
    currentTimeElement.innerHTML = currentTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `
  <div class="city">
    <h2>${cityName}</h2>
      <div class="date">${cityTime.format("DD MMMM YYYY")}</div>
      <div class="time">${cityTime.format("HH:mm:ss")}</div>
      </div>
     `;
}

updateCurrent();
setInterval(updateCurrent, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
