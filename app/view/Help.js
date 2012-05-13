Ext.define('BaCon.view.Help', {
	extend: 'Ext.Container',
	xtype: 'help',
	
	config: {
		
		tab: {
			title: 'Hjælp',
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
				title: 'Hjælp'
		    }
		]
	},
	
	initialize: function() {
		this.callParent();
		Ext.Ajax.request({
			url: 'resources/pages/help.html',
			success: function(rs) {
				this.setHtml(rs.responseText);
			},
			scope: this
		});
	}
});
