function filterTable2() {
    var ageValue = document.getElementById("age").value;
    var genderValue = document.getElementById("gender").value;
    var categoryValue = document.getElementById("Category").value.trim().toLowerCase();
    var table = document.getElementById("clothes");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var age = row.getElementsByClassName("age")[0].innerText.toLowerCase();
        var gender = row.getElementsByClassName("gender")[0].innerText.toLowerCase();
        var category = row.getElementsByClassName("Category")[0].innerText.trim().toLowerCase();

        if ((ageValue === '' || age === ageValue) &&
            (genderValue === '' || gender === genderValue) &&
            (categoryValue === '' || category === categoryValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}
