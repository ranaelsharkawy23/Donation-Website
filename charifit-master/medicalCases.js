

function filterTable() {
    var selectedSpecialty = document.getElementById("specialty").value;
    var selectedOrganization = document.getElementById("organization").value;
    var selectedArea = document.getElementById("area").value;
    var selectedGovernate = document.getElementById("governate").value;
    var tableRows = document.querySelectorAll("#medical-cases tbody tr");
  
    for (var i = 0; i < tableRows.length; i++) {
      var specialtyCell = tableRows[i].querySelector(".specialty");
      var organizationCell = tableRows[i].querySelector(".organization");
      var areaCell = tableRows[i].querySelector(".area");
      var governateCell = tableRows[i].querySelector(".governate");
      if ((selectedSpecialty === "" || specialtyCell.textContent === selectedSpecialty)&&(selectedOrganization === "" || organizationCell.textContent === selectedOrganization )&&(selectedArea === "" || areaCell.textContent === selectedArea ) &&(selectedGovernate === "" || governateCell.textContent === selectedGovernate )) {
        tableRows[i].style.display = "";
      } else {
        tableRows[i].style.display = "none";
      }
    }
}
$('.alert').click(function() {
    $(this).fadeOut();
  });


 
function initMaps() {
    var map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 10,
      center: { lat: 30.0444, lng: 31.2357 } 
    });
  
    var marker1 = new google.maps.Marker({
      position: { lat: 30.0444, lng: 31.2357 },
      map: map1,
      title: 'Cairo'
    });
  
    var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 10,
      center: { lat: 31.2001, lng: 29.9187 } 
    });
  
    var marker3 = new google.maps.Marker({
      position: { lat: 31.2001, lng: 29.9187 },
      map: map3,
      title: 'Alexandria'
    });
  
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 10,
      center: { lat: 30.0131, lng: 31.2089 } // Giza coordinates
    });
  
    var marker2 = new google.maps.Marker({
      position: { lat: 30.0131, lng: 31.2089 },
      map: map2,
      title: 'Giza'
    });
  
  }
  window.onload = function() {
    initMaps();
  };

  function showAlert(button) {
    var alertDiv = document.getElementById('alertDiv');
    alertDiv.style.display = 'block';
    setTimeout(function(){
        alertDiv.style.display = 'none';
    }, 3000);

    // Access the parent row of the button and remove it
    var row = button.parentNode.parentNode; // Assuming the button is inside a <td> inside a <tr>
    row.parentNode.removeChild(row);
}



  