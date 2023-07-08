//function showSelectedColor(event) {
//  if (event.target.value.length > 0) {
//    if (event.target.value === "blue") {
//      alert("💙");
//    }
//    if (event.target.value === "red") {
//      alert("❤️");
//    }
//
//    if (event.target.value === "yellow") {
//      alert("💛");
//    }
//  }
//}

//let colorSelect = document.querySelector("#color");
//colorSelect.addEventListener("change", showSelectedColor);
function showSelectedTimezone(event) {
  if (event.target.value.length > 1) {
    if (event.target.value === "paris") {
      alert("Bonjour");
    }
    if (event.target.value === "sydney") {
      alert("Hello");
    }
    if (event.target.value === "tokyo") {
      alert("Kon'nichiwa");
    }
  }
}
let timezoneSelect = document.querySelector("#country");
timezoneSelect.addEventListener("change", showSelectedTimezone);
