function searchOrganization() {
    var input, filter, container, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    container = document.getElementById("");
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

  function searchSupplies() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var supplyItems = document.querySelectorAll('.post');

    supplyItems.forEach(function(item) {
      var itemName = item.textContent.toLowerCase();
      if (itemName.includes(searchInput)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }


  function filterSupplies() {
    var filterType = document.getElementById('filterType').value.toLowerCase();
    var supplyItems = document.querySelectorAll('.post');

    supplyItems.forEach(function(item) {
      var itemType = item.getAttribute('data-type').toLowerCase();
      if (filterType === 'all' || itemType === filterType) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
    

  
  




