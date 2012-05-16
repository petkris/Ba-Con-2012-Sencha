Ext.define('BaCon.store.Sessions', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'BaCon.model.Session',
		storeId: 'sessionsStore',
		autoLoad: true,
		
		grouper: {
			sortProperty: 'date',
			groupFn: function(record) {
				return record.get('time_of_day');
			}
		},
		
		sorters: [
		    {
		    	property: 'date',
		    	direction: 'ASC'
		    }
		]
	}
});
