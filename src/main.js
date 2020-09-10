import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './nasa-service.js';

$(document).ready(function () {
  $("#marsButton").click(function () {
    let earthDate = $("#marsFind").val();
    let currentDate = new Date(earthDate);
    currentDate.setDate(currentDate.getDate() + 1);
    let minDate = new Date('2012, 08, 06');
    let maxDate = new Date();
    if (currentDate <= minDate || currentDate >= maxDate){
        alert('Enter a date between 08-06-2012 and Yesterday!')
    } else {
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
        $("#searchResultThree").attr("src", body.photos[4].img_src);
        $("#searchResultThreeTextCenter").html("Camera: " + body.photos[4].camera.full_name);
        $("#searchResultThreeTextLeft").html("Rover: " + body.photos[4].rover.name);
        $("#searchResultThreeTextRight").html("Sol Date: " + body.photos[4].sol);
        $("#searchResultFour").attr("src", body.photos[5].img_src);
        $("#searchResultFourTextCenter").html("Camera: " + body.photos[5].camera.full_name);
        $("#searchResultFourTextLeft").html("Rover: " + body.photos[5].rover.name);
        $("#searchResultFourTextRight").html("Sol Date: " + body.photos[5].sol);
      }, function(error) {
        $("#searchResultOneText").html(`ERROR! Call Jeff! ${error}`);
      });
    }
  });
}); 