Ext.define("BaCon.view.available.Card", {
    extend: 'Ext.navigation.View',
    xtype: 'availableContainer',
    
    config: {
    	
    	defaultBackButtonText: 'Tilbage',

    	tab: {
        	title: 'Ledige',
        	iconCls: 'user_add'
    	},

    	autoDestroy: false,
    	
    	items: [
    	    {
    	    	xtype: 'availables',
    	    	store: 'availablesStore',
    	    	grouped: true,
    	    	pinHeaders: false
    	    }
    	],
		
		listeners: {
        	show: function() {
//        		console.log('Available');
        	},
        	
        	push: function(navigator, view) {
//        		console.log('Available - ' + view.config.title);
        	}
        }
    }
    
});
