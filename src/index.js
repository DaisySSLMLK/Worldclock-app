function showSelectedTimezone(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY HH:mm");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}
let timezoneSelect = document.querySelector("#country");
timezoneSelect.addEventListener("change", showSelectedTimezone);

function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("d MMMM YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("d MMMM YYYY");
  londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");

  //Auckland
  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("d MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
