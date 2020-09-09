import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './nasa-service.js';

$(document).ready(function () {
  $("#marsButton").click(function () {
    const earthDate = $("#marsFind").val();
    $("#marsFind").val(""); 
    $("#marsResult").show();
    let promise= NasaService.getMars(earthDate);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $("#searchResultOne").attr("src", body.photos[0].img_src);
      $("#searchResultOneTextCenter").html("Camera: " + body.photos[0].camera.full_name);
      $("#searchResultOneTextLeft").html("Rover: " + body.photos[0].rover.name);
      $("#searchResultOneTextRight").html("Sol Date: " + body.photos[0].sol);
      $("#searchResultTwo").attr("src", body.photos[3].img_src);
      $("#searchResultTwoTextCenter").html("Camera: " + body.photos[3].camera.full_name);
      $("#searchResultTwoTextLeft").html("Rover: " + body.photos[3].rover.name);
      $("#searchResultTwoTextRight").html("Sol Date: " + body.photos[3].sol);

    }, function(error) {
      $("#searchResultOneText").html(`ERROR! Call Jeff! ${error}`);
    });
  });
}); 