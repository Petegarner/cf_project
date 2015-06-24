var myWork = [ {title: "HTML5", pic: "img/html5.jpg"}, {title: "CSS3", pic: "img/css.jpg"},{title: "Javascript", pic: "img/js.png"},{title: "Ruby", pic: "img/ruby.jpg"}
];

$(document).ready(function(){
  //all code goes in here
  $("#message").css("background-color", "#pink");
  $("#button").on("click", function() {
    console.log("clicked");
    var comment = $("#message").val();
    console.log(comment);
    $("#visible-comment").html(comment);
    return false;
    });

  $("#message").on("keyup", function() {
    console.log("keyup happened!");
    var charCount = $("#message").val().length;
    $("#char-count").html(charCount);

    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "black");
    };
  });
  // var rows = $(".my-row");
  // for (var i = 0; i < rows.length; i++) {
  //   if (i%2===0) {
  //     $(rows [i]).css("background-color", "#a8a8a8");
  //   };
  // };

  for(var i=0; i<myWork.length; i++) {
    $("#" + i).css("background-image", "url(" + myWork[i].pic + ")" );
  };

  $(".image2").mouseenter( function() {
    // console.log(this);
    $(this).html("<p class='info'><span class='proj-title'>Title:</span> " + myWork[this.id].title + "</p>");
  }).mouseleave( function() {
    $("p.info").html("");
  })

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(40.6424039,-74.8346149),
      zoom: 10
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });

  };
  google.maps.event.addDomListener(window, 'load', initialize);
});











