Ext.define('BaCon.store.Users', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'BaCon.model.User',
		storeId: 'usersStore',
		autoLoad: true,
		autoSync: true
	}
});
