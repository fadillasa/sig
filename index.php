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
          <li class="nav-item active"><a class="nav-link" href="index.php">Cari Jarak & Rute ke Hotel</a></li>
          <li class="nav-item"><a class="nav-link" href="terdekat.php">Cari Hotel Terdekat</a></li>
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
            <label class="col-3 col-form-label" for="exampleFormControlInput1">Nama Hotel</label>
            <div class="col-4">
              <select class="custom-select" id=listhotel name="product" width="100" style="width: 245px">
                <option selected>Pilih Hotel Tujuan</option>
                <option value="17">Ascott Waterplace Surabaya</option>
                <option value="14">Bumi Surabaya City Resort</option>
                <option value="3">Core Hotel Bonnet Surabaya</option>
                <option value="19">Four Points By Sheraton Surabaya</option>
                <option value="20">Grand Mercure Surabaya City</option>
                <option value="10">HARRIS Hotel & Conventions Gubeng</option>
                <option value="18">Hotel Ciputra World Surabaya</option>
                <option value="5">Hotel Dafam Pacific Caesar Surabaya</option>
                <option value="8">Hotel Evora Surabaya</option>
                <option value="7">Hotel Gunawangsa Manyar</option>
                <option value="11">Hotel Majapahit Surabaya</option>
                <option value="9">Hotel Sahid Surabaya</option>
                <option value="12">JW Marriott Hotel Surabaya</option>
                <option value="6">MaxOne Hotel Dharmahusada</option>
                <option value="4">Novotel Samator East Surabaya Hotel</option>
                <option value="1">Oakwood Hotel & Residence Surabaya</option>
                <option value="15">Shangri-La Hotel Surabaya</option>
                <option value="13">Sheraton Surabaya Hotel & Towers</option>
                <option value="2">Swiss-Belinn Manyar Surabaya</option>
                <option value="16">Wyndham Surabaya</option>
              </select>
            </div>
          </div>
          <form id="lembar">
            <button onclick="return execute()" class="btn btn-success mb-2">Submit</button>
          </form>
          <button id="jarakGanti" class="btn btn-info">Jarak menuju Hotel: </button>
          <br><br>
          <div id="map" class="map"></div>
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