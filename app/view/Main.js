Ext.define("BaCon.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainPanel',

    config: {
    	fullscreen: true,
    	
    	tabBar: {
    		docked: 'bottom',
    		layout: {
    			pack: 'center',
    			align: 'center'
    		},
    		scrollable: 'horizontal',
    	},

        ui: 'gray',
        
        items: [
            { xtype: 'bookingContainer' },
            { xtype: 'sessionContainer' },
            { xtype: 'availableContainer' },
            { xtype: 'pigSled' },
            { xtype: 'location' },
            { xtype: 'about' },
            { xtype: 'help' }
        ]
    }

});
