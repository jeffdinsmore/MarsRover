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
      $("#searchResultOneText").html("Camera: " + body.photos[0].camera.name + "<br>" + "Rover: " + body.photos[0].rover.name);
      $("#searchResultTwo").attr("src", body.photos[3].img_src);
      $("#searchResultTwoText").html("Camera: " + body.photos[3].camera.name + "<br>" + "Rover: " + body.photos[0].rover.name);
    }, function(error) {
      $("#searchResultOneText").html(`ERROR! Call Jeff! ${error}`);
    });
  });
}); 