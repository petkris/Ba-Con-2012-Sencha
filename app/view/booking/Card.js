Ext.define("BaCon.view.booking.Card", {
    extend: 'Ext.navigation.View',
    xtype: 'bookingContainer',
    
    config: {
    	defaultBackButtonText: 'Tilbage',

    	tab: {
        	title: 'Bookings',
        	iconCls: 'event_complete',
    	},

    	autoDestroy: false,
    	
    	navigationBar: {
    		items: [{
    			xtype: 'button',
    			id: 'logoutButton',
    			text: 'Log ud',
    			align: 'right',
    			hideAnimation: Ext.os.is.Android ? false : {
    				type: 'fadeOut',
    				duration: 200
    			},
    			showAnimation: Ext.os.is.Android ? false : {
    				type: 'fadeIn',
    				duration: 200
    			}    			
    		}]
    	},

    	items: [
    	    {
    	    	xtype: 'bookings',
    	    	store: 'bookingsStore',
    	    	grouped: true,
    	    	pinHeaders: false
    	    }
    	],
		
		listeners: {
        	show: function() {
        		console.log('Bookings');
        	},
        	
        	push: function(navigator, view) {
        		console.log('Bookings - ' + view.config.title);
        	}
        }
    }
    
});
