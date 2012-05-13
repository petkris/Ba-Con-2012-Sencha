Ext.define('BaCon.view.session.Scenario', {
	extend: 'Ext.Container',
	xtype: 'scenario',
	
	config: {
		fullscreen: true,
		layout: 'vbox',
		scrollable: 'vertical',
		
		items: [
            {
    			xtype: 'scenarioInfo'
			}
        ]
	}
});