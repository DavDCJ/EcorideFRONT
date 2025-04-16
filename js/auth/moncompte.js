const roleSelect = document.getElementById("role");
const vehicleSection = document.getElementById("vehicleSection");

roleSelect.addEventListener("change", function () {
const selected = roleSelect.value;
if (selected === "chauffeur" || selected === "les-deux") {
vehicleSection.classList.remove("d-none");
} else {
vehicleSection.classList.add("d-none");
}
});