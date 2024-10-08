function filterTable2() {
    var selectedage = document.getElementById("age").value;
    var selectedgender = document.getElementById("gender").value;
    var selectedseason = document.getElementById("season").value;
    var tableRows = document.querySelectorAll("#clothes tbody tr ");
  
    for (var i = 0; i < tableRows.length; i++) {
      var ageCell = tableRows[i].querySelector(".age");
      var genderCell = tableRows[i].querySelector(".gender");
      var seasonCell = tableRows[i].querySelector(".season");
      if ((selectedage === "" || ageCell.textContent === selectedage)&&(selectedgender === "" || genderCell.textContent === selectedgender ) &&(selectedseason === "" || seasonCell.textContent === selectedseason )) {
        tableRows[i].style.display = "";
      } else {
        tableRows[i].style.display = "none";
      }
    }
  }
  
  
   
