Ext.define('BaCon.model.User', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [
		    { name: 'key', type: 'string' }
		],
		
		proxy: {
			type: 'localstorage'
		}		
	}
});
