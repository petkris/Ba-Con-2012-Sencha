Ext.define('BaCon.model.Booking', {
	extend: 'Ext.data.Model',
	
	requires: [
        'Ext.DateExtras'
    ],
	
	config: {
		fields: [
		    { name: 'date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		    { name: 'week_day', type: 'string' },
		    { name: 'time_of_day', type: 'string' },
		    { name: 'description', type: 'string' },
		    { name: 'type', type: 'string'},
		    { name: 'scenario_location', type: 'string'},
		    { name: 'scenario_id', type: 'int' },
		    { name: 'menu_id', type: 'int' }
		],
		
		proxy: {
			type: 'baconProxy',
			extraParams: {
			    action: 'bookings'
			}
		}		
	}
});
