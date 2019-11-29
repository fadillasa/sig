<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Cari Hotel</title>
  <link rel="stylesheet" href="https://openlayers.org/en/v4.6.5/css/ol.css" type="text/css">
  <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=requestAnimationFrame,Element.prototype.classList,URL"></script>
  <script src="https://openlayers.org/en/v4.6.5/build/ol.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossorigin="anonymous"></script>
</head>
<body>
  <div>
    <h1 class="lead display-3 text-center">Cari Hotel</h1>
  </div>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div class="collapse navbar-collapse justify-content-md-center">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="index.php">Cari Jarak & Rute ke Hotel</a></li>
          <li class="nav-item active"><a class="nav-link" href="terdekat.php">Cari Hotel Terdekat</a></li>
        </ul>
      </div>
    </nav>
    <main role="main">
      <div class="jumbotron">
        <div class="col-sm-8 mx-auto">
          <div class="form-group row">
            <div class="col-3">
              <button class="btn btn-secondary" onclick="getLocation()">Lokasi Anda Saat Ini</button>
            </div>
            <div class="col-3">
              <input type="text" class="form-control" name="latitude" id="latitude" placeholder="Latitude">
            </div>
            <div class="col-3">
              <input type="text" class="form-control" name="longitude" id="longitude" placeholder="Longitude">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-3">
              <button onclick="return terdekat()" class="btn btn-success" id="buttonCariJarak">Submit</button>
            </div>         
          </div>
          <div class="form-group row">
            <div class="col-3">
              <button id="namahotel" class="btn btn-info">Hotel Terdekat: </button>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-3">
              <button id="jarakGanti" class="btn btn-info">Jarak menuju Hotel: </button>
            </div>          
          </div>
          <form id="lembar">
            <div class="form-group row">
              <div class="col-3">
                <!--<button onclick="return terdekat()" class="btn btn-danger" id="buttonCariJarak">Jarak Terdekat</button>-->
              </div>
              <div class="col-8">
              </div>
              <div class="col-3">
                <!--<input type="text" class="form-control" name="pendekpol" id="pendekpol" >-->
              </div>
            </div>
          </form>
          <div>
            <div id="map" class="map"></div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <script>
    var gis = document.getElementById("demo");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

      } else { 
        gis.innerHTML = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {

      var latitude = position.coords.latitude
      var longitude = position.coords.longitude
      console.log(latitude)
      console.log(longitude)
      $('#latitude').attr('value',latitude)
      $('#longitude').attr('value',longitude)
    }
  </script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script src="script.js"></script>
</body>
</html>