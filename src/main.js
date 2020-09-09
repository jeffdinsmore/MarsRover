import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#marsButton").click(function () {
    const earthDate = $("#marsFind").val();
    $("#marsFind").val(""); //This might be an aesthitic<sp> thing;
    $("#marsResult").show();

    let request = new XMLHttpRequest();
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${earthDate}&api_key=${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $("#searchResultOne").attr("src", response.photos[0].img_src);
      $("#searchResultOneText").html("Camera: " + response.photos[0].camera.name + "<br>" + "Rover: " + response.photos[0].rover.name);
      $("#searchResultTwo").attr("src", response.photos[3].img_src);
      $("#searchResultTwoText").html("Camera: " + response.photos[3].camera.name + "<br>" + "Rover: " + response.photos[0].rover.name);
    }
  });
}); 