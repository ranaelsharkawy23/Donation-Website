(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1600:{
          items:1,
          nav:true
      }
  }
});


// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.causes_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:2,
          nav:false
      },
      992:{
          items:3,
          nav:false
      },
      1200:{
          items:3,
      }
  }
});
  //about-pro-active
$('.news_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:2,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

})(jQuery);	

function filterPosts() {
  var filterType = document.getElementById("filterType").value;
  var filterMedication = document.getElementById("filterMedication").value;
  var allPosts = document.getElementsByClassName("post");

  for (var i = 0; i < allPosts.length; i++) {
      var post = allPosts[i];
      var postType = post.getAttribute("data-type");
      var postMedication = post.getAttribute("data-medication");

      if (filterType === "medication") {
          if (postType === "medication" && (filterMedication === "all" || filterMedication === postMedication)) {
              post.style.display = "block";
          } else {
              post.style.display = "none";
          }
      } else {
          if (filterType === "all" || filterType === postType) {
              post.style.display = "block";
          } else {
              post.style.display = "none";
          }
      }
  }

  // Show/hide medication filter based on filter type selection
  var filterMedicationDropdown = document.getElementById("filterMedication");
  filterMedicationDropdown.style.display = (filterType === "medication") ? "block" : "none";
}

document.getElementById("filterType").addEventListener("change", filterPosts);
document.getElementById("filterMedication").addEventListener("change", filterPosts);



// Call the setupDropdown function to set up the event listener
setupDropdown();

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById('Clinic');
  const table = document.getElementById('clinic Information');

  button.addEventListener('click', function() {
      if (table.style.display === 'none') {
          table.style.display = 'table';
      } else {
          table.style.display = 'none';
      }
  });
});

function donate(item, maxQuantity) {
  var quantityInputId = item.replace(/\s+/g, '') + 'QuantityInput';
  var quantityInput = document.getElementById(quantityInputId);
  var quantity = parseInt(quantityInput.value);
  var donationMessageId = 'donationMessage_' + item.replace(/\s+/g, '');

  if (quantity > 0 && quantity <= maxQuantity) {
      alert('Thank you for your contribution. Your donation is pending.');
      window.location.href = 'donationDelivery.html';
      document.getElementById(donationMessageId).style.display = 'block';
      // Redirect to another page after the alert is closed
      window.location.href = 'donationDelivery.html'; // Replace 'page.html' with the URL of the page you want to redirect to
  } else {
      alert('Please enter a valid quantity between 1 and ' + maxQuantity + '.');
  }
} 

function filterTable1() {
  var selectedHospital = document.getElementById("hospital").value;
  var selectedArea = document.getElementById("area").value;
  var selectedGovernate = document.getElementById("governate").value;
  var tableRows = document.querySelectorAll("#donationRequests tbody tr");

  for (var i = 0; i < tableRows.length; i++) {
    var hospitalCell = tableRows[i].querySelector(".hospital");
    var areaCell = tableRows[i].querySelector(".area");
    var governateCell = tableRows[i].querySelector(".governate");
    if ((selectedHospital === "" || hospitalCell.textContent === selectedHospital)&&(selectedArea === "" || areaCell.textContent === selectedArea ) &&(selectedGovernate === "" || governateCell.textContent === selectedGovernate )) {
      tableRows[i].style.display = "";
    } else {
      tableRows[i].style.display = "none";
    }
  }
}

/*function filterTable2() {
  var ageFilter = document.getElementById('age').value.toLowerCase();
  var genderFilter = document.getElementById('gender').value.toLowerCase();
  var seasonFilter = document.getElementById('season').value.toLowerCase();
  var tableRows = document.getElementById('clothes').getElementsByTagName('tr');

  for (var i = 0; i < tableRows.length; i++) {
    var row = tableRows[i];
    var age = row.getElementsByClassName('age')[0].textContent.toLowerCase();
    var gender = row.getElementsByClassName('gender')[0].textContent.toLowerCase();
    var season = row.getElementsByClassName('season')[0].textContent.toLowerCase();

    if ((ageFilter === '' || age === ageFilter) &&
        (genderFilter === '' || gender === genderFilter) &&
        (seasonFilter === '' || season === seasonFilter)) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }
}*/
// Function to navigate to another page
function goToPage(url) {
  window.location.href = url;
}

// Example usage: Call goToPage function with the URL of the page you want to navigate to
goToPage("donationDelivery.html");

function initMaps() {
  var map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 10,
    center: { lat: 30.0444, lng: 31.2357 } 
  });

  var marker1 = new google.maps.Marker({
    position: { lat: 30.0444, lng: 31.2357 },
    map: map1,
    title: 'Cairo'
  });

  var map3 = new google.maps.Map(document.getElementById('map3'), {
    zoom: 10,
    center: { lat: 31.2001, lng: 29.9187 } 
  });

  var marker3 = new google.maps.Marker({
    position: { lat: 31.2001, lng: 29.9187 },
    map: map3,
    title: 'Alexandria'
  });

  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 10,
    center: { lat: 30.0131, lng: 31.2089 } 
  });

  var marker2 = new google.maps.Marker({
    position: { lat: 30.0131, lng: 31.2089 },
    map: map2,
    title: 'Giza'
  });

  var map4 = new google.maps.Map(document.getElementById('map4'), {
    zoom: 10,
    center: { lat: 30.0112, lng: 31.0000 } 
  });

  var marker4 = new google.maps.Marker({
    position: { lat: 30.0112, lng: 31.0000 },
    map: map4,
    title: 'Sheikh'
  });

  var map5 = new google.maps.Map(document.getElementById('map5'), {
    zoom: 10,
    center: { lat: 31.2247, lng: 29.9550 } 
  });

  var marker5 = new google.maps.Marker({
    position: { lat: 31.2247, lng: 29.9550 },
    map: map5,
    title: 'Alexan'
  });

  

  var map6 = new google.maps.Map(document.getElementById('map6'), {
    zoom: 10,
    center: { lat: 30.1137, lng: 31.3432 } 
  });

  var marker6 = new google.maps.Marker({
    position: { lat: 30.1137, lng: 31.3432 },
    map: map6,
    title: 'Cai'
  });

  


}



window.onload = function() {
  initMaps();
};




