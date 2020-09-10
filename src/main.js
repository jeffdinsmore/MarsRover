import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import NasaService from './nasa-service.js';

function getElements(response){
  if (response) {
    
    $("#searchResultOne").attr("src", response.photos[0].img_src);
    $("#searchResultOneTextCenter").html("Camera: " + response.photos[0].camera.full_name);
    $("#searchResultOneTextLeft").html("Rover: " + response.photos[0].rover.name);
    $("#searchResultOneTextRight").html("Sol Date: " + response.photos[0].sol);
    $("#searchResultTwo").attr("src", response.photos[3].img_src);
    $("#searchResultTwoTextCenter").html("Camera: " + response.photos[3].camera.full_name);
    $("#searchResultTwoTextLeft").html("Rover: " + response.photos[3].rover.name);
    $("#searchResultTwoTextRight").html("Sol Date: " + response.photos[3].sol);
    $("#searchResultThree").attr("src", response.photos[4].img_src);
    $("#searchResultThreeTextCenter").html("Camera: " + response.photos[4].camera.full_name);
    $("#searchResultThreeTextLeft").html("Rover: " + response.photos[4].rover.name);
    $("#searchResultThreeTextRight").html("Sol Date: " + response.photos[4].sol);
    $("#searchResultFour").attr("src", response.photos[5].img_src);
    $("#searchResultFourTextCenter").html("Camera: " + response.photos[5].camera.full_name);
    $("#searchResultFourTextLeft").html("Rover: " + response.photos[5].rover.name);
    $("#searchResultFourTextRight").html("Sol Date: " + response.photos[5].sol);
  } else {
    $("#searchResultOneText").html(`ERROR! Call Jeff! ${response.message}`);
  }
}


$(document).ready(function () {
  $("#marsButton").click(function () {
    let earthDate = $("#marsFind").val();
    $("#date").html(earthDate);
    let currentDate = new Date(earthDate);
    currentDate.setDate(currentDate.getDate() + 1);
    let minDate = new Date('2012, 08, 06');
    let maxDate = new Date();
    if (currentDate <= minDate || currentDate >= maxDate || currentDate == "Invalid Date"){
      alert('Enter a date between 08-06-2012 and Yesterday!');
    } else {
      $("#marsFind").val("");
      $("#marsModal").modal(); 
      $("#marsResult").show();
    }
    (async function() {
      const response = await NasaService.getMars(earthDate);
      getElements(response);
    })();
  });  
});
