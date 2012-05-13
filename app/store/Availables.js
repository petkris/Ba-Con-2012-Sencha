Ext.define('BaCon.store.Availables', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'BaCon.model.Available',
		storeId: 'availablesStore',
		autoLoad: true,
		
		grouper: {
			sortProperty: 'date',
			groupFn: function(record) {
				return record.get('slotname');
			}
		},
		
		sorters: [
		    {
		    	property: 'date',
		    	direction: 'ASC'
		    }
		],
		
		filters: [
            {
            	filterFn: function(available) {
            		var now = new Date();
            		if (available.get('date') >= now) {
            			return true;
            		} else {
            			return false;
            		}
            	}
            }
        ]
	}
});
