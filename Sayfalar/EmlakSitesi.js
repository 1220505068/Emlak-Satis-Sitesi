src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  function fav() {
    var $fav = $(".fav");
  
    if ($fav.attr("src") === "resimler/Heart_corazón.svg.png") {

      $fav.attr("src", "resimler/1480685.png"); 
      $fav.attr("style", "width: 50px; height: 50px;");     
    } else {
  
      $fav.attr("src", "resimler/Heart_corazón.svg.png");
      $fav.attr("style", "width: 25px; height: 25px; margin-top: 14px;");
    }
  }

  