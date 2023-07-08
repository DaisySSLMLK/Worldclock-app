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
