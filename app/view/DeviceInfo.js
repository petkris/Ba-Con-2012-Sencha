Ext.define('BaCon.view.DeviceInfo', {
	extend: 'Ext.Container',
	xtype: 'deviceInfo',
	
	config: {
		
		tab: {
			title: 'Device',
			iconCls: 'help',
		},
		
		layout: 'fit',
		
		styleHtmlContent: true,
		scrollable: 'vertical',
		cls: 'whitePage',
		
		items: [
		    {
		        docked: 'top',
		        xtype: 'toolbar',
				title: 'Device Info'
		    }
		],
		
		html:
			'<b>Browser name:</b> ' + Ext.browser.name + '<br/>' +
			'<b>Browser engine:</b> ' + Ext.browser.engineName + '<br/>' +
			'<b>Device name:</b> ' + Ext.os.name + '<br/>' +
			'<b>Device type:</b> ' + Ext.os.deviceType + '<br/>' +
			'<b>PhoneGap:</b> ' + (window.PhoneGap?'true':'false') + '<br/>'
	},
	
//	initialize: function() {
//		this.callParent();
//		Ext.Ajax.request({
//			url: 'resources/pages/help.html',
//			success: function(rs) {
//				this.setHtml(rs.responseText);
//			},
//			scope: this
//		});
//	}
});
