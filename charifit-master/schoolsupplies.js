function filterTable3() {
  var typeValue = document.getElementById("Type").value;
  var table = document.getElementById("school");
  var rows = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those that don't match the selected type
  for (var i = 1; i < rows.length; i++) { // Start from index 1 to skip the table header row
      var row = rows[i];
      var type = row.getElementsByClassName("Type")[0].innerText;

      // If the selected type is empty or matches the current row's type, display the row, otherwise hide it
      if (typeValue === '' || type === typeValue) {
          row.style.display = "";
      } else {
          row.style.display = "none";
      }
  }
}
