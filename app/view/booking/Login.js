Ext.define('BaCon.view.booking.Login', {
	extend: 'Ext.form.Panel',
	xtype: 'loginForm',
	
	requires: [
        'Ext.field.Password'
    ],
	
	config: {
		title: 'Bookings',
		layout: 'vbox',
		
    	items: [
	        {
	        	xtype: 'panel',
	        	html: 'For at se dine bookings, skal du indtaste din personlige nøgle, som du har modtaget via e-mail.',
	        	styleHtmlContent: true
	        },
	        {
	        	xtype: 'passwordfield',
	        	id: 'keyField',
	        	margin: '0 10 10 10',
	        	cls: 'form-field',
	        	tabIndex: 1
	        },
            {
            	xtype: 'button',
            	text: 'Login',
            	id: 'loginButton',
		    	iconCls: 'action',
		    	iconMask: true,
            	ui: 'action',
	        	margin: '0 10 0 10',
	        	tabIndex: 2
	        }
        ]
	}
});
