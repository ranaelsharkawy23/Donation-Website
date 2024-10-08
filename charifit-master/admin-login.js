
document.getElementById("loginBtn").addEventListener("click", function() {
    var enteredUsername = document.getElementById("username").value;
    var enteredPassword = document.getElementById("password").value;

    var correctUsername1 = "admin";
    var correctPassword1 = "1234";
    var correctUsername2 = "donor";
    var correctPassword2 = "1234";
    var correctUsername3 = "organization";
    var correctPassword3 = "1234";

    if (enteredUsername === correctUsername1 && enteredPassword === correctPassword1) {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("adminContent").style.display = "block";  
                document.getElementById("settingsBtn").style.display = "inline-block"; // Show settings button

    }
    else if(enteredUsername === correctUsername2 && enteredPassword === correctPassword2){
        window.location.href="donor2.html"

    }
    else if(enteredUsername === correctUsername3 && enteredPassword === correctPassword3){
        window.location.href="orghomepage2.html"

    }

    else {
        alert("Invalid username or password. Please try again.");
    }
});
var isorgListDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgb").addEventListener("click", function() {
        if (!isorgListDisplayed) {
            var organizations = [
                { name: "Tabaro3"},
                { name: "Hayat" },
                { name: "Enkez"},
                { name: "Tabaro3at"},
                { name: "Mosta2bal"},
                { name: "Yamin"},
                { name: "Yamal"},
                { name: "Bokra"}
            ];

            displayOrganizationsList(organizations);
            isorgListDisplayed = true;
        }
    });
});

var organizationsData = [
    { 
        name: "Tabaro3",
        organizationType: "Charity Foundation", 
        organizationAddress: "123 Smouha",
        area: "Smouha",
        governorate: "Alexandria",
        description: "Description of Tabaro3 organization.",
        email: "blabla@gmail.com"

    },
    { 
        name: "Hayat",
        organizationType: "Charity Foundation", 
        organizationAddress: "456 Hayat",
        area: "ABC",
        governorate: "Cairo",
        description: "Description of Hayat organization."
    },
    { 
        name: "Enkez",
        organizationType: "Charity Foundation", 
        organizationAddress: "789 Enkez",
        area: "DFC",
        governorate: "Giza",
        description: "Description of Enkez organization."
    },
    { 
        name: "Tabaro3at",
        organizationType: "Charity Foundation", 
        organizationAddress: "1011 Tabaro3at",
        area: "LKJ",
        governorate: "Alexandria",
        description: "Description of Tabaro3at organization."
    },
    { 
        name: "Mosta2bal",
        organizationType: "Charity Foundation", 
        organizationAddress: "1213 Mosta2bal",
        area: "YTR",
        governorate: "Giza",
        description: "Description of Mosta2bal organization."
    },
    { 
        name: "Yamin",
        organizationType: "Charity Foundation", 
        organizationAddress: "1415 Yamin",
        area: "KKJ" ,
        governorate: "Cairo",
        description: "Description of Yamin organization."
    },
    { 
        name: "Yamal",
        organizationType: "Charity Foundation", 
        organizationAddress: "1617 Yamal",
        area: "HJF",
        governorate: "Alexandria",
        description: "Description of Yamal organization."
    },
    { 
        name: "Bokra",
        organizationType: "Charity Foundation", 
        organizationAddress: "1819 Bokra",
        area: "ASD",
        governorate: "Giza",
        description: "Description of Bokra organization."
    }
];


function filterOrganizations() {
    var areaFilter = document.getElementById("areaFilter").value.toLowerCase();
    var governorateFilter = document.getElementById("governorateFilter").value.toLowerCase();
    var orgTypeFilter = document.getElementById("orgTypeFilter").value.toLowerCase();

    var filteredOrganizations = organizationsData.filter(function(org) {
        return (areaFilter === "" || org.area.toLowerCase() === areaFilter) &&
               (governorateFilter === "" || org.governorate.toLowerCase() === governorateFilter) &&
               (orgTypeFilter === "" || org.organizationType.toLowerCase() === orgTypeFilter);
    });

    displayOrganizationsList(filteredOrganizations);
}

function displayFilteredOrganizations() {
    filterOrganizations();
    isorgListDisplayed = true;
}

document.getElementById("areaFilter").addEventListener("change", displayFilteredOrganizations);
document.getElementById("governorateFilter").addEventListener("change", displayFilteredOrganizations);
document.getElementById("orgTypeFilter").addEventListener("change", displayFilteredOrganizations);

function displayOrganizationDetails(organization) {
    alert(`Organization Name: ${organization.name}\nOrganization Type: ${organization.organizationType}\nAddress: ${organization.organizationAddress}\nArea: ${organization.area}\nGovernorate: ${organization.governorate}`);
}

function displaydonorsList(donors) {
    var donorsListElement = document.getElementById("donorsList");

    donorsListElement.innerHTML = ""; 

    donors.forEach(function(donor) {
        var listItem = document.createElement("div");
        listItem.innerHTML = "<strong>" + donor.name + "</strong>";
        donorsListElement.appendChild(listItem);
    });
}

var isdonrevDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("donsRevb").addEventListener("click", function() {

        if (!isdonrevDisplayed) {
            var donsRevs =[{ 
                firstName: "Dr.Omar",
                lastName: "Farhoud",
                gender: "Male",
                email: "farhoud@example.com",
                contactNumber: "123456789",
                address: "123 edmon, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Dr certificate",
                description: "I am a dentist and can provide 2 sessions a week for free paients."
            },
            { 
                firstName: "Dr.Karim",
                lastName: "Mina",
                gender: "Female",
                email: "mina@example.com",
                contactNumber: "987654321",
                address: "456 telr, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Dr certificate",
                description: "I am a Neurologist and can provide 1 session a month for free."
            },{ 
                firstName: "Dr.Mohamed",
                lastName: "Bishbishy",
                gender: "Male",
                email: "Bishbishy@gmail.com",
                contactNumber: "123456789",
                address: "123 edmon, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Dr certificate",
                description: "I am a Psychiatrist and can provide 2 sessions a month for free"
            },
            { 
                firstName: "Mrs.Nadeen",
                lastName: "Hassan",
                gender: "Female",
                email: "Nadeen@example.com",
                contactNumber: "987654321",
                address: "456 fol, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Teacher certificate",
                description: " I am a Science teacher and can provide 1 class a week for free  "
                        },{ 
                firstName: "Mrs.Rana",
                lastName: "Elsharkawy",
                gender: "Female",
                email: "rana@gmail.com",
                contactNumber: "123456789",
                address: "123 rene, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Teacher certificate",
                description: " I am a Math teacher and can provide 2 classes a week for free  "            },
            { 
                firstName: "Mrs.Jana",
                lastName: "Azmy",
                gender: "Female",
                email: "Jana@example.com",
                contactNumber: "987654321",
                address: "456 Alf, Alexandria",
                area: "Smouha",
                governorate: "Smouha",
                uploadedfiles:"Teacher certificate",
                description: " I am an Italian teacher and can provide 1 class a week for free  "            },
        ];
    
            displayDonsRev(donsRevs);
            isdonrevDisplayed = true;

            var downloadLink = document.createElement("a");
            downloadLink.href = "data:text/plain;charset=utf-8,";
            downloadLink.download = "Donors information.txt";
            downloadLink.click();
        }
    });
});

function displayDonsRev(donsRevs) {
    var donsRevElement = document.getElementById("donsRev");

    donsRevElement.innerHTML = "";

    donsRevs.forEach(function(donsRev) {
        var listItem = document.createElement("div");
        listItem.innerHTML = "<strong>Name:</strong> " + donsRev.firstName + " " + donsRev.lastName + "<br>" +
        "<strong>Gender:</strong> " + donsRev.gender + "<br>" +
        "<strong>Email:</strong> " + donsRev.email + "<br>" +
        "<strong>Contact Number:</strong> " + donsRev.contactNumber + "<br>" +
        "<strong>Address:</strong> " + donsRev.address + "<br>" +
        "<strong>Area:</strong> " + donsRev.area + "<br>" +
        "<strong>Governorate:</strong> " + donsRev.governorate + "<br>" +
        "<strong>uploaded files:</strong> " + donsRev.uploadedfiles + "<br>" +
        "<strong>Description:</strong> " + donsRev.description;
        
        var acceptButton = document.createElement("button");
        acceptButton.textContent = "Accept";
        acceptButton.classList.add("accept");
        acceptButton.addEventListener("click", function() {
            alert("Donor " + donsRev.firstName + " " + donsRev.lastName + " accepted!");
            donors.push(donsRev); 
            donsRevElement.removeChild(listItem); 
            displayDonorsList(donors); 
        });
        
        var rejectButton = document.createElement("button");
        rejectButton.textContent = "Reject";
        rejectButton.classList.add("reject");
        rejectButton.addEventListener("click", function() {
            alert("Donor " + donsRev.firstName + " " + donsRev.lastName + " rejected!");
            donsRevElement.removeChild(listItem);

        });

        listItem.appendChild(acceptButton);
        listItem.appendChild(rejectButton);
        donsRevElement.appendChild(listItem);
    });
}
var isorgrevDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgsubsb").addEventListener("click", function() {

        if (!isorgrevDisplayed) {
            var orgRevs = [
                { 
                    name: "Resala", 
                    organizationType: "Charity Foundation", 
                    organizationAddress: "123 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Charity foundation certificate",
                    description:"We are a charity foundation we would like to help with food for free"
                },
                { 
                    name: "Kheir",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "456  Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Charity foundation certificate",
                    description:"We are a charity foundation we would like to help with clothes for free"
                },
                { 
                    name: "Le3b",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "789 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Charity foundation certificate",
                    description:"We are a charity foundation we would like to help with toys for free"
                },
                { 
                    name: "Help",
                    organizationType: "Hospital", 
                    organizationAddress: "1011 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:" Hospital certificate",
                    description:"We are a hospital we would like to help with free medicines and treatment"
                },
                { 
                    name: "3alemny",
                    organizationType: "School ", 
                    organizationAddress: "1213 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"School  certificate",
                    description:"We are a School we would like to help with schools materials for free and teaching lessons"
                },
                { 
                    name: "Masged",
                    organizationType: "Mosque ", 
                    organizationAddress: "1415 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Proof of existance certificate",
                    description:"We are a Mosque we would like to help with religion teachhings"
                },
                { 
                    name: "HG",
                    organizationType: "Hospital ", 
                    organizationAddress: "1617 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Hospital  certificate",
                    description:"We are a  Hospital we would like to help with surgeries for free"
                },
                { 
                    name: "Bank Fos7a",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1819 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    filesuploaded:"Charity foundation certificate",
                    description:"We are a charity foundation we would like to help with rides for free"
                }
            ];
    
            displayOrgsRev(orgRevs);
            isorgrevDisplayed = true;
            var downloadLink = document.createElement("a");
            downloadLink.href = "data:text/plain;charset=utf-8,";
            downloadLink.download = "Organization information.txt";
            downloadLink.click();
        }
    });
});


function displayOrgsRev(orgRevs) {
    var orgRevsElement = document.getElementById("organizationsRev");

    orgRevsElement.innerHTML = "";

    orgRevs.forEach(function(orgRev) {
        var listItem = document.createElement("div");
        listItem.innerHTML = `
            <strong>Name:</strong> ${orgRev.name}<br>
            <strong>Organization Type:</strong> ${orgRev.organizationType}<br>
            <strong>Address:</strong> ${orgRev.organizationAddress}<br>
            <strong>Area:</strong> ${orgRev.area}<br>
            <strong>Governorate:</strong> ${orgRev.governorate}<br>
            <strong>Files uploaded:</strong> ${orgRev.filesuploaded}<br>
            <strong>Description:</strong> ${orgRev.description}

        `;
        
        var acceptButton = document.createElement("button");
        acceptButton.textContent = "Accept";
        acceptButton.classList.add("accept");
        acceptButton.addEventListener("click", function() {
            alert("Organization " + orgRev.name + " accepted!");
            organizationsData.push(orgRev);
            // Redisplay the filtered list
            displayFilteredOrganizations();
            // Remove the organization from the review list
            orgRevsElement.removeChild(listItem);
        });
        
        var rejectButton = document.createElement("button");
        rejectButton.textContent = "Reject";
        rejectButton.classList.add("reject");
        rejectButton.addEventListener("click", function() {
            alert("Organization " + orgRev.name + " rejected!");
            orgRevsElement.removeChild(listItem);

        });

        listItem.appendChild(acceptButton);
        listItem.appendChild(rejectButton);
        orgRevsElement.appendChild(listItem);
    });
}



function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgb").addEventListener("click", function() {
        toggleVisibility("organizationsList");
    });

    document.getElementById("vieworgsubsb").addEventListener("click", function() {
        toggleVisibility("organizationsRev");
    });

    document.getElementById("viewdonb").addEventListener("click", function() {
        toggleVisibility("donorsList");
    });

    document.getElementById("donsRevb").addEventListener("click", function() {
        toggleVisibility("donsRev");
    });
});

var modal = document.getElementById("changePasswordModal");

var settingsBtn = document.getElementById("settingsBtn");

var closeBtn = document.getElementsByClassName("close")[0];

settingsBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("changePasswordModal");
var settingsBtn = document.getElementById("settingsBtn");
var changePasswordBtn = document.getElementById("changePasswordBtn");

var closeBtn = document.getElementsByClassName("close")[0];

function toggleChangePassword() {
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

settingsBtn.onclick = function() {
    toggleChangePassword();
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

changePasswordBtn.addEventListener("click", function() {
    var newPassword = document.getElementById("newPassword").value;
    correctPassword = newPassword;
    alert("Password changed successfully!");
    modal.style.display = "none";
});

modal.style.display = "none";

var isorgListDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgb").addEventListener("click", function() {
        if (!isorgListDisplayed) {
            var organizations = [
                { 
                    name: "Tabaro3",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "123 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    description: "Description of Tabaro3 organization."
                },
            ];

            displayOrganizationsList(organizations);
            isorgListDisplayed = true;
        }
    });
});


var isorgListDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgb").addEventListener("click", function() {
        if (!isorgListDisplayed) {
            var organizations = [
                { 
                    name: "Tabaro3",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "123 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    description: "Description of Tabaro3 organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Hayat",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "456 Hayat",
                    area: "Hayat",
                    governorate: "Hayat",
                    description: "Description of Hayat organization."
                },
                { 
                    name: "Enkez",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "789 Enkez",
                    area: "Enkez",
                    governorate: "Enkez",
                    description: "Description of Enkez organization."
                },
                { 
                    name: "Tabaro3at",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1011 Tabaro3at",
                    area: "Tabaro3at",
                    governorate: "Tabaro3at",
                    description: "Description of Tabaro3at organization."
                },
                { 
                    name: "Mosta2bal",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1213 Mosta2bal",
                    area: "Mosta2bal",
                    governorate: "Mosta2bal",
                    description: "Description of Mosta2bal organization."
                },
                { 
                    name: "Yamin",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1415 Yamin",
                    area: "Yamin",
                    governorate: "Yamin",
                    description: "Description of Yamin organization."
                },
                { 
                    name: "Yamal",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1617 Yamal",
                    area: "Yamal",
                    governorate: "Yamal",
                    description: "Description of Yamal organization."
                },
                { 
                    name: "Bokra",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1819 Bokra",
                    area: "Bokra",
                    governorate: "Bokra",
                    description: "Description of Bokra organization."
                }
            ];

            displayOrganizationsList(organizations);
            isorgListDisplayed = true;
        }
    });
});

function deleteDonor(donor) {
    var confirmDelete = confirm("Are you sure you want to delete " + donor.firstName + " " + donor.lastName + "?");
    if (confirmDelete) {
        // Remove donor from the donors array
        donors = donors.filter(function(existingDonor) {
            return existingDonor.firstName !== donor.firstName || existingDonor.lastName !== donor.lastName;
        });

        // Re-display donors list
        displayDonorsList(donors);
        
        alert("Donor " + donor.firstName + " " + donor.lastName + " deleted successfully!");
    }
}

function deleteOrganization(organization) {
    var confirmDelete = confirm("Are you sure you want to delete " + organization.name + "?");
    if (confirmDelete) {
        // Remove organization from the organizationsData array
        organizationsData = organizationsData.filter(function(org) {
            return org.name !== organization.name;
        });

        // Re-display organizations list
        filterOrganizations();
        alert("Organization " + organization.name + " deleted successfully!");
    }
}
function displayOrganizationsList(organizations) {
    var organizationsListElement = document.getElementById("organizationsList");

    organizationsListElement.innerHTML = "";

    organizations.forEach(function(organization) {
        var listItem = document.createElement("div");
        listItem.innerHTML = "<strong>" + organization.name + "</strong>";

        var buttonsContainer = document.createElement("div");

        var detailsButton = document.createElement("button");
        detailsButton.textContent = "View Details";
        detailsButton.classList.add("details");
        detailsButton.addEventListener("click", function() {
            displayOrganizationDetails(organization);
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            deleteOrganization(organization);
        });

        buttonsContainer.appendChild(detailsButton);
        buttonsContainer.appendChild(deleteButton);

        listItem.appendChild(buttonsContainer);
        
        organizationsListElement.appendChild(listItem);
        deleteButton.addEventListener("click", function() {
            deleteOrganization(organization);
        });
        
    });
}




function filterOrganizations() {
    var areaFilter = document.getElementById("areaFilter").value.toLowerCase();
    var governorateFilter = document.getElementById("governorateFilter").value.toLowerCase();
    var orgTypeFilter = document.getElementById("orgTypeFilter").value.toLowerCase();

    var filteredOrganizations = organizationsData.filter(function(org) {
        return (areaFilter === "" || org.area.toLowerCase() === areaFilter) &&
               (governorateFilter === "" || org.governorate.toLowerCase() === governorateFilter) &&
               (orgTypeFilter === "" || org.organizationType.toLowerCase() === orgTypeFilter);
    });

    displayOrganizationsList(filteredOrganizations);
}

document.getElementById("areaFilter").addEventListener("change", filterOrganizations);
document.getElementById("governorateFilter").addEventListener("change", filterOrganizations);
document.getElementById("orgTypeFilter").addEventListener("change", filterOrganizations);

function displayOrganizationDetails(organization) {
    alert(`Organization Name: ${organization.name}\nOrganization Type: ${organization.organizationType}\nAddress: ${organization.organizationAddress}\nArea: ${organization.area}\nGovernorate: ${organization.governorate}`);
}

document.getElementById("areaFilter").addEventListener("input", filterOrganizations);
document.getElementById("governorateFilter").addEventListener("input", filterOrganizations);
document.getElementById("orgTypeFilter").addEventListener("input", filterOrganizations);

function displayOrganizationDetails(organization) {
    alert(`Organization Name: ${organization.name}\nOrganization Type: ${organization.organizationType}\nAddress: ${organization.organizationAddress}\nArea: ${organization.area}\nGovernorate: ${organization.governorate}`);
}
var donors = []; // Define the donors array in the global scope

var isdonListDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("viewdonb").addEventListener("click", function() {
        if (!isdonListDisplayed) {
             donors = [
                { firstName: "Dr.", lastName: "Yehia" },
                { firstName: "Dr.", lastName: "Nader" },
                { firstName: "Dr.", lastName: "Samy" },
                { firstName: "Mrs.", lastName: "Dalia" },
                { firstName: "Mrs.", lastName: "Shaymaa" },
                { firstName: "Mrs.", lastName: "Pakinam" }
            ];

            displayDonorsList(donors);
            isdonListDisplayed = true;
        }
    });
});

function displayDonorsList(donors) {
    var donorsListElement = document.getElementById("donorsList");

    donorsListElement.innerHTML = ""; 

    donors.forEach(function(donor) {
        var listItem = document.createElement("div");
        listItem.innerHTML = "<strong>" + donor.firstName + " " + donor.lastName + "</strong>";

        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            deleteDonor(donor);
        });

        listItem.appendChild(deleteButton); 
        donorsListElement.appendChild(listItem);
    });
    deleteButton.addEventListener("click", function() {
        deleteDonor(donor);
    });
    
}
var isorgListDisplayed = false;
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("vieworgb").addEventListener("click", function() {
        if (!isorgListDisplayed) {
            var organizations = [
                { 
                    name: "Tabaro3",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "123 Smouha",
                    area: "Smouha",
                    governorate: "Alexandria",
                    description: "Description of Tabaro3 organization.",
                    email: "blabla@gmail.com"
                },
                { 
                    name: "Hayat",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "456 Hayat",
                    area: "Hayat",
                    governorate: "Hayat",
                    description: "Description of Hayat organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Enkez",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "789 Enkez",
                    area: "Enkez",
                    governorate: "Enkez",
                    description: "Description of Enkez organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Tabaro3at",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1011 Tabaro3at",
                    area: "Tabaro3at",
                    governorate: "Tabaro3at",
                    description: "Description of Tabaro3at organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Mosta2bal",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1213 Mosta2bal",
                    area: "Mosta2bal",
                    governorate: "Mosta2bal",
                    description: "Description of Mosta2bal organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Yamin",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1415 Yamin",
                    area: "Yamin",
                    governorate: "Yamin",
                    description: "Description of Yamin organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Yamal",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1617 Yamal",
                    area: "Yamal",
                    governorate: "Yamal",
                    description: "Description of Yamal organization.",
                    email: "blabla@gmail.com"

                },
                { 
                    name: "Bokra",
                    organizationType: "Charity Foundation", 
                    organizationAddress: "1819 Bokra",
                    area: "Bokra",
                    governorate: "Bokra",
                    description: "Description of Bokra organization.",
                    email: "blabla@gmail.com"

                }
            ];

            displayOrganizationsList(organizations);
            isorgListDisplayed = true;
        }
    });
});

function displayOrganizationsList(organizations) {
    var organizationsListElement = document.getElementById("organizationsList");

    organizationsListElement.innerHTML = "";

    organizations.forEach(function(organization) {
        var listItem = document.createElement("div");
        listItem.innerHTML = "<strong>" + organization.name + "</strong>";
        
        var detailsButton = document.createElement("button");
        detailsButton.textContent = "View Details";
        detailsButton.classList.add("details");
        detailsButton.addEventListener("click", function() {
            displayOrganizationDetails(organization);
        });

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        deleteButton.addEventListener("click", function() {
            deleteOrganization(organization);
        });

        listItem.appendChild(detailsButton);
        listItem.appendChild(deleteButton);
        organizationsListElement.appendChild(listItem);
    });
}


function filterOrganizations() {
    var areaFilter = document.getElementById("areaFilter").value.toLowerCase();
    var governorateFilter = document.getElementById("governorateFilter").value.toLowerCase();
    var orgTypeFilter = document.getElementById("orgTypeFilter").value.toLowerCase();

    var filteredOrganizations = organizationsData.filter(function(org) {
        return (areaFilter === "" || org.area.toLowerCase() === areaFilter) &&
               (governorateFilter === "" || org.governorate.toLowerCase() === governorateFilter) &&
               (orgTypeFilter === "" || org.organizationType.toLowerCase() === orgTypeFilter);
    });

    displayOrganizationsList(filteredOrganizations);
}

document.getElementById("areaFilter").addEventListener("change", filterOrganizations);
document.getElementById("governorateFilter").addEventListener("change", filterOrganizations);
document.getElementById("orgTypeFilter").addEventListener("change", filterOrganizations);

function displayOrganizationDetails(organization) {
    alert(`Organization Name: ${organization.name}\nOrganization Type: ${organization.organizationType}\nAddress: ${organization.organizationAddress}\nArea: ${organization.area}\nGovernorate: ${organization.governorate}\n Email: ${organization.email}`);
}



