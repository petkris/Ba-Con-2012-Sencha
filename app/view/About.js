Ext.define('BaCon.view.About', {
	extend: 'Ext.Container',
	xtype: 'about',
	
	config: {
		
		tab: {
			title: 'Om',
			iconCls: 'star',
		},
		
		layout: 'fit',
		
		styleHtmlContent: true,
		scrollable: 'vertical',
		cls: 'whitePage',
		
		items: [
		    {
		        docked: 'top',
		        xtype: 'toolbar',
				title: 'Om Ba-Con 2012'
		    }
		],
		
		listeners: {
        	show: function() {
//        		console.log('About');
        	}
        }
	},
	
	initialize: function() {
		this.callParent();
		Ext.Ajax.request({
			url: 'resources/pages/about.html',
			success: function(rs) {
				this.setHtml(rs.responseText);
			},
			scope: this
		});
	}
});
