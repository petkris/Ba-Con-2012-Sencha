Ext.define('BaCon.plugin.PullRefresh', {
	extend: 'Ext.plugin.PullRefresh',
	alias: 'plugin.pullRefresh',
	
	config: {
		pullRefreshText: 'Tr&aelig;k ned for at opdatere ... ',
		releaseRefreshText: 'Slip for at opdatere ... ',
		loadingText: 'Indl&aelig;ser ... ',
				
		refreshFn: function(refresher) {
			var store = refresher.getList().getStore();
			store.load();
		},

		pullTpl: Ext.create('Ext.XTemplate',
			'<div class="x-list-pullrefresh">',
				'<div class="x-list-pullrefresh-wrap">',
					'<span class="x-list-pullrefresh-message">{message}</span>',
					'<span class="x-list-pullrefresh-updated">(opdateret <span>{[Ext.util.Format.date(values.lastUpdated, "d-m-Y H:i")]}</span>)</span>',
				'</div>',
			'</div>'
		)
	},
	
	resetRefreshState: function() {
		this.callParent(arguments);
		this.updatedEl.setHtml(Ext.util.Format.date(this.lastUpdated, "d-m-Y H:i"));
	}
});
