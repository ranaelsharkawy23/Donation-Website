// orghomepage.js

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the create post button
    document.getElementById("createPostBtn").addEventListener("click", function() {
        console.log("Button clicked!"); // Debugging message
        var category = document.getElementById("categorySelect").value;
        console.log("Selected category:", category); // Debugging message
        var details = {};

        // Show/hide input fields based on category
        showHideInputs(category);

        // Function to show/hide input fields based on category
        function showHideInputs(category) {
            // Hide all input fields
            var allInputs = document.querySelectorAll(".details-input");
            allInputs.forEach(function(input) {
                input.style.display = "none";
            });

            // Show input fields based on category
            switch (category) {
                case "clothes":
                    document.getElementById("clothesDetails").style.display = "block";
                    break;
                case "toys":
                    document.getElementById("toysDetails").style.display = "block";
                    break;
                case "food":
                    document.getElementById("foodDetails").style.display = "block";
                    break;
                case "medical":
                    document.getElementById("medicalDetails").style.display = "block";
                    break;
                case "school":
                    document.getElementById("schoolDetails").style.display = "block";
                    break;
                case "blood":
                    document.getElementById("bloodDetails").style.display = "block";
                    break;
                default:
                    break;
            }
        }

        // Check if details object is empty
        if (!validateDetails(category)) {
            alert("Please fill in donation details.");
            return; // Exit function
        }

        createPost(category, details);
        showNotification(); // Display notification
        resetForm(); // Reset form to initial state
    });
});

// Function to validate input fields based on category
function validateDetails(category) {
    switch (category) {
        case "clothes":
            return document.getElementById("clothesSize").value !== "" && document.getElementById("clothesGender").value !== "";
        case "toys":
            return document.getElementById("toysAgeRange").value !== "";
        case "food":
            return document.getElementById("foodExpiryDate").value !== "";
        case "medical":
            return document.getElementById("medicalCondition").value !== "";
        case "school":
            return document.getElementById("schoolGrade").value !== "";
        case "blood":
            return document.getElementById("bloodType").value !== "";
        default:
            return false;
    }
}

// Function to create post (you can replace this with your actual implementation)
function createPost(category, details) {
    console.log("Creating post for category:", category);
    console.log("Details:", details);
    // Replace this with your actual logic to create the post
}

// Function to display notification
function showNotification() {
    alert("Post created successfully!");
}

// Function to reset the form to initial state
function resetForm() {
    document.getElementById("categorySelect").selectedIndex = 0; // Reset category select
    var allInputs = document.querySelectorAll(".details-input"); // Reset input fields
    allInputs.forEach(function(input) {
        input.value = "";
    });

    // Hide all details bars
    var allDetailsBars = document.querySelectorAll(".details-input");
    allDetailsBars.forEach(function(bar) {
        bar.style.display = "none";
    });
}
