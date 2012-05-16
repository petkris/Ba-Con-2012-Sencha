Ext.define('BaCon.view.Location', {
	extend: 'Ext.Container',
	requires: 'Ext.Map',
	xtype: 'location',

	config: {

		tab: {
			title: 'Beliggenhed',
			iconCls: 'locate3',
		},

		layout: 'fit',

		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Beliggenhed'
			}
		],
		
		listeners: {
        	show: function() {
        		console.log('Location');
        	}
        }
	},

	initialize: function() {
		this.callParent();

		var huPosition = new google.maps.LatLng(56.044914, 12.57941);
		var huInfoWindow = new google.maps.InfoWindow({
			content: 'Helsingør Ungdomsskole<br/><small>Rasmus Knudsens Vej 52<br/>3000 Helsingør</small>'
		});

//		var dsbPosition = new google.maps.LatLng(56.033535, 12.614493);
//		var dsbInfoWindow = new google.maps.InfoWindow({
//			content: 'DSB'
//		});
		
		var map = this.add({
			xtype: 'map',
			mapOptions: {
				center: huPosition,
		        mapTypeId: google.maps.MapTypeId.ROADMAP
			}
		});

		var huMarker = new google.maps.Marker({
	        position: huPosition,
	        map: map.getMap(),
	        visible: true
	    });

//		var dsbMarker = new google.maps.Marker({
//	        position: dsbPosition,
//	        map: map.getMap(),
//	        visible: true
//	    });

		huInfoWindow.open(map, huMarker);
	    google.maps.event.addListener(huMarker, 'click', function() {
	        huInfoWindow.open(map, huMarker);
	    });
	}
});
