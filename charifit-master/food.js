function filterTable2() {
    var selectedType = document.getElementById("age").value;
    var tableRows = document.querySelectorAll("#clothes tbody tr");
  
    for (var i = 0; i < tableRows.length; i++) {
        var typeCell = tableRows[i].querySelector(".Type");
        
        if (selectedType === "" || typeCell.textContent === selectedType) {
            tableRows[i].style.display = "";
        } else {
            tableRows[i].style.display = "none";
        }
    }
}
