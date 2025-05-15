import { fetchRegionData, fetchCompanionData } from './data.js';
import { renderCrops, renderCompanions } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const regionData = await fetchRegionData();
  const companionData = await fetchCompanionData();

  const regionSelect = document.getElementById('region-select');
  const monthSelect = document.getElementById('month');
  const companionForm = document.getElementById('companion-form');
  const plantInput = document.getElementById('plant-input');

  function updateCropList() {
    const region = regionSelect.value;
    const month = monthSelect.value;
    renderCrops(region, month, regionData);
  }

  regionSelect.addEventListener('change', updateCropList);
  monthSelect.addEventListener('change', updateCropList);

  companionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const plant = plantInput.value;
    console.log("Form submitted. Plant:", plant); 
    renderCompanions(plant, companionData);
    console.log("Calling renderCompanions with", plant);

  });
});
