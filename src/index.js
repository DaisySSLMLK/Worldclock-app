function showSelectedTimezone(event) {
  if (event.target.value.length > 1) {
    if (event.target.value === "paris") {
      alert(`It is currently ${parisTime} in Europe/Paris`);
    }
    if (event.target.value === "sydney") {
      alert(`It is currently ${sydneyTime} in Australia/Sydney`);
    }
    if (event.target.value === "tokyo") {
      alert(`It is currently ${tokyoTime} in Asia/Tokyo`);
    }
  }
}
let timezoneSelect = document.querySelector("#country");
timezoneSelect.addEventListener("change", showSelectedTimezone);

let parisTime = moment().tz("Europe/Paris").format("dddd, MMMM D, YYYY HH:mm");
let sydneyTime = moment()
  .tz("Australia/Sydney")
  .format("dddd, MMMM D, YYYY HH:mm");
let tokyoTime = moment().tz("Asia/Tokyo").format("dddd, MMMM D, YYYY HH:mm");
