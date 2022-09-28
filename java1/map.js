


var map
 function mapinit(){
 
 
 var map = L.map("map").setView([13,80], 11);
 var osm = L.tileLayer(
   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
   {
     maxZoom: 19,
     attribution:
       '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   }
 )
 osm.addTo(map);

 // gps
 
 function createButton(label, container) {
     var btn = L.DomUtil.create('button', '', container);
     btn.setAttribute('type', 'button');
     btn.innerHTML = label;
     return btn;
 }
 
 map.on('click', function(e) {
     var container = L.DomUtil.create('div'),
        startBtn = createButton('Start from this location', container),
         destBtn = createButton('Go to this location', container);
 
         
 
         L.DomEvent.on(startBtn, 'click', function() {
         control.spliceWaypoints(0, 1, e.latlng);
         map.closePopup();
     });
 
 
 
     L.DomEvent.on(destBtn, 'click', function() {
         control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
         map.closePopup();
     });
 
 
 
 
     L.popup()
         .setContent(container)
         .setLatLng(e.latlng)
         .openOn(map);
 });
 
 
 
 var ReversablePlan = L.Routing.Plan.extend({
   
 })
 
 
 
 
 var plan = new ReversablePlan([
      
     ], {
         geocoder: L.Control.Geocoder.nominatim(),
         routeWhileDragging: true,
         reverseWaypoints : true
   
 
 
     }),
     control =
      L.Routing.control({
         position: 'topleft',
         routeWhileDragging: true,
         plan: plan,
        
     }).addTo(map);

 
 
 
 
 
 L.control.locate({
     position: 'topleft',
     strings: {
         title: "Your location"
     }
 }).addTo(map);
 

 }