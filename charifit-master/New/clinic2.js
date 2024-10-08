// Function to handle form submission
function submitForm() {
    // Retrieve form data
    const address = document.getElementById('address').value;
    const area = document.getElementById('area').value;
    const governorate = document.getElementById('governorate').value;
    const specialty = document.getElementById('specialty').value;
    const proBonoCases = document.getElementById('proBonoCases').value;
  
    // Validate form data
    if (address && area && governorate && specialty && proBonoCases) {
      // Create an object to store the clinic location details
      const clinicLocation = {
        Address: address,
        Area: area,
        Governorate: governorate,
        Specialty: specialty,
        "Pro-Bono Cases": proBonoCases
      };
  
      // Create a table to display the clinic location details
      const table = document.createElement('table');
      for (const key in clinicLocation) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = key;
        cell2.textContent = clinicLocation[key];
      }
  
      // Display the table
      const tableContainer = document.getElementById('tableContainer');
      tableContainer.innerHTML = ''; // Clear previous table if exists
      tableContainer.appendChild(table);
    } else {
      // Display an error message if any of the fields are empty
      alert('Please fill in all the required fields.');
    }
  }