Ext.define('BaCon.view.available.Available', {
	extend: 'Ext.Container',
	xtype: 'available',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		scrollable: 'vertical',
		
		items: [
            {
            	xtype: 'availableInfo'
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