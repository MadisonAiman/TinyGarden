export function renderCrops(region, month, regionData) {
    const cropList = document.getElementById('crops');
    cropList.innerHTML = ''; // Clear previous list
  
    if (!region || !month) {
      cropList.innerHTML = '<li>Please select both a region and a month.</li>';
      return;
    }
  
    const monthData = regionData[region]?.[month];
  
    if (!monthData || !monthData.crops || monthData.crops.length === 0) {
      cropList.innerHTML = '<li>No crop data available for this selection.</li>';
      return;
    }
  
    monthData.crops.forEach(crop => {
      const li = document.createElement('li');
      li.textContent = crop;
      cropList.appendChild(li);
    });
  }
  
  

  export function renderCompanions(plantName, data) {
    const container = document.getElementById('companion-results');
    container.innerHTML = ''; // Clear previous results
    
  
    const normalized = plantName.toLowerCase();
    const plantEntry = Object.keys(data).find(key => key.toLowerCase() === normalized);
  
    if (!plantEntry) {
      container.innerHTML = `<p>No companion data available for <strong>${plantName}</strong>.</p>`;
      return;
    }
  
    const { companions, avoid } = data[plantEntry];
  
    const compList = document.createElement('ul');
    companions.forEach(ally => {
      const li = document.createElement('li');
      li.innerHTML = `✅ <strong>${ally}</strong>`;
      li.classList.add('fade-in');
      setTimeout(() => li.classList.add('show'), 10);
      compList.appendChild(li);
    });
  
    const avoidList = document.createElement('ul');
    avoid.forEach(enemy => {
      const li = document.createElement('li');
      li.innerHTML = `🚫 <strong>${enemy}</strong>`;
      li.classList.add('fade-in');
      setTimeout(() => li.classList.add('show'), 10);
      avoidList.appendChild(li);
    });
  
    container.innerHTML = `
      <h3>Good Companions for <strong>${plantEntry}</strong>:</h3>
    `;
    container.appendChild(compList);
    container.innerHTML += `<h3>Plants to Avoid Near <strong>${plantEntry}</strong>:</h3>`;
    container.appendChild(avoidList);
  }
  