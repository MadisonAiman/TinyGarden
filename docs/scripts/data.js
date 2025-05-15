
// data.js

// Fetch the planting data by region and month
export async function fetchRegionData() {
    try { // 1. Ask the server (browser local in our case) for the JSON
      const res = await fetch('data/regions.json');
      if (!res.ok) { 
        // 2. If the fetch failed (404, etc), throw an error
        throw new Error(`HTTP error! Status: ${res.status}`);
      } // 3. Parse the JSON into a usable JavaScript object
      const data = await res.json();
      // 4. Send it back to wherever called it (like app.js)
      return data;
    } catch (error) { // 5. If anything failed, log the error and return an empty object
      console.error('Failed to fetch region data:', error);
      return {};
    }
  }
  
  // Fetch the companion planting relationships
export async function fetchCompanionData() {
    try {
      const res = await fetch('data/companions.json');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch companion data:', error);
      return {};
    }
  }
  
