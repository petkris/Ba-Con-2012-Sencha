Ext.define('BaCon.view.booking.Booking', {
	extend: 'Ext.Container',
	xtype: 'booking',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		scrollable: 'vertical',
		
		items: [
            {
            	xtype: 'bookingInfo'
    		},
    		{
	        	xtype: 'titlebar',
	        	ui: 'neutral',
	        	cls: 'small-title',
	        	title: 'Scenarie beskrivelse'
    		},
            {
    			xtype: 'scenarioInfo'
			}
        ]
	}
});