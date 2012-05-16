Ext.define('BaCon.model.Scenario', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
		    { name: 'name', type: 'string' },
		    { name: 'author', type: 'string' },
		    { name: 'optimal_participants', type: 'int' },
		    { name: 'description', type: 'string' },
		    { name: 'system', type: 'string' },
		    { name: 'genre', type: 'string' },
		    { name: 'duration', type: 'string' },
		    { name: 'style', type: 'string' },
		    { name: 'remarks', type: 'string' }
		]
	}
});
