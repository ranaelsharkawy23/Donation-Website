
function initMaps() {
  
     var map3 = new google.maps.Map(document.getElementById('map3'), {
      zoom: 9,
      center: { lat: 31.2131, lng: 29.9496 } 
    });
    
  
    var marker3 = new google.maps.Marker({
      position: { lat: 31.2131, lng: 29.9496 },
      map: map3,
      title: 'Alexandria'
    });
  
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      zoom: 9,
      center: { lat: 30.0112, lng: 31.0000 } 
    });
  
    var marker2 = new google.maps.Marker({
      position: { lat: 30.0112, lng: 31.0000 },
      map: map2,
      title: 'Sheikh'
    });
  
    var map1 = new google.maps.Map(document.getElementById('map1'), {
      zoom: 9,
      center: { lat: 30.1137, lng: 31.3432 } 
    });
  
    var marker1 = new google.maps.Marker({
      position: { lat: 30.1137, lng: 31.3432 },
      map: map1,
      title: 'Cai'
    });
  
    var map4 = new google.maps.Map(document.getElementById('map4'), {
      zoom: 9,
      center: { lat: 31.2247, lng: 29.9550 } 
    });
  
    var marker5 = new google.maps.Marker({
      position: { lat: 31.2247, lng: 29.9550 },
      map: map4,
      title: 'Alexan'
    });


    var map5 = new google.maps.Map(document.getElementById('map5'), {
      zoom: 9,
      center: { lat: 30.0444, lng: 31.2357 } 
    });
  
    var marker5 = new google.maps.Marker({
      position: { lat: 30.0444, lng: 31.2357 },
      map: map5,
      title: 'Cairo'
    });
  
  
  }

  window.onload = function() {
    initMaps();
  };

 
  
  function displayMessage(post) {
    alert("Thank you for your contribution! The school will be notified.");
    post.remove();
}



  function filterTeachingPosts() {
    var selectedSubject = document.getElementById("filterSubject").value.toLowerCase();
    var selectedArea = document.getElementById("filterArea").value.toLowerCase();
    var selectedGovernate = document.getElementById("filterGovernate").value.toLowerCase();
    var posts = document.querySelectorAll("#TeachPosts .post");

    posts.forEach(function(post) {
        var subject = post.getAttribute("data-subject").toLowerCase();
        var area = post.getAttribute("data-area").toLowerCase();
        var governorate = post.getAttribute("data-governate").toLowerCase();

        if ((selectedSubject === "all" || subject === selectedSubject) &&
            (selectedArea === "all" || area === selectedArea) &&
            (selectedGovernate === "all" || governorate === selectedGovernate)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
  
