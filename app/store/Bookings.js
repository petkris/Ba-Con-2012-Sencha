Ext.define('BaCon.store.Bookings', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'BaCon.model.Booking',
		storeId: 'bookingsStore',
		
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
