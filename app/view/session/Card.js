Ext.define("BaCon.view.session.Card", {
    extend: 'Ext.navigation.View',
    xtype: 'sessionContainer',
    
    config: {
    	
    	defaultBackButtonText: 'Tilbage',

    	tab: {
        	title: 'Program',
        	iconCls: 'calendar2'
    	},

    	autoDestroy: false,
    	
    	items: [
    	    {
    	    	xtype: 'sessions',
    	    	store: 'sessionsStore',
    	    	grouped: true,
    	    	pinHeaders: false
    	    }
    	]
    }
    
});
