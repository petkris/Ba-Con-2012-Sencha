Ext.define('BaCon.model.Available', {
	extend: 'Ext.data.Model',
	
	requires: 'Ext.DateExtras',
	
	config: {
		fields: [
		    { name: 'date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		    { name: 'slotname', type: 'string' },
		    { name: 'scenario_group', type: 'string' },
		    { name: 'scenario_id', type: 'int' },
		    { name: 'optimal_participants', type: 'int' },
		    { name: 'participants', type: 'int' }
		],
		
		proxy: {
			type: 'baconProxy',
			extraParams: {
			    action: 'available'
			}
		}		
	}
});
