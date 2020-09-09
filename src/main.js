import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $("#marsButton").click(function () {
    const solDate = $("#marsFind").val();
    $("#marsFind").val(""); //This might be an aesthitic<sp> thing;


    let request = new XMLHttpRequest();
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${solDate}&api_key=${process.env.API_KEY}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }
    
    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $("#searchResult").attr("src", response.photos[0].img_src);
    }
  });
}); 