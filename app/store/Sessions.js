Ext.define('BaCon.store.Sessions', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'BaCon.model.Session',
		storeId: 'sessionsStore',
		
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
		],
		
		listeners: {
			load: function(store, sessions) {
				var days = {};
				Ext.Array.forEach(sessions, function(session) {
					var week_day = session.get('week_day');
					var date = session.get('date');
					days[week_day] = {
						date: date,
						week_day: week_day,
						text: week_day
					};
				});
				BaCon.sessionDays = Ext.Array.sort(Ext.Object.getValues(days), function(a, b) {
					return a.date < b.date ? -1 : 1;
				});
			}
		}
	}
});
