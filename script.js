var image = new ol.style.Circle({   
  radius: 5,
  fill: null,
  stroke: new ol.style.Stroke({color: 'red', width: 1})
});

var styles = {
  'Point': new ol.style.Style({
    image: image
  }),
  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      width: 6
    })
  }),
  'MultiPoint': new ol.style.Style({
    image: image
  }),
  'MultiPolygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  }),
  'Polygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'blue',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  }),
  'GeometryCollection': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  }),
  'Circle': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })
};

var styles1 = {
  'Point': new ol.style.Style({
    image: image
  }),
  'LineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'green',
      width: 1
    })
  }),
  'MultiLineString': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    })
  }),
  'MultiPoint': new ol.style.Style({
    image: image
  }),
  'MultiPolygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      width: 1
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 255, 0, 0.1)'
    })
  }),
  'Polygon': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'yellow',
      lineDash: [4],
      width: 3
    }),
    fill: new ol.style.Fill({
      color: 'rgba(0, 0, 255, 0.1)'
    })
  }),
  'GeometryCollection': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'magenta',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'magenta'
    }),
    image: new ol.style.Circle({
      radius: 10,
      fill: null,
      stroke: new ol.style.Stroke({
        color: 'magenta'
      })
    })
  }),
  'Circle': new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: 'red',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255,0,0,0.2)'
    })
  })
};

function CenterMap(long, lat) {
    //console.log("Long: " + long + " Lat: " + lat);
    map.getView().setCenter(ol.proj.transform([long, lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(5);
}

var geojsonObject;


var styleFunction = function(feature) {
  return styles[feature.getGeometry().getType()];
};

var styleFunction1 = function(feature) {
  return styles1[feature.getGeometry().getType()];
};

var format = new ol.format.GeoJSON({
featureProjection:"EPSG:3857"
});


var vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: styleFunction
});

var vectorLayer1 = new ol.layer.Vector({
  source: new ol.source.Vector(),
  style: styleFunction1
});

var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    }),
    vectorLayer,
    vectorLayer1,
  ],
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: false
    }
  }),
  view: new ol.View({
    center: ol.proj.fromLonLat([112.7425, -7.265278]),
    zoom: 12
  })

});

function execute(){
  if(vectorLayer.getSource()){
    vectorLayer.getSource().clear();
  }
  if(vectorLayer1.getSource()){
    vectorLayer1.getSource().clear();
  }
  var format = new ol.format.GeoJSON({
  featureProjection:"EPSG:3857"
  });
  var done= new Promise(function(resolve,reject){
      var elements=document.forms.lembar.getElementsByTagName('input');
      var daftarhotel = document.getElementById("listhotel");
      var hotelku = daftarhotel.options[daftarhotel.selectedIndex].value;
      console.log(hotelku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/sig/find.php?x1="+tempx+"&y1="+tempy+"&hotel="+hotelku;
      oReq.open("GET",url, true);
      oReq.send();
      console.log(url);
      function reqListener(e) {
          geojsonObject = JSON.parse(this.responseText);
          resolve(geojsonObject);
      }
  });

  done.then((geojsonObject)=>{
    vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
    vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));

  }).catch((error)=>{
    //console.log(error);
  });

  //ini untuk menghitung
  var done1= new Promise(function(resolve,reject){
      var elements=document.forms.lembar.getElementsByTagName('input');
      var daftarhotel = document.getElementById("listhotel");
      var hotelku = daftarhotel.options[daftarhotel.selectedIndex].value;
      console.log(hotelku);
      var temp21 = $('#latitude');
      var tempx = temp21.val();

      var temp22 = $('#longitude');
      var tempy = temp22.val();

      var oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      var url="http://localhost/sig/jarak.php?x1="+tempx+"&y1="+tempy+"&hotel="+hotelku;
      oReq.open("GET",url, true);
      oReq.send();
      console.log(url);
      function reqListener(e) {
          var umu = this.responseText.split('-');
          geojsonObject = JSON.parse(umu[0]);
          resolve(geojsonObject);
      }
  });

  done1.then((geojsonObject)=>{
    console.log(geojsonObject);
    var points = geojsonObject;
    var dist_inMeter = points*51.7647059/1000;
    var dist_string = dist_inMeter.toString();
    dist_string = dist_string.split(".")
    console.log(dist_string);
    var sisa = dist_string[1]
    console.log(sisa);
    var total = dist_string[0]+"."+sisa[0];
    var tex = $('#jarakGanti');
    tex.text("Jarak menuju Hotel: "+total+"km");

    vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
    vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));

  }).catch((error)=>{
    console.log(error);
  });
  return false;
}


function terdekat()
{
  if(vectorLayer.getSource()){
    vectorLayer.getSource().clear();
  }
  if(vectorLayer1.getSource()){
    vectorLayer1.getSource().clear();
  }
  var format = new ol.format.GeoJSON({
  featureProjection:"EPSG:3857"
  });
  // var terpendek;
  // var flag = 0;
  var semuajarak = [99999,0,0,0];

  var terpendek=10000;
  var flag = 0;
  var index = 0;
  var temp21 = $('#latitude');
  var tempx = temp21.val();
  var temp22 = $('#longitude');
  var tempy = temp22.val();
  var hotel, oReq, url;
  var promise1 = new Promise(function(resolve,reject){
    for(i = 1; i <= 20; i++){
      hotel = i;
      oReq = new XMLHttpRequest();
      oReq.onload = reqListener;
      url="http://localhost/sig/jarak.php?x1="+tempx+"&y1="+tempy+"&hotel="+hotel;
      oReq.open("GET",url, true);
      oReq.send();
      console.log(url);
      function reqListener(e) {
        var umu = this.responseText.split('-')
          if(terpendek > parseInt(umu[0])) {
            geojsonObject = JSON.parse(umu[0]);
            resolve(geojsonObject)
            terpendek = umu[0];
            index = umu[1];
          }
          if(umu[1]=='20'){
            var points = geojsonObject;
            var dist_inMeter = points*51.7647059/1000;
            var dist_string = dist_inMeter.toString();
            dist_string = dist_string.split(".")
            //console.log(dist_string);
            var sisa = dist_string[1]
            //console.log(sisa);
            var total = dist_string[0]+"."+sisa[0];
            var tex = $('#jarakGanti');
            console.log(total)
            tex.text("Jarak menuju Hotel: "+total+" km");
            
            $('#pendekpol').attr('value',terpendek);
            var oReq = new XMLHttpRequest();
            oReq.onload = reqListener;
            var url="http://localhost/sig/nama.php?x1="+index;
            oReq.open("GET",url, true);
            oReq.send();
            function reqListener(e) {
                geojsonObject = (this.responseText);
                var nama = $('#namahotel');
                nama.text("Hotel Terdekat: "+geojsonObject);
            }
        
            var done= new Promise(function(resolve,reject){
              var temp21 = $('#latitude');
              var tempx = temp21.val();
        
              var temp22 = $('#longitude');
              var tempy = temp22.val();
              var hotel = index;
              var oReq = new XMLHttpRequest();
              oReq.onload = reqListener;
              var url="http://localhost/sig/find.php?x1="+tempx+"&y1="+tempy+"&hotel="+hotel;
              oReq.open("GET",url, true);
              oReq.send();
              console.log(url);
              function reqListener(e) {
                  geojsonObject = JSON.parse(this.responseText);
                  resolve(geojsonObject);
              }
            });
        
            done.then((geojsonObject)=>{
              vectorLayer.getSource().addFeatures(format.readFeatures(geojsonObject.astar));
              vectorLayer1.getSource().addFeatures(format.readFeatures(geojsonObject.dijkstra));
            }).catch((error)=>{
              console.log(error);
            });
          }
      }
    }
  });                        
}