Ext.define('BaCon.model.Session', {
	extend: 'Ext.data.Model',
	
	requires: 'Ext.DateExtras',
	
	config: {
		fields: [
		    { name: 'date', type: 'date', dateFormat: 'Y-m-d H:i:s' },
		    { name: 'week_day', type: 'string' },
		    { name: 'time_of_day', type: 'string' },
		    { name: 'description', type: 'string' },
		    { name: 'type', type: 'string'},
		    { name: 'menu', type: 'string' },
		    { name: 'scenario_id', type: 'int' },
		    { name: 'menu_id', type: 'int' }
		],
		
		associations: [
		    {
		    	type: 'hasOne',
		    	model: 'BaCon.model.Scenario',
		    	name: 'scenario'
		    }
		],
		
		proxy: {
			type: 'baconProxy',
			extraParams: {
			    action: 'sessions'
		    }
		}		
	}
});
