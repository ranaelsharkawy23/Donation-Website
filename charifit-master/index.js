/*14*/
function uploadFiles() {
    const fileInput = document.getElementById('fileInput');
    const status = document.getElementById('status');
  
    if (fileInput.files.length > 0) {
      const files = fileInput.files;
      // Loop through the selected files and handle each one
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        // You can use the File API to access the file details and perform further operations
        status.innerHTML += `Selected file: ${file.name}<br>`;
        // Here you can add code to upload each file to a server using AJAX, fetch, or other methods
      }
    } else {
      status.textContent = 'Please select one or more files to upload.';
    }
  }