
/*function checkTransportation(timeSlot) {
  var truckCheckbox = document.getElementById('truckCheckbox');
  var carCheckbox = document.getElementById('carCheckbox');
  var motorcycleCheckbox = document.getElementById('motorcycleCheckbox');

  var chosenCount = 0;

  if (truckCheckbox.checked) {
      chosenCount++;
  }
  if (carCheckbox.checked) {
      chosenCount++;
  }
  if (motorcycleCheckbox.checked) {
      chosenCount++;
  }

  if (chosenCount === 1) {
      var chosenTransport = truckCheckbox.checked ? 'Truck' : (carCheckbox.checked ? 'Car' : 'Motorcycle');
      alert('Chosen Method of Transportation: ' + chosenTransport + '\nChosen Time Slot: ' + timeSlot);
  } else if (chosenCount > 1) {
      alert('Please Choose Only One Method of Transportation.');
  } else {
      alert('Please Choose a Method of Transportation.');
  }
}*/

let chosenTransportation = '';
let chosenTimeSlot = '';

function displayTransportation(transportation) {
    chosenTransportation = transportation;
}

function chooseTimeSlot(timeSlot) {
    if (chosenTransportation === '') {
        displayAlert("Please select a method of transportation first.", true);
    } else if (chosenTransportation.includes(',')) {
        displayAlert("Please select only one method of transportation.", true);
    } else {
        chosenTimeSlot = timeSlot;
        displayResult();
    }
}

function displayResult() {
    const message = "Success! Thank you for your Donation! Your chosen method of transportation is a " + chosenTransportation + " and your chosen time slot is " + chosenTimeSlot;
    displayAlert(message);
    setTimeout(function() {
        window.location.href = "ETA.html";
    }, 7000);
}

function displayAlert(message, isError = false) {
    const alertDiv = document.getElementById("alertDiv");
    alertDiv.innerHTML = message;
    alertDiv.className = isError ? "alert alert-danger mt-3" : "alert alert-success mt-3";
    alertDiv.style.display = "block";
}