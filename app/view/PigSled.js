Ext.define('BaCon.view.PigSled', {
	extend: 'Ext.form.Panel',
	xtype: 'pigSled',
	
	requires: [
        'Ext.field.Select'
    ],
	
	config: {
		
    	tab: {
			title: 'Svineslæden',
			iconCls: 'pig',
		},
		
		layout: 'vbox',
		scrollable: 'vertical',
		
		defaults: {
			labelAlign: 'top'
		},
		
		items: [
		    {
		    	docked: 'top',
		    	xtype: 'toolbar',
				title: 'Svineslæden'
		    },
		    {
		    	xtype: 'panel',
		    	html: 
	    	        'Svineslæden er kioskens mobile tjener, som bringer alle kioskens varer til dig, så du kan koncentrerer dig om spillet.<br/>' +
	    	        'Vælg <i>lokale</i>, indtast din <i>bestilling</i> og send SMS til kioskens mobil.',
		    	styleHtmlContent: true,
		    	cls: 'htmlPage'
		    },
		    {
	        	xtype: 'selectfield',
	        	name: 'location',
	        	label: 'Lokale',
	        	options: BaCon.Config.locations,
	        	valueField: 'text',
	        	usePicker: false,
		    	margin: '0 10 10 10',
	        	cls: 'form-field',
	        	tabIndex: 1
		    },
		    {
		    	xtype: 'textareafield',
		    	name: 'order',
		    	label: 'Bestilling',
		    	maxRows: 4,
		    	margin: '0 10 10 10',
	        	cls: 'form-field',
	        	tabIndex: 2
		    },
		    {
		    	xtype: 'button',
		    	ui: 'action',
		    	text: 'Send bestilling',
		    	iconCls: 'action',
		    	iconMask: true,
		    	margin: '0 10 10 10',
		    	tabIndex: 3
		    }
		],
		
		listeners: {
        	show: function() {
//        		console.log('PigSled');
        	}
        }
	}
	
});
