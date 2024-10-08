document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerOrgBtn").addEventListener("click", function() {
        var registrationInputs = document.getElementById("registrationInputs");
        registrationInputs.style.display = "block";

        var registerButton = document.getElementById("registerOrgDataBtn");
        if (!registerButton) {
            registerButton = document.createElement("button");
            registerButton.textContent = "Register Organization";
            registerButton.id = "registerOrgDataBtn";
            // Append the register button to the same container as the file input
            document.getElementById("registrationInputs").appendChild(registerButton);

            registerButton.addEventListener("click", function() {
                var organizationName = document.getElementById("organizationName").value;
                var firstName = document.getElementById("firstName").value;
                var lastName = document.getElementById("lastName").value;
                var gender = document.getElementById("gender").value;
                var email = document.getElementById("email").value;
                var password = document.getElementById("password2").value;
                var contactNumber = document.getElementById("contactNumber").value;
                var orgType = document.getElementById("organizationType").value;
                var orgAddress = document.getElementById("organizationAddress").value;
                var area = document.getElementById("area").value;
                var governorate = document.getElementById("governorate").value;
                var file = document.getElementById("fileInput").value;
                if (!organizationName || !firstName || !lastName || !gender || !email || !password || !contactNumber || !orgType || !orgAddress || !area || !governorate || !file) {
                    alert("Please complete all the missing inputs.");
                } else {
                    alert("The organization '" + organizationName + "' has requested to join.");
                }
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registerDonorBtn").addEventListener("click", function() {
        var donorRegistrationInputs = document.getElementById("donorRegistrationInputs");
        donorRegistrationInputs.style.display = "block";

        var registerDonorButton = document.getElementById("registerDonorDataBtn");
        if (!registerDonorButton) {
            registerDonorButton = document.createElement("button");
            registerDonorButton.textContent = "Register Donor";
            registerDonorButton.id = "registerDonorDataBtn";
            document.body.appendChild(registerDonorButton);
            donorRegistrationInputs.appendChild(registerDonorButton); 

            registerDonorButton.addEventListener("click", function() {
                var donorFirstName = document.getElementById("donorFirstName").value;
                var donorLastName = document.getElementById("donorLastName").value;
                var donorGender = document.getElementById("donorGender").value;
                var donorEmail = document.getElementById("donorEmail").value;
                var donorPassword = document.getElementById("donorPassword").value;
                var donorContactNumber = document.getElementById("donorContactNumber").value;
                var donorAddress = document.getElementById("donorAddress").value;
                var donorArea = document.getElementById("donorArea").value;
                var donorGovernorate = document.getElementById("donorGovernorate").value;
                var fileInput1 = document.getElementById("fileInput1").value;

                if (!donorFirstName || !donorLastName || !donorGender || !donorEmail || !donorPassword || !donorContactNumber || !donorAddress || !donorArea || !donorGovernorate || fileInput1) {
                    alert("Please complete all the missing inputs.");
                } else {
                    alert("Donor '" + donorFirstName + " " + donorLastName + "' has been registered.");
                }
            });
        }
    });
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 31.2155, lng: 29.9420 },
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: { lat: 31.2155, lng: 29.9420 },
        map: map,
        title: 'Donations'
    });
}

function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');
    const successMessage = document.getElementById('successMessage');

    if (fileInput.files.length > 0) {
        const files = fileInput.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            status.innerHTML += `Selected file: ${file.name} <br>`;
        }
        successMessage.textContent = 'Files uploaded successfully.';
    } else {
        status.textContent = '';
        successMessage.textContent = 'Please select one or more files to upload.';
    }
}
function uploadFiles1() {
    const fileInput = document.getElementById('fileInput1');
    const status = document.getElementById('status1');
    const successMessage = document.getElementById('successMessage1');

    if (fileInput.files.length > 0) {
        const files = fileInput.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            status.innerHTML += `Selected file: ${file.name} <br>`;
        }
        successMessage.textContent = 'Files uploaded successfully.';
    } else {
        status.textContent = '';
        successMessage.textContent = 'Please select one or more files to upload.';
    }
}