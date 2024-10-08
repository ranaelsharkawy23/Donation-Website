function searchOrganization() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("organizationTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


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
      center: { lat: 30.0131, lng: 31.2089 } 
    });
  
    var marker2 = new google.maps.Marker({
      position: { lat: 30.0131, lng: 31.2089 },
      map: map2,
      title: 'Giza'
    });
  
    var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 10,
      center: { lat: 30.0112, lng: 31.0000 } 
    });
  
    var marker4 = new google.maps.Marker({
      position: { lat: 30.0112, lng: 31.0000 },
      map: map4,
      title: 'Sheikh'
    });
  
    var map5 = new google.maps.Map(document.getElementById('map5'), {
      zoom: 10,
      center: { lat: 31.2247, lng: 29.9550 } 
    });
  
    var marker5 = new google.maps.Marker({
      position: { lat: 31.2247, lng: 29.9550 },
      map: map5,
      title: 'Alexan'
    });
  
    
  
    var map6 = new google.maps.Map(document.getElementById('map6'), {
      zoom: 10,
      center: { lat: 30.1137, lng: 31.3432 } 
    });
  
    var marker6 = new google.maps.Marker({
      position: { lat: 30.1137, lng: 31.3432 },
      map: map6,
      title: 'Cai'
    });
  
    
  
  
  }
  
  
  
  window.onload = function() {
    initMaps();
  };