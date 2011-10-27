var win = Ti.UI.createWindow({
	backgroundColor:'white',
	modal: true,
	title:'BarCamp Rochester'
});

var anno = Ti.Map.createAnnotation({
	latitude:43.082602,
	pincolor:Titanium.Map.ANNOTATION_GREEN,
	longitude:-77.676859,
	title:"BarCamp Rochester",
	rightButton: 'barcamp.png'
});
var map = Ti.Map.createView({
	region: {
		latitude:43.082602,
		longitude:-77.676859,
		latitudeDelta:0.01,
		longitudeDelta:0.01},
	animate:true,
	regionFit:true,
	annotations:[anno]
});
map.addEventListener('click', function(e){
	if(e.clicksource=='rightButton') {
		alert('I was clicked!');
		map.deselectAnnotation(e.annotation);
	}
});

win.add(map);
win.open();
