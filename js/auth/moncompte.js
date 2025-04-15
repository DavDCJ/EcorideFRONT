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

document.addEventListener("DOMContentLoaded", function () {
    const addVehicleBtn = document.getElementById("addVehicleBtn");
    const vehiclesContainer = document.getElementById("vehicleSection");
    
    let vehicleCount = 1;
    
    addVehicleBtn.addEventListener("click", () => {
    vehicleCount++;
    
    const newBlock = document.createElement("div");
    newBlock.className = "vehicle-block border rounded p-3 mb-3";
    newBlock.innerHTML = `
    <h6 class="mb-3">Véhicule ${vehicleCount}</h6>

<div class="col-md-6 mb-3">
<label class="form-label">Plaque d'immatriculation</label>
<input type="text" class="form-control" name="plaque[]">
</div>

<div class="col-md-6 mb-3">
<label class="form-label">Date de première immatriculation</label>
<input type="date" class="form-control" name="dateImmat[]">
</div>

<div class="row">
<div class="col-md-3 mb-3">
<label class="form-label">Marque</label>
<input type="text" class="form-control" name="marque[]">
</div>
<div class="col-md-3 mb-3">
<label class="form-label">Modèle</label>
<input type="text" class="form-control" name="modele[]">
</div>
<div class="col-md-3 mb-3">
<label class="form-label">Couleur</label>
<input type="text" class="form-control" name="couleur[]">
</div>
<div class="col-md-3 mb-3">
<label class="form-label">Places dispo</label>
<input type="number" class="form-control" name="places[]" min="1" max="8">
</div>
</div>

<div class="mb-3">
<label class="form-label">Préférences :</label>
<div class="form-check">
<input class="form-check-input" type="checkbox" name="fumeurs[]">
<label class="form-check-label">J'accepte les fumeurs</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" name="animaux[]">
<label class="form-check-label">J'accepte les animaux</label>
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label">Autres préférences</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
`;

vehiclesContainer.appendChild(newBlock);
});
});