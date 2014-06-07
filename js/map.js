/** Converts radians to numeric (signed) degrees */
if (typeof Number.prototype.toDegrees == 'undefined') {
    Number.prototype.toDegrees = function() {
        return this * 180 / Math.PI;
    }
}


function navmap()
{
	this.lat = 0;
	this.lon = 0;
	this.brng= 0;
	this.map;//= map = new google.maps.Map();
	this.marker;// = new google.maps.Marker();
	
		var airplane = {
		path: "M43.734,21c-3.631,0-15.092,0-15.092,0  S16.25,5.188,16.047,4.938s-0.422-0.594-1.125-0.672c-0.859-0.095-1.969-0.203-2.328-0.234c-0.406-0.035-0.719,0.141-0.496,0.734  C12.388,5.539,18.748,21,18.748,21H6.034c0,0-2.458-4.722-2.878-5.531C2.965,15.101,2.557,15.014,2,15H1.297  c-0.125,0-0.312,0-0.281,0.344C1.058,15.811,3,25,3,25s-1.888,9.197-1.984,9.656C0.953,34.953,1.172,35,1.297,35H2  c0.966-0.009,0.954-0.079,1.156-0.469C3.576,33.722,6.034,29,6.034,29h12.714c0,0-6.36,15.461-6.65,16.234  c-0.223,0.594,0.09,0.77,0.496,0.734c0.359-0.031,1.469-0.139,2.328-0.234c0.703-0.078,0.922-0.422,1.125-0.672S28.643,29,28.643,29  s11.461,0,15.092,0c3.766,0,5.264-3.031,5.264-4S47.484,21,43.734,21z",
		fillColor: 'yellow',
		fillOpacity: 0.8,
		anchor: new google.maps.Point(25, 25),
		scale: 1,
		rotation: this.brng-90,		// -90 adjusts for design of marker icon
		strokeColor: 'red',
		strokeWeight: 2
	};
	
	var myLatLng = new google.maps.LatLng(this.lat, this.lon);
    var myOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    this.map = new google.maps.Map( document.getElementById( 'map-canvas' ), myOptions );
    this.marker = new google.maps.Marker( {position: myLatLng, icon: airplane, map: this.map} );
	this.move(this.lat, this.lon, this.brng);
	this.marker.setMap( this.map );
	
}


navmap.prototype.move = function(new_lat, new_lon, new_brng)
{
	this.lat = new_lat;
	this.lon = new_lon;
	this.brng= new_brng;
	


	var myLatLng = new google.maps.LatLng(this.lat, this.lon);
	//this.marker = new google.maps.Marker( {position: myLatLng, icon: airplane, map: this.map} );
    this.marker.setPosition(myLatLng);
    this.map.panTo(myLatLng);	
}

navmap.prototype.flyto = function(new_lat, new_lon)
{
	// http://www.movable-type.co.uk/scripts/latlong.html
	// φ is latitude, λ is longitude
	
	var f1= this.lat, f2= new_lat;
	var l1= this.lon, l2= new_lon;
		
	var y = Math.sin(l2-l1) * Math.cos(f2);
	var x = Math.cos(f1)*Math.sin(f2) - Math.sin(f1)*Math.cos(f2)*Math.cos(l2-l1);
	var brng = Math.atan2(y, x).toDegrees();

	this.move(new_lat, new_lon, brng);
}

/*
navmap.prototype.init = function()
{
    var myLatLng = new google.maps.LatLng(this.lat, this.lon);
    var myOptions = {
		zoom: 15,
		center: myLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    this.map = new google.maps.Map( document.getElementById( 'map-canvas' ), myOptions );
    //this.marker = new google.maps.Marker( {position: myLatLng, icon: airplane, map: this.map} );
	this.move(this.lat, this.lon, this.brng);
	this.marker.setMap( this.map );

}*/


